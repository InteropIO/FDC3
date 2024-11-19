import { AppIdentifier, AppMetadata, ContextHandler, DesktopAgent, EventHandler, FDC3EventTypes, ImplementationMetadata, IntentHandler, IntentResolution, Listener } from "@kite9/fdc3-standard";
import { ChannelSupport } from "./channels/ChannelSupport";
import { AppSupport } from "./apps/AppSupport";
import { IntentSupport } from "./intents/IntentSupport";
import { HandshakeSupport } from "./handshake/HandshakeSupport";
import { Connectable } from "@kite9/fdc3-standard";
import { Context } from "@kite9/fdc3-context";

/**
 * This splits out the functionality of the desktop agent into 
 * app, channels and intents concerns.
 */
export class BasicDesktopAgent implements DesktopAgent, Connectable {

    readonly handshake: HandshakeSupport
    readonly channels: ChannelSupport
    readonly intents: IntentSupport
    readonly apps: AppSupport
    readonly connectables: Connectable[]

    constructor(handshake: HandshakeSupport, channels: ChannelSupport, intents: IntentSupport, apps: AppSupport, connectables: Connectable[]) {
        this.handshake = handshake
        this.intents = intents
        this.channels = channels
        this.apps = apps
        this.connectables = connectables
    }

    async addEventListener(type: FDC3EventTypes | null, handler: EventHandler): Promise<Listener> {
        switch (type) {
            case "userChannelChanged": return this.channels.addChannelChangedEventHandler(handler);
            default:
                throw new Error("UnknownEventType")
        }
    }

    async getInfo(): Promise<ImplementationMetadata> {
        let impl = await this.handshake.getImplementationMetadata();
        //handle potential null during start-up
        //TODO: introduce queuing to prevent early calls
        if (!impl) { 
            impl = {
                fdc3Version: "unknown",
                provider: "unknown",
                optionalFeatures: {
                    OriginatingAppMetadata: false,
                    UserChannelMembershipAPIs: false,
                    DesktopAgentBridging: false
                },
                appMetadata: {appId: "unknown"}
            };
        }
        return impl;
    }

    async broadcast(context: Context): Promise<void> {
        const channel = await this.channels.getUserChannel()
        if (channel) {
            return channel.broadcast(context)
        } else {
            return Promise.resolve();
        }
    }

    async addContextListener(context: ContextHandler | string | null, handler?: ContextHandler): Promise<Listener> {
        const theHandler: ContextHandler = handler ? handler : (context as ContextHandler)
        const theContextType: string | null = context && handler ? (context as string) : null
        return this.channels.addContextListener(theHandler, theContextType)
    }

    getUserChannels() {
        return this.channels.getUserChannels()
    }

    getSystemChannels() {
        return this.channels.getUserChannels()
    }

    getOrCreateChannel(channelId: string) {
        return this.channels.getOrCreate(channelId)
    }

    createPrivateChannel() {
        return this.channels.createPrivateChannel()
    }

    leaveCurrentChannel() {
        return this.channels.leaveUserChannel()
    }

    joinUserChannel(channelId: string) {
        return this.channels.joinUserChannel(channelId)
    }

    joinChannel(channelId: string) {
        return this.channels.joinUserChannel(channelId)
    }

    getCurrentChannel() {
        return this.channels.getUserChannel();
    }

    findIntent(intent: string, context: Context, resultType: string | undefined) {
        return this.intents.findIntent(intent, context, resultType)
    }

    findIntentsByContext(context: Context) {
        return this.intents.findIntentsByContext(context)
    }

    private ensureAppId(app?: any): AppIdentifier | undefined {
        if (typeof app === "string") {
            return {
                appId: app
            }
        } else if (app?.appId) {
            return app as AppIdentifier
        } else {
            return undefined;
        }
    }

    raiseIntent(intent: string, context: Context, app?: any) {
        return this.intents.raiseIntent(intent, context, this.ensureAppId(app))
    }

    addIntentListener(intent: string, handler: IntentHandler) {
        return this.intents.addIntentListener(intent, handler)
    }

    raiseIntentForContext(context: Context, app?: any): Promise<IntentResolution> {
        return this.intents.raiseIntentForContext(context, this.ensureAppId(app))
    }

    open(app: any, context?: Context | undefined) {
        return this.apps.open(this.ensureAppId(app)!, context)
    }

    findInstances(app: AppIdentifier) {
        return this.apps.findInstances(app)
    }

    getAppMetadata(app: AppIdentifier): Promise<AppMetadata> {
        return this.apps.getAppMetadata(app);
    }

    async disconnect(): Promise<void> {
        await Promise.all(this.connectables.map(c => c.disconnect()))
    }

    async connect(): Promise<void> {
        await Promise.all(this.connectables.map(c => c.connect()))
    }
}