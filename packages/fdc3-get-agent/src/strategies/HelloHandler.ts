import {
  WebConnectionProtocolMessage,
  WebConnectionProtocol1Hello,
  isWebConnectionProtocol2LoadURL,
  isWebConnectionProtocol3Handshake,
} from '@kite9/fdc3-schema/generated/api/BrowserTypes';
import { GetAgentParams, WebDesktopAgentType } from '@kite9/fdc3-standard';
import { ConnectionDetails } from '../messaging/MessagePortMessaging';
import { FDC3_VERSION } from './getAgent';

export class HelloHandler {
  constructor(options: GetAgentParams, connectionAttemptUuid: string) {
    this.options = options;
		this.connectionAttemptUuid = connectionAttemptUuid;
		this.helloResponseListener = null;
  }

	/** Parameters passed to getAgent */
	options: GetAgentParams;

	/** UUID used to filter messages */
	connectionAttemptUuid: string;

  /** Reference to event listener used for responses from Desktop Agents -
   *  Used to remove them when no longer needed.
   *  Initialized when
   *  - listening for hello responses
   *  - listening for identity validation responses
   * */
  helloResponseListener: ((event: MessageEvent<WebConnectionProtocolMessage>) => void) | null;

  /**
   * Starts the connection process off by sending a hello message
   */
  sendWCP1Hello(w: MessageEventSource, origin: string) {
    const requestMessage: WebConnectionProtocol1Hello = {
      type: 'WCP1Hello',
      meta: {
        connectionAttemptUuid: this.connectionAttemptUuid,
        timestamp: new Date(),
      },
      payload: {
        channelSelector: this.options.channelSelector,
        fdc3Version: FDC3_VERSION,
        resolver: this.options.intentResolver,
        identityUrl: this.options.identityUrl!!,
        actualUrl: globalThis.window.location.href,
      },
    };

    w.postMessage(requestMessage, { targetOrigin: origin });
  }

  /**
   * The desktop agent requests that the client opens a URL in order to provide a
   * message port.
   */
  openFrame(url: string) {
    const IFRAME_ID = 'fdc3-communications-embedded-iframe';

    // remove an old one if it's there
    const existing = document.getElementById(IFRAME_ID);
    if (existing) {
      existing.remove();
    }

    // create a new one
    var ifrm = document.createElement('iframe');
    ifrm.setAttribute('src', url);
    ifrm.setAttribute('id', IFRAME_ID);
    ifrm.setAttribute('name', 'FDC3 Communications');
    ifrm.style.width = '0px';
    ifrm.style.height = '0px';
    ifrm.style.border = '0';
    ifrm.style.position = 'fixed';

    //Wait for the iframe to load... then send it a hello message
    ifrm.onload = event => {
      if (ifrm.contentWindow) {
        this.sendWCP1Hello(ifrm.contentWindow, '*');
      } else {
        console.error('iframe does not have a contentWindow, despite firing its load event!');
      }
    };
    document.body.appendChild(ifrm);
  }

  /** Listen for WCP responses from 'parent' windows and frames and handle them */
  listenForHelloResponses(): Promise<ConnectionDetails> {
    let agentType = WebDesktopAgentType.ProxyParent;
    let agentUrl: string | null = null;

    return new Promise<ConnectionDetails>((resolve, _reject) => {
      // setup listener for message and retrieve JS URL from it
      this.helloResponseListener = (event: MessageEvent<WebConnectionProtocolMessage>) => {
        const data = event.data;
        if (data?.meta?.connectionAttemptUuid == this.connectionAttemptUuid) {
          if (isWebConnectionProtocol2LoadURL(data)) {
            // in this case, we need to load the URL with the embedded Iframe
            const url = data.payload.iframeUrl;
            this.openFrame(url);

            //note the iframe URL and desktop agent type have changed
            agentType = WebDesktopAgentType.ProxyUrl;
            agentUrl = url;

            //n.b event listener remains in place to receive messages from the iframe
          } else if (isWebConnectionProtocol3Handshake(data)) {
            resolve({
              connectionAttemptUuid: this.connectionAttemptUuid,
              handshake: data,
              messagePort: event.ports[0],
              options: this.options,
              actualUrl: globalThis.window.location.href,
              agentType: agentType,
              agentUrl: agentUrl ?? undefined,
            });

            //remove the event listener as we've received a messagePort to use
            if (this.helloResponseListener != null) {
              globalThis.window.removeEventListener('message', this.helloResponseListener);
              this.helloResponseListener = null;
            }
          } else {
            console.debug(
              `Ignoring message unexpected message in PostMessageLoader (because its not WCP2LoadUrl or WCP3Handshake).`,
              data
            );
          }
        } else {
          console.warn(
            `Ignoring message with invalid connectionAttemptUuid. Expected ${this.connectionAttemptUuid}, received: ${data?.meta?.connectionAttemptUuid}`,
            data
          );
        }
      };

      globalThis.window.addEventListener('message', this.helloResponseListener);
    });
  }

  /** Removes listeners so that events are no longer processed */
  cancel() {
    if (this.helloResponseListener) {
      globalThis.window.removeEventListener('message', this.helloResponseListener);
      this.helloResponseListener = null;
    }
  }
}
