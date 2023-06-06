// To parse this data:
//
//   import { Convert, AppIdentifier, AppIntent, AppMetadata, BaseImplementationMetadata, Channel, ContextMetadata, DesktopAgentIdentifier, DisplayMetadata, Icon, Image, ImplementationMetadata, IntentMetadata, IntentResolution, IntentResult, AgentRequest, AgentResponse, BridgeRequest, BridgeResponse, BroadcastAgentRequest, BroadcastBridgeRequest, ConnectionStep2Hello, ConnectionStep3Handshake, ConnectionStep4AuthenticationFailed, ConnectionStep6ConnectedAgentsUpdate, FindInstancesAgentRequest, FindInstancesAgentResponse, FindInstancesBridgeRequest, FindInstancesBridgeResponse, FindIntentAgentRequest, FindIntentAgentResponse, FindIntentBridgeRequest, FindIntentBridgeResponse, FindIntentsByContextAgentRequest, FindIntentsByContextAgentResponse, FindIntentsByContextBridgeRequest, FindIntentsByContextBridgeResponse, GetAppMetadataRequest, GetAppMetadataResponse, OpenRequest, OpenResponse, PrivateChannelBroadcast, PrivateChannelEventListenerAdded, PrivateChannelEventListenerRemoved, PrivateChannelOnAddContextListener, PrivateChannelOnDisconnect, PrivateChannelOnUnsubscribe, RaiseIntentRequest, RaiseIntentResponse, RaiseIntentResultResponse, Context } from "./file";
//
//   const appIdentifier = Convert.toAppIdentifier(json);
//   const appIntent = Convert.toAppIntent(json);
//   const appMetadata = Convert.toAppMetadata(json);
//   const baseImplementationMetadata = Convert.toBaseImplementationMetadata(json);
//   const channel = Convert.toChannel(json);
//   const contextMetadata = Convert.toContextMetadata(json);
//   const desktopAgentIdentifier = Convert.toDesktopAgentIdentifier(json);
//   const displayMetadata = Convert.toDisplayMetadata(json);
//   const schemasAPIErrorsSchema = Convert.toSchemasAPIErrorsSchema(json);
//   const icon = Convert.toIcon(json);
//   const image = Convert.toImage(json);
//   const implementationMetadata = Convert.toImplementationMetadata(json);
//   const intentMetadata = Convert.toIntentMetadata(json);
//   const intentResolution = Convert.toIntentResolution(json);
//   const intentResult = Convert.toIntentResult(json);
//   const agentRequest = Convert.toAgentRequest(json);
//   const agentResponse = Convert.toAgentResponse(json);
//   const bridgeRequest = Convert.toBridgeRequest(json);
//   const bridgeResponse = Convert.toBridgeResponse(json);
//   const broadcastAgentRequest = Convert.toBroadcastAgentRequest(json);
//   const broadcastBridgeRequest = Convert.toBroadcastBridgeRequest(json);
//   const connectionStep2Hello = Convert.toConnectionStep2Hello(json);
//   const connectionStep3Handshake = Convert.toConnectionStep3Handshake(json);
//   const connectionStep4AuthenticationFailed = Convert.toConnectionStep4AuthenticationFailed(json);
//   const connectionStep6ConnectedAgentsUpdate = Convert.toConnectionStep6ConnectedAgentsUpdate(json);
//   const findInstancesAgentRequest = Convert.toFindInstancesAgentRequest(json);
//   const findInstancesAgentResponse = Convert.toFindInstancesAgentResponse(json);
//   const findInstancesBridgeRequest = Convert.toFindInstancesBridgeRequest(json);
//   const findInstancesBridgeResponse = Convert.toFindInstancesBridgeResponse(json);
//   const findIntentAgentRequest = Convert.toFindIntentAgentRequest(json);
//   const findIntentAgentResponse = Convert.toFindIntentAgentResponse(json);
//   const findIntentBridgeRequest = Convert.toFindIntentBridgeRequest(json);
//   const findIntentBridgeResponse = Convert.toFindIntentBridgeResponse(json);
//   const findIntentsByContextAgentRequest = Convert.toFindIntentsByContextAgentRequest(json);
//   const findIntentsByContextAgentResponse = Convert.toFindIntentsByContextAgentResponse(json);
//   const findIntentsByContextBridgeRequest = Convert.toFindIntentsByContextBridgeRequest(json);
//   const findIntentsByContextBridgeResponse = Convert.toFindIntentsByContextBridgeResponse(json);
//   const getAppMetadataRequest = Convert.toGetAppMetadataRequest(json);
//   const getAppMetadataResponse = Convert.toGetAppMetadataResponse(json);
//   const openRequest = Convert.toOpenRequest(json);
//   const openResponse = Convert.toOpenResponse(json);
//   const privateChannelBroadcast = Convert.toPrivateChannelBroadcast(json);
//   const privateChannelEventListenerAdded = Convert.toPrivateChannelEventListenerAdded(json);
//   const privateChannelEventListenerRemoved = Convert.toPrivateChannelEventListenerRemoved(json);
//   const privateChannelOnAddContextListener = Convert.toPrivateChannelOnAddContextListener(json);
//   const privateChannelOnDisconnect = Convert.toPrivateChannelOnDisconnect(json);
//   const privateChannelOnUnsubscribe = Convert.toPrivateChannelOnUnsubscribe(json);
//   const raiseIntentRequest = Convert.toRaiseIntentRequest(json);
//   const raiseIntentResponse = Convert.toRaiseIntentResponse(json);
//   const raiseIntentResultResponse = Convert.toRaiseIntentResultResponse(json);
//   const context = Convert.toContext(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls at specific applications.
 */
export interface AppIdentifier {
  appId: string;
  desktopAgent?: string;
  instanceId?: string;
  [property: string]: any;
}

/**
 * Represents the binding of an intent to apps
 */
export interface AppIntent {
  apps: AppMetadataElement[];
  intent: IntentClass;
}

/**
 * Extends an AppIdentifier, describing an application or instance of an application.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls at specific applications.
 */
export interface AppMetadataElement {
  appId: string;
  description?: string;
  desktopAgent?: string;
  icons?: IconElement[];
  instanceId?: string;
  instanceMetadata?: { [key: string]: any };
  name?: string;
  resultType?: null | string;
  screenshots?: ScreenshotElement[];
  title?: string;
  tooltip?: string;
  version?: string;
}

/**
 * Metadata relating to a single icon image at a remote URL, used to represent an
 * application in a user interface.
 */
export interface IconElement {
  size?: string;
  src: string;
  type?: string;
}

/**
 * Metadata relating to a single image at a remote URL, used to represent screenshot images.
 */
export interface ScreenshotElement {
  label?: string;
  size?: string;
  src: string;
  type?: string;
}

/**
 * The interface used to describe an intent within the platform.
 */
export interface IntentClass {
  displayName: string;
  name?: string;
}

/**
 * Extends an AppIdentifier, describing an application or instance of an application.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls at specific applications.
 */
export interface AppMetadata {
  appId: string;
  description?: string;
  desktopAgent?: string;
  icons?: IconElement[];
  instanceId?: string;
  instanceMetadata?: { [key: string]: any };
  name?: string;
  resultType?: null | string;
  screenshots?: ScreenshotElement[];
  title?: string;
  tooltip?: string;
  version?: string;
}

/**
 * Base of Implementation Metadata used by Bridging that leaves out the metadata of the
 * calling application (appMetadata)
 */
export interface BaseImplementationMetadata {
  fdc3Version: string;
  optionalFeatures: BaseImplementationMetadataOptionalFeatures;
  provider: string;
  providerVersion?: string;
}

export interface BaseImplementationMetadataOptionalFeatures {
  DesktopAgentBridging: boolean;
  OriginatingAppMetadata: boolean;
  UserChannelMembershipAPIs: boolean;
}

/**
 * Represents a context channel that applications can join to share context data.
 */
export interface Channel {
  displayMetadata?: DisplayMetadataClass;
  id: string;
  type: Type;
}

/**
 * A desktop agent (typically for user channels) may want to provide additional information
 * about how a channel can be represented in a UI. A common use case is for color linking.
 */
export interface DisplayMetadataClass {
  color?: string;
  glyph?: string;
  name?: string;
}

export enum Type {
  App = 'app',
  Private = 'private',
  User = 'user',
}

/**
 * Metadata relating to a context or intent & context received through the
 * addContextListener and addIntentListener functions.
 */
export interface ContextMetadata {
  source: SourceElement;
}

/**
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls at specific applications.
 */
export interface SourceElement {
  appId: string;
  desktopAgent?: string;
  instanceId?: string;
  [property: string]: any;
}

/**
 * Identifies a particular Desktop Agent. Used by Desktop Agent Bridging to indicate the
 * source or destination of a message which was produced by or should be processed by the
 * Desktop Agent itself rather than a specific application. Often added to messages by the
 * Desktop Agent Bridge.
 */
export interface DesktopAgentIdentifier {
  desktopAgent: string;
}

/**
 * A desktop agent (typically for user channels) may want to provide additional information
 * about how a channel can be represented in a UI. A common use case is for color linking.
 */
export interface DisplayMetadata {
  color?: string;
  glyph?: string;
  name?: string;
}

/**
 * Metadata relating to a single icon image at a remote URL, used to represent an
 * application in a user interface.
 */
export interface Icon {
  size?: string;
  src: string;
  type?: string;
}

/**
 * Metadata relating to a single image at a remote URL, used to represent screenshot images.
 */
export interface Image {
  label?: string;
  size?: string;
  src: string;
  type?: string;
}

/**
 * Metadata relating to the FDC3 DesktopAgent object and its provider. Includes all fields
 * from BaseImplementationMetadata and the metadata of the calling application according to
 * the desktop agent.
 *
 * Base of Implementation Metadata used by Bridging that leaves out the metadata of the
 * calling application (appMetadata)
 *
 * DesktopAgent implementationMetadata trying to connect to the bridge.
 */
export interface ImplementationMetadata {
  fdc3Version: string;
  optionalFeatures: ImplementationMetadataOptionalFeatures;
  provider: string;
  providerVersion?: string;
}

export interface ImplementationMetadataOptionalFeatures {
  DesktopAgentBridging: boolean;
  OriginatingAppMetadata: boolean;
  UserChannelMembershipAPIs: boolean;
}

/**
 * The interface used to describe an intent within the platform.
 */
export interface IntentMetadata {
  displayName: string;
  name?: string;
}

/**
 * IntentResolution provides a standard format for data returned upon resolving an intent.
 */
export interface IntentResolution {
  intent: string;
  source: SourceElement;
  version?: string;
}

/**
 * Describes results that an Intent handler may optionally return that should be
 * communicated back to the app that raised the intent, via the IntentResolution.
 *
 * Represents a context channel that applications can join to share context data.
 */
export interface IntentResult {
  id?: { [key: string]: any } | string;
  name?: string;
  type: string;
  displayMetadata?: DisplayMetadataClass;
  [property: string]: any;
}

/**
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface AgentRequest {
  meta: AgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: { [key: string]: any };
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface AgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: Identifier;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: Identifier;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  [property: string]: any;
}

/**
 * Optional field that represents the destination that the request should be routed to. Must
 * be set by the Desktop Agent for API calls that include a target app parameter and must
 * include the name of the Desktop Agent hosting the target application.
 *
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls at specific applications.
 *
 * Identifies a particular Desktop Agent. Used by Desktop Agent Bridging to indicate the
 * source or destination of a message which was produced by or should be processed by the
 * Desktop Agent itself rather than a specific application. Often added to messages by the
 * Desktop Agent Bridge.
 */
export interface Identifier {
  appId?: string;
  desktopAgent?: string;
  instanceId?: string;
  [property: string]: any;
}

/**
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface AgentResponse {
  meta: AgentResponseMetadata;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: { [key: string]: any };
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

export interface AgentResponseMetadata {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: Identifier;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: Identifier;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  /**
   * UUID for the response
   */
  responseUuid: string;
  [property: string]: any;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface BridgeRequest {
  meta: PurpleBridgeRequestMetadata;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: { [key: string]: any };
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface PurpleBridgeRequestMetadata {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: Identifier;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: Identifier;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  [property: string]: any;
}

/**
 * Schema defining the format of all response messages from a the Bridge to the original
 * Desktop Agent that raised a request. Individual message schemas further refine this
 * format for each response type.
 *
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface BridgeResponse {
  meta: PurpleMetadata;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: { [key: string]: any };
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

export interface PurpleMetadata {
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  /**
   * UUID for the response
   */
  responseUuid: string;
  /**
   * Array of error message strings for responses that were not returned to the bridge before
   * the timeout or because an error occurred. Should be the same length as the `errorSources`
   * array and ordered the same. May be omitted if all sources responded without errors.
   */
  errorDetails?: string[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded without errors.
   */
  errorSources?: Identifier[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: Identifier[];
}

/**
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface BroadcastAgentRequest {
  meta: MetaClass;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PurpleMessagePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface MetaClass {
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * Optional field that represents the destination that the request should be routed to. Must
 * be set by the Desktop Agent for API calls that include a target app parameter and must
 * include the name of the Desktop Agent hosting the target application.
 *
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls at specific applications.
 *
 * Identifies a particular Desktop Agent. Used by Desktop Agent Bridging to indicate the
 * source or destination of a message which was produced by or should be processed by the
 * Desktop Agent itself rather than a specific application. Often added to messages by the
 * Desktop Agent Bridge.
 */
export interface SourceObject {
  appId: string;
  desktopAgent?: string;
  instanceId?: string;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PurpleMessagePayload {
  channel: ChannelClass;
  context: ContextElement;
}

/**
 * Represents a context channel that applications can join to share context data.
 */
export interface ChannelClass {
  displayMetadata?: DisplayMetadataClass;
  id: string;
  type: Type;
}

export interface ContextElement {
  id?: { [key: string]: any };
  name?: string;
  type: string;
  [property: string]: any;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface BroadcastBridgeRequest {
  meta: BroadcastBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: BroadcastBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface BroadcastBridgeRequestMeta {
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface BroadcastBridgeRequestPayload {
  channel: ChannelClass;
  context: ContextElement;
}

export interface ConnectionStep2Hello {
  meta: ConnectionStep2HelloMeta;
  payload: ConnectionStep2HelloPayload;
  type: any;
}

export interface ConnectionStep2HelloMeta {
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

export interface ConnectionStep2HelloPayload {
  /**
   * A flag indicating whether the Desktop Agent Bridge requires authentication or not.
   */
  authRequired: boolean;
  /**
   * An optional Desktop Agent Bridge JWT authentication token if the Desktop Agent want to
   * authenticate a bridge.
   */
  authToken?: string;
  /**
   * The version of the Bridge
   */
  desktopAgentBridgeVersion: string;
  /**
   * The FDC3 versions supported by the Bridge
   */
  supportedFDC3Versions: string[];
}

export interface ConnectionStep3Handshake {
  meta: ConnectionStep3HandshakeMeta;
  payload: ConnectionStep3HandshakePayload;
  type: any;
}

export interface ConnectionStep3HandshakeMeta {
  /**
   * Unique UUID for the request
   */
  requestUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

export interface ConnectionStep3HandshakePayload {
  authToken?: string;
  /**
   * The current state of the Desktop Agent's channels, excluding any private channels, as a
   * mapping of channel id to an array of Context objects, most recent first.
   */
  channelsState: { [key: string]: ContextElement[] };
  /**
   * DesktopAgent implementationMetadata trying to connect to the bridge.
   */
  implementationMetadata: ImplementationMetadataClass;
  /**
   * The requested Desktop Agent name
   */
  requestedName: string;
}

/**
 * Base of Implementation Metadata used by Bridging that leaves out the metadata of the
 * calling application (appMetadata)
 *
 * DesktopAgent implementationMetadata trying to connect to the bridge.
 */
export interface ImplementationMetadataClass {
  fdc3Version: string;
  optionalFeatures: ImplementationMetadataOptionalFeatures;
  provider: string;
  providerVersion?: string;
}

export interface ConnectionStep4AuthenticationFailed {
  meta: ConnectionStep4AuthenticationFailedMeta;
  payload?: ConnectionStep4AuthenticationFailedPayload;
  type: any;
}

export interface ConnectionStep4AuthenticationFailedMeta {
  /**
   * Unique UUID for the request
   */
  requestUuid: string;
  /**
   * Unique UUID for the response
   */
  responseUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

export interface ConnectionStep4AuthenticationFailedPayload {
  message?: string;
}

export interface ConnectionStep6ConnectedAgentsUpdate {
  meta: ConnectionStep6ConnectedAgentsUpdateMeta;
  payload: ConnectionStep6ConnectedAgentsUpdatePayload;
  type: any;
}

export interface ConnectionStep6ConnectedAgentsUpdateMeta {
  /**
   * Unique UUID for the request
   */
  requestUuid: string;
  /**
   * Unique UUID for the response
   */
  responseUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

export interface ConnectionStep6ConnectedAgentsUpdatePayload {
  /**
   * Should be set when an agent first connects to the bridge and provide its assigned name.
   */
  addAgent?: string;
  /**
   * Desktop Agent Bridge implementation metadata of all connected agents.
   */
  allAgents: ImplementationMetadataElement[];
  /**
   * The updated state of channels that should be adopted by the agents. Should only be set
   * when an agent is connecting to the bridge.
   */
  channelsState?: { [key: string]: ContextElement[] };
  /**
   * Should be set when an agent disconnects from the bridge and provide the name that no
   * longer is assigned.
   */
  removeAgent?: string;
}

/**
 * Metadata relating to the FDC3 DesktopAgent object and its provider. Includes all fields
 * from BaseImplementationMetadata and the metadata of the calling application according to
 * the desktop agent.
 *
 * Base of Implementation Metadata used by Bridging that leaves out the metadata of the
 * calling application (appMetadata)
 *
 * DesktopAgent implementationMetadata trying to connect to the bridge.
 */
export interface ImplementationMetadataElement {
  fdc3Version: string;
  optionalFeatures: ImplementationMetadataOptionalFeatures;
  provider: string;
  providerVersion?: string;
}

/**
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface FindInstancesAgentRequest {
  meta: AgentRequestMetadata;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: FluffyMessagePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface AgentRequestMetadata {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: DestinationClass;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  [property: string]: any;
}

/**
 * Optional field that represents the destination that the request should be routed to. Must
 * be set by the Desktop Agent for API calls that include a target app parameter and must
 * include the name of the Desktop Agent hosting the target application.
 *
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls at specific applications.
 *
 * Identifies a particular Desktop Agent. Used by Desktop Agent Bridging to indicate the
 * source or destination of a message which was produced by or should be processed by the
 * Desktop Agent itself rather than a specific application. Often added to messages by the
 * Desktop Agent Bridge.
 */
export interface DestinationClass {
  desktopAgent: string;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FluffyMessagePayload {
  app: SourceElement;
}

/**
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface FindInstancesAgentResponse {
  meta: AgentResponseMetadata;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: PurpleEPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface PurpleEPayload {
  appIdentifiers: AppMetadataElement[];
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface FindInstancesBridgeRequest {
  meta: FindInstancesBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: FindInstancesBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface FindInstancesBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: DestinationClass;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FindInstancesBridgeRequestPayload {
  app: SourceElement;
}

/**
 * Schema defining the format of all response messages from a the Bridge to the original
 * Desktop Agent that raised a request. Individual message schemas further refine this
 * format for each response type.
 *
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface FindInstancesBridgeResponse {
  meta: FindInstancesBridgeResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: FindInstancesBridgeResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

export interface FindInstancesBridgeResponseMeta {
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  /**
   * UUID for the response
   */
  responseUuid: string;
  /**
   * Array of error message strings for responses that were not returned to the bridge before
   * the timeout or because an error occurred. Should be the same length as the `errorSources`
   * array and ordered the same. May be omitted if all sources responded without errors.
   */
  errorDetails?: string[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded without errors.
   */
  errorSources?: Identifier[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: ErrorSourceElement[];
}

/**
 * Identifies a particular Desktop Agent. Used by Desktop Agent Bridging to indicate the
 * source or destination of a message which was produced by or should be processed by the
 * Desktop Agent itself rather than a specific application. Often added to messages by the
 * Desktop Agent Bridge.
 */
export interface ErrorSourceElement {
  desktopAgent: string;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface FindInstancesBridgeResponsePayload {
  appIdentifiers: AppMetadataElement[];
}

/**
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface FindIntentAgentRequest {
  meta: EntRequestMetadata;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: TentacledMessagePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface EntRequestMetadata {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: Identifier;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface TentacledMessagePayload {
  context: ContextElement;
  intent: string;
}

/**
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface FindIntentAgentResponse {
  meta: AgentResponseMetadata;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: StickyMessagePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface StickyMessagePayload {
  appIntent: AppIntentElement;
}

/**
 * Represents the binding of an intent to apps
 */
export interface AppIntentElement {
  apps: AppMetadataElement[];
  intent: IntentClass;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface FindIntentBridgeRequest {
  meta: FindIntentBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: FindIntentBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface FindIntentBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: Identifier;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FindIntentBridgeRequestPayload {
  context: ContextElement;
  intent: string;
}

/**
 * Schema defining the format of all response messages from a the Bridge to the original
 * Desktop Agent that raised a request. Individual message schemas further refine this
 * format for each response type.
 *
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface FindIntentBridgeResponse {
  meta: FindIntentBridgeResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: FindIntentBridgeResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

export interface FindIntentBridgeResponseMeta {
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  /**
   * UUID for the response
   */
  responseUuid: string;
  /**
   * Array of error message strings for responses that were not returned to the bridge before
   * the timeout or because an error occurred. Should be the same length as the `errorSources`
   * array and ordered the same. May be omitted if all sources responded without errors.
   */
  errorDetails?: string[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded without errors.
   */
  errorSources?: ErrorSourceElement[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: ErrorSourceElement[];
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface FindIntentBridgeResponsePayload {
  appIntent: AppIntentElement;
}

/**
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface FindIntentsByContextAgentRequest {
  meta: FindIntentsByContextAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: IndigoMessagePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface FindIntentsByContextAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: Identifier;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface IndigoMessagePayload {
  context: ContextElement;
}

/**
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface FindIntentsByContextAgentResponse {
  meta: AgentResponseMetadata;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: IndecentMessagePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface IndecentMessagePayload {
  appIntents: AppIntentElement[];
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface FindIntentsByContextBridgeRequest {
  meta: FindIntentsByContextBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: FindIntentsByContextBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface FindIntentsByContextBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: Identifier;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FindIntentsByContextBridgeRequestPayload {
  context: ContextElement;
}

/**
 * Schema defining the format of all response messages from a the Bridge to the original
 * Desktop Agent that raised a request. Individual message schemas further refine this
 * format for each response type.
 *
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface FindIntentsByContextBridgeResponse {
  meta: FindIntentsByContextBridgeResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: FindIntentsByContextBridgeResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

export interface FindIntentsByContextBridgeResponseMeta {
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded without errors.
   */
  errorSources?: ErrorSourceElement[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: ErrorSourceElement[];
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface FindIntentsByContextBridgeResponsePayload {
  appIntents: AppIntentElement[];
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface GetAppMetadataRequest {
  meta: GetAppMetadataRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: GetAppMetadataRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface GetAppMetadataRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: DestinationClass;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface GetAppMetadataRequestPayload {
  app: SourceElement;
}

/**
 * Schema defining the format of all response messages from a the Bridge to the original
 * Desktop Agent that raised a request. Individual message schemas further refine this
 * format for each response type.
 *
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface GetAppMetadataResponse {
  meta: GetAppMetadataResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: GetAppMetadataResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

export interface GetAppMetadataResponseMeta {
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  /**
   * UUID for the response
   */
  responseUuid: string;
  /**
   * Array of error message strings for responses that were not returned to the bridge before
   * the timeout or because an error occurred. Should be the same length as the `errorSources`
   * array and ordered the same. May be omitted if all sources responded without errors.
   */
  errorDetails?: string[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded without errors.
   */
  errorSources?: ErrorSourceElement[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: ErrorSourceElement[];
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface GetAppMetadataResponsePayload {
  appMetadata: AppMetadataElement;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface OpenRequest {
  meta: OpenRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: OpenRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface OpenRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: DestinationClass;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface OpenRequestPayload {
  app: SourceElement;
  context?: ContextElement;
}

/**
 * Schema defining the format of all response messages from a the Bridge to the original
 * Desktop Agent that raised a request. Individual message schemas further refine this
 * format for each response type.
 *
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface OpenResponse {
  meta: OpenResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: OpenResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

export interface OpenResponseMeta {
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  /**
   * UUID for the response
   */
  responseUuid: string;
  /**
   * Array of error message strings for responses that were not returned to the bridge before
   * the timeout or because an error occurred. Should be the same length as the `errorSources`
   * array and ordered the same. May be omitted if all sources responded without errors.
   */
  errorDetails?: string[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded without errors.
   */
  errorSources?: ErrorSourceElement[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: ErrorSourceElement[];
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface OpenResponsePayload {
  appIdentifier: SourceElement;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface PrivateChannelBroadcast {
  meta: PrivateChannelBroadcastMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelBroadcastPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface PrivateChannelBroadcastMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: SourceObject;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelBroadcastPayload {
  channel: string;
  context: string;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface PrivateChannelEventListenerAdded {
  meta: PrivateChannelEventListenerAddedMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelEventListenerAddedPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface PrivateChannelEventListenerAddedMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: SourceObject;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelEventListenerAddedPayload {
  channel: string;
  context: string;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface PrivateChannelEventListenerRemoved {
  meta: PrivateChannelEventListenerRemovedMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelEventListenerRemovedPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface PrivateChannelEventListenerRemovedMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: SourceObject;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelEventListenerRemovedPayload {
  channel: string;
  listenerType: string;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface PrivateChannelOnAddContextListener {
  meta: PrivateChannelOnAddContextListenerMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelOnAddContextListenerPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface PrivateChannelOnAddContextListenerMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: SourceObject;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelOnAddContextListenerPayload {
  channel: string;
  contextType: string;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface PrivateChannelOnDisconnect {
  meta: PrivateChannelOnDisconnectMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelOnDisconnectPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface PrivateChannelOnDisconnectMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: SourceObject;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelOnDisconnectPayload {
  channel: string;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface PrivateChannelOnUnsubscribe {
  meta: PrivateChannelOnUnsubscribeMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelOnUnsubscribePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface PrivateChannelOnUnsubscribeMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: SourceObject;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelOnUnsubscribePayload {
  channel: string;
  contextType: string;
}

/**
 * Schema defining the format of all forwarded request messages from the Bridge onto a
 * Desktop Agent connected to it. Individual message schemas further refine this format for
 * each request type.
 *
 * Schema defining the format of all request messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each request type.
 */
export interface RaiseIntentRequest {
  meta: RaiseIntentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: RaiseIntentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

export interface RaiseIntentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination: SourceObject;
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface RaiseIntentRequestPayload {
  app: SourceElement;
  context: ContextElement;
  intent: string;
}

/**
 * Schema defining the format of all response messages from a the Bridge to the original
 * Desktop Agent that raised a request. Individual message schemas further refine this
 * format for each response type.
 *
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface RaiseIntentResponse {
  meta: RaiseIntentResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: RaiseIntentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

export interface RaiseIntentResponseMeta {
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  /**
   * UUID for the response
   */
  responseUuid: string;
  /**
   * Array of error message strings for responses that were not returned to the bridge before
   * the timeout or because an error occurred. Should be the same length as the `errorSources`
   * array and ordered the same. May be omitted if all sources responded without errors.
   */
  errorDetails?: string[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded without errors.
   */
  errorSources?: Identifier[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: ErrorSourceElement[];
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface RaiseIntentResponsePayload {
  intentResolution: IntentResolutionClass;
}

/**
 * IntentResolution provides a standard format for data returned upon resolving an intent.
 */
export interface IntentResolutionClass {
  intent: string;
  source: SourceElement;
  version?: string;
}

/**
 * Schema defining the format of all response messages from a the Bridge to the original
 * Desktop Agent that raised a request. Individual message schemas further refine this
 * format for each response type.
 *
 * Schema defining the format of all response messages from a Desktop Agent to the Bridge.
 * Individual message schemas further refine this format for each response type.
 */
export interface RaiseIntentResultResponse {
  meta: RaiseIntentResultResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: RaiseIntentResultResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

export interface RaiseIntentResultResponseMeta {
  /**
   * UUID for the request
   */
  requestUuid: string;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  /**
   * UUID for the response
   */
  responseUuid: string;
  /**
   * Array of error message strings for responses that were not returned to the bridge before
   * the timeout or because an error occurred. Should be the same length as the `errorSources`
   * array and ordered the same. May be omitted if all sources responded without errors.
   */
  errorDetails?: string[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded without errors.
   */
  errorSources?: Identifier[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: SourceElement[];
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface RaiseIntentResultResponsePayload {
  intentResult: IntentResultClass;
}

export interface IntentResultClass {
  context?: ContextElement;
  channel?: ChannelClass;
}

export interface Context {
  id?: { [key: string]: any };
  name?: string;
  type: string;
  [property: string]: any;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toAppIdentifier(json: string): AppIdentifier {
    return cast(JSON.parse(json), r('AppIdentifier'));
  }

  public static appIdentifierToJson(value: AppIdentifier): string {
    return JSON.stringify(uncast(value, r('AppIdentifier')), null, 2);
  }

  public static toAppIntent(json: string): AppIntent {
    return cast(JSON.parse(json), r('AppIntent'));
  }

  public static appIntentToJson(value: AppIntent): string {
    return JSON.stringify(uncast(value, r('AppIntent')), null, 2);
  }

  public static toAppMetadata(json: string): AppMetadata {
    return cast(JSON.parse(json), r('AppMetadata'));
  }

  public static appMetadataToJson(value: AppMetadata): string {
    return JSON.stringify(uncast(value, r('AppMetadata')), null, 2);
  }

  public static toBaseImplementationMetadata(json: string): BaseImplementationMetadata {
    return cast(JSON.parse(json), r('BaseImplementationMetadata'));
  }

  public static baseImplementationMetadataToJson(value: BaseImplementationMetadata): string {
    return JSON.stringify(uncast(value, r('BaseImplementationMetadata')), null, 2);
  }

  public static toChannel(json: string): Channel {
    return cast(JSON.parse(json), r('Channel'));
  }

  public static channelToJson(value: Channel): string {
    return JSON.stringify(uncast(value, r('Channel')), null, 2);
  }

  public static toContextMetadata(json: string): ContextMetadata {
    return cast(JSON.parse(json), r('ContextMetadata'));
  }

  public static contextMetadataToJson(value: ContextMetadata): string {
    return JSON.stringify(uncast(value, r('ContextMetadata')), null, 2);
  }

  public static toDesktopAgentIdentifier(json: string): DesktopAgentIdentifier {
    return cast(JSON.parse(json), r('DesktopAgentIdentifier'));
  }

  public static desktopAgentIdentifierToJson(value: DesktopAgentIdentifier): string {
    return JSON.stringify(uncast(value, r('DesktopAgentIdentifier')), null, 2);
  }

  public static toDisplayMetadata(json: string): DisplayMetadata {
    return cast(JSON.parse(json), r('DisplayMetadata'));
  }

  public static displayMetadataToJson(value: DisplayMetadata): string {
    return JSON.stringify(uncast(value, r('DisplayMetadata')), null, 2);
  }

  public static toSchemasAPIErrorsSchema(json: string): any {
    return cast(JSON.parse(json), 'any');
  }

  public static schemasAPIErrorsSchemaToJson(value: any): string {
    return JSON.stringify(uncast(value, 'any'), null, 2);
  }

  public static toIcon(json: string): Icon {
    return cast(JSON.parse(json), r('Icon'));
  }

  public static iconToJson(value: Icon): string {
    return JSON.stringify(uncast(value, r('Icon')), null, 2);
  }

  public static toImage(json: string): Image {
    return cast(JSON.parse(json), r('Image'));
  }

  public static imageToJson(value: Image): string {
    return JSON.stringify(uncast(value, r('Image')), null, 2);
  }

  public static toImplementationMetadata(json: string): ImplementationMetadata {
    return cast(JSON.parse(json), r('ImplementationMetadata'));
  }

  public static implementationMetadataToJson(value: ImplementationMetadata): string {
    return JSON.stringify(uncast(value, r('ImplementationMetadata')), null, 2);
  }

  public static toIntentMetadata(json: string): IntentMetadata {
    return cast(JSON.parse(json), r('IntentMetadata'));
  }

  public static intentMetadataToJson(value: IntentMetadata): string {
    return JSON.stringify(uncast(value, r('IntentMetadata')), null, 2);
  }

  public static toIntentResolution(json: string): IntentResolution {
    return cast(JSON.parse(json), r('IntentResolution'));
  }

  public static intentResolutionToJson(value: IntentResolution): string {
    return JSON.stringify(uncast(value, r('IntentResolution')), null, 2);
  }

  public static toIntentResult(json: string): IntentResult {
    return cast(JSON.parse(json), r('IntentResult'));
  }

  public static intentResultToJson(value: IntentResult): string {
    return JSON.stringify(uncast(value, r('IntentResult')), null, 2);
  }

  public static toAgentRequest(json: string): AgentRequest {
    return cast(JSON.parse(json), r('AgentRequest'));
  }

  public static agentRequestToJson(value: AgentRequest): string {
    return JSON.stringify(uncast(value, r('AgentRequest')), null, 2);
  }

  public static toAgentResponse(json: string): AgentResponse {
    return cast(JSON.parse(json), r('AgentResponse'));
  }

  public static agentResponseToJson(value: AgentResponse): string {
    return JSON.stringify(uncast(value, r('AgentResponse')), null, 2);
  }

  public static toBridgeRequest(json: string): BridgeRequest {
    return cast(JSON.parse(json), r('BridgeRequest'));
  }

  public static bridgeRequestToJson(value: BridgeRequest): string {
    return JSON.stringify(uncast(value, r('BridgeRequest')), null, 2);
  }

  public static toBridgeResponse(json: string): BridgeResponse {
    return cast(JSON.parse(json), r('BridgeResponse'));
  }

  public static bridgeResponseToJson(value: BridgeResponse): string {
    return JSON.stringify(uncast(value, r('BridgeResponse')), null, 2);
  }

  public static toBroadcastAgentRequest(json: string): BroadcastAgentRequest {
    return cast(JSON.parse(json), r('BroadcastAgentRequest'));
  }

  public static broadcastAgentRequestToJson(value: BroadcastAgentRequest): string {
    return JSON.stringify(uncast(value, r('BroadcastAgentRequest')), null, 2);
  }

  public static toBroadcastBridgeRequest(json: string): BroadcastBridgeRequest {
    return cast(JSON.parse(json), r('BroadcastBridgeRequest'));
  }

  public static broadcastBridgeRequestToJson(value: BroadcastBridgeRequest): string {
    return JSON.stringify(uncast(value, r('BroadcastBridgeRequest')), null, 2);
  }

  public static toConnectionStep2Hello(json: string): ConnectionStep2Hello {
    return cast(JSON.parse(json), r('ConnectionStep2Hello'));
  }

  public static connectionStep2HelloToJson(value: ConnectionStep2Hello): string {
    return JSON.stringify(uncast(value, r('ConnectionStep2Hello')), null, 2);
  }

  public static toConnectionStep3Handshake(json: string): ConnectionStep3Handshake {
    return cast(JSON.parse(json), r('ConnectionStep3Handshake'));
  }

  public static connectionStep3HandshakeToJson(value: ConnectionStep3Handshake): string {
    return JSON.stringify(uncast(value, r('ConnectionStep3Handshake')), null, 2);
  }

  public static toConnectionStep4AuthenticationFailed(json: string): ConnectionStep4AuthenticationFailed {
    return cast(JSON.parse(json), r('ConnectionStep4AuthenticationFailed'));
  }

  public static connectionStep4AuthenticationFailedToJson(value: ConnectionStep4AuthenticationFailed): string {
    return JSON.stringify(uncast(value, r('ConnectionStep4AuthenticationFailed')), null, 2);
  }

  public static toConnectionStep6ConnectedAgentsUpdate(json: string): ConnectionStep6ConnectedAgentsUpdate {
    return cast(JSON.parse(json), r('ConnectionStep6ConnectedAgentsUpdate'));
  }

  public static connectionStep6ConnectedAgentsUpdateToJson(value: ConnectionStep6ConnectedAgentsUpdate): string {
    return JSON.stringify(uncast(value, r('ConnectionStep6ConnectedAgentsUpdate')), null, 2);
  }

  public static toFindInstancesAgentRequest(json: string): FindInstancesAgentRequest {
    return cast(JSON.parse(json), r('FindInstancesAgentRequest'));
  }

  public static findInstancesAgentRequestToJson(value: FindInstancesAgentRequest): string {
    return JSON.stringify(uncast(value, r('FindInstancesAgentRequest')), null, 2);
  }

  public static toFindInstancesAgentResponse(json: string): FindInstancesAgentResponse {
    return cast(JSON.parse(json), r('FindInstancesAgentResponse'));
  }

  public static findInstancesAgentResponseToJson(value: FindInstancesAgentResponse): string {
    return JSON.stringify(uncast(value, r('FindInstancesAgentResponse')), null, 2);
  }

  public static toFindInstancesBridgeRequest(json: string): FindInstancesBridgeRequest {
    return cast(JSON.parse(json), r('FindInstancesBridgeRequest'));
  }

  public static findInstancesBridgeRequestToJson(value: FindInstancesBridgeRequest): string {
    return JSON.stringify(uncast(value, r('FindInstancesBridgeRequest')), null, 2);
  }

  public static toFindInstancesBridgeResponse(json: string): FindInstancesBridgeResponse {
    return cast(JSON.parse(json), r('FindInstancesBridgeResponse'));
  }

  public static findInstancesBridgeResponseToJson(value: FindInstancesBridgeResponse): string {
    return JSON.stringify(uncast(value, r('FindInstancesBridgeResponse')), null, 2);
  }

  public static toFindIntentAgentRequest(json: string): FindIntentAgentRequest {
    return cast(JSON.parse(json), r('FindIntentAgentRequest'));
  }

  public static findIntentAgentRequestToJson(value: FindIntentAgentRequest): string {
    return JSON.stringify(uncast(value, r('FindIntentAgentRequest')), null, 2);
  }

  public static toFindIntentAgentResponse(json: string): FindIntentAgentResponse {
    return cast(JSON.parse(json), r('FindIntentAgentResponse'));
  }

  public static findIntentAgentResponseToJson(value: FindIntentAgentResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentAgentResponse')), null, 2);
  }

  public static toFindIntentBridgeRequest(json: string): FindIntentBridgeRequest {
    return cast(JSON.parse(json), r('FindIntentBridgeRequest'));
  }

  public static findIntentBridgeRequestToJson(value: FindIntentBridgeRequest): string {
    return JSON.stringify(uncast(value, r('FindIntentBridgeRequest')), null, 2);
  }

  public static toFindIntentBridgeResponse(json: string): FindIntentBridgeResponse {
    return cast(JSON.parse(json), r('FindIntentBridgeResponse'));
  }

  public static findIntentBridgeResponseToJson(value: FindIntentBridgeResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentBridgeResponse')), null, 2);
  }

  public static toFindIntentsByContextAgentRequest(json: string): FindIntentsByContextAgentRequest {
    return cast(JSON.parse(json), r('FindIntentsByContextAgentRequest'));
  }

  public static findIntentsByContextAgentRequestToJson(value: FindIntentsByContextAgentRequest): string {
    return JSON.stringify(uncast(value, r('FindIntentsByContextAgentRequest')), null, 2);
  }

  public static toFindIntentsByContextAgentResponse(json: string): FindIntentsByContextAgentResponse {
    return cast(JSON.parse(json), r('FindIntentsByContextAgentResponse'));
  }

  public static findIntentsByContextAgentResponseToJson(value: FindIntentsByContextAgentResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentsByContextAgentResponse')), null, 2);
  }

  public static toFindIntentsByContextBridgeRequest(json: string): FindIntentsByContextBridgeRequest {
    return cast(JSON.parse(json), r('FindIntentsByContextBridgeRequest'));
  }

  public static findIntentsByContextBridgeRequestToJson(value: FindIntentsByContextBridgeRequest): string {
    return JSON.stringify(uncast(value, r('FindIntentsByContextBridgeRequest')), null, 2);
  }

  public static toFindIntentsByContextBridgeResponse(json: string): FindIntentsByContextBridgeResponse {
    return cast(JSON.parse(json), r('FindIntentsByContextBridgeResponse'));
  }

  public static findIntentsByContextBridgeResponseToJson(value: FindIntentsByContextBridgeResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentsByContextBridgeResponse')), null, 2);
  }

  public static toGetAppMetadataRequest(json: string): GetAppMetadataRequest {
    return cast(JSON.parse(json), r('GetAppMetadataRequest'));
  }

  public static getAppMetadataRequestToJson(value: GetAppMetadataRequest): string {
    return JSON.stringify(uncast(value, r('GetAppMetadataRequest')), null, 2);
  }

  public static toGetAppMetadataResponse(json: string): GetAppMetadataResponse {
    return cast(JSON.parse(json), r('GetAppMetadataResponse'));
  }

  public static getAppMetadataResponseToJson(value: GetAppMetadataResponse): string {
    return JSON.stringify(uncast(value, r('GetAppMetadataResponse')), null, 2);
  }

  public static toOpenRequest(json: string): OpenRequest {
    return cast(JSON.parse(json), r('OpenRequest'));
  }

  public static openRequestToJson(value: OpenRequest): string {
    return JSON.stringify(uncast(value, r('OpenRequest')), null, 2);
  }

  public static toOpenResponse(json: string): OpenResponse {
    return cast(JSON.parse(json), r('OpenResponse'));
  }

  public static openResponseToJson(value: OpenResponse): string {
    return JSON.stringify(uncast(value, r('OpenResponse')), null, 2);
  }

  public static toPrivateChannelBroadcast(json: string): PrivateChannelBroadcast {
    return cast(JSON.parse(json), r('PrivateChannelBroadcast'));
  }

  public static privateChannelBroadcastToJson(value: PrivateChannelBroadcast): string {
    return JSON.stringify(uncast(value, r('PrivateChannelBroadcast')), null, 2);
  }

  public static toPrivateChannelEventListenerAdded(json: string): PrivateChannelEventListenerAdded {
    return cast(JSON.parse(json), r('PrivateChannelEventListenerAdded'));
  }

  public static privateChannelEventListenerAddedToJson(value: PrivateChannelEventListenerAdded): string {
    return JSON.stringify(uncast(value, r('PrivateChannelEventListenerAdded')), null, 2);
  }

  public static toPrivateChannelEventListenerRemoved(json: string): PrivateChannelEventListenerRemoved {
    return cast(JSON.parse(json), r('PrivateChannelEventListenerRemoved'));
  }

  public static privateChannelEventListenerRemovedToJson(value: PrivateChannelEventListenerRemoved): string {
    return JSON.stringify(uncast(value, r('PrivateChannelEventListenerRemoved')), null, 2);
  }

  public static toPrivateChannelOnAddContextListener(json: string): PrivateChannelOnAddContextListener {
    return cast(JSON.parse(json), r('PrivateChannelOnAddContextListener'));
  }

  public static privateChannelOnAddContextListenerToJson(value: PrivateChannelOnAddContextListener): string {
    return JSON.stringify(uncast(value, r('PrivateChannelOnAddContextListener')), null, 2);
  }

  public static toPrivateChannelOnDisconnect(json: string): PrivateChannelOnDisconnect {
    return cast(JSON.parse(json), r('PrivateChannelOnDisconnect'));
  }

  public static privateChannelOnDisconnectToJson(value: PrivateChannelOnDisconnect): string {
    return JSON.stringify(uncast(value, r('PrivateChannelOnDisconnect')), null, 2);
  }

  public static toPrivateChannelOnUnsubscribe(json: string): PrivateChannelOnUnsubscribe {
    return cast(JSON.parse(json), r('PrivateChannelOnUnsubscribe'));
  }

  public static privateChannelOnUnsubscribeToJson(value: PrivateChannelOnUnsubscribe): string {
    return JSON.stringify(uncast(value, r('PrivateChannelOnUnsubscribe')), null, 2);
  }

  public static toRaiseIntentRequest(json: string): RaiseIntentRequest {
    return cast(JSON.parse(json), r('RaiseIntentRequest'));
  }

  public static raiseIntentRequestToJson(value: RaiseIntentRequest): string {
    return JSON.stringify(uncast(value, r('RaiseIntentRequest')), null, 2);
  }

  public static toRaiseIntentResponse(json: string): RaiseIntentResponse {
    return cast(JSON.parse(json), r('RaiseIntentResponse'));
  }

  public static raiseIntentResponseToJson(value: RaiseIntentResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentResponse')), null, 2);
  }

  public static toRaiseIntentResultResponse(json: string): RaiseIntentResultResponse {
    return cast(JSON.parse(json), r('RaiseIntentResultResponse'));
  }

  public static raiseIntentResultResponseToJson(value: RaiseIntentResultResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentResultResponse')), null, 2);
  }

  public static toContext(json: string): Context {
    return cast(JSON.parse(json), r('Context'));
  }

  public static contextToJson(value: Context): string {
    return JSON.stringify(uncast(value, r('Context')), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : '';
  const keyText = key ? ` for key "${key}"` : '';
  throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map(a => {
          return prettyTypeName(a);
        })
        .join(', ')}]`;
    }
  } else if (typeof typ === 'object' && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map(a => {
        return l(a);
      }),
      val,
      key,
      parent
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l('array'), val, key, parent);
    return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l('Date'), val, key, parent);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue(l(ref || 'object'), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === 'object' && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  AppIdentifier: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  AppIntent: o(
    [
      { json: 'apps', js: 'apps', typ: a(r('AppMetadataElement')) },
      { json: 'intent', js: 'intent', typ: r('IntentClass') },
    ],
    false
  ),
  AppMetadataElement: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'description', js: 'description', typ: u(undefined, '') },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'icons', js: 'icons', typ: u(undefined, a(r('IconElement'))) },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
      { json: 'instanceMetadata', js: 'instanceMetadata', typ: u(undefined, m('any')) },
      { json: 'name', js: 'name', typ: u(undefined, '') },
      { json: 'resultType', js: 'resultType', typ: u(undefined, u(null, '')) },
      { json: 'screenshots', js: 'screenshots', typ: u(undefined, a(r('ScreenshotElement'))) },
      { json: 'title', js: 'title', typ: u(undefined, '') },
      { json: 'tooltip', js: 'tooltip', typ: u(undefined, '') },
      { json: 'version', js: 'version', typ: u(undefined, '') },
    ],
    false
  ),
  IconElement: o(
    [
      { json: 'size', js: 'size', typ: u(undefined, '') },
      { json: 'src', js: 'src', typ: '' },
      { json: 'type', js: 'type', typ: u(undefined, '') },
    ],
    false
  ),
  ScreenshotElement: o(
    [
      { json: 'label', js: 'label', typ: u(undefined, '') },
      { json: 'size', js: 'size', typ: u(undefined, '') },
      { json: 'src', js: 'src', typ: '' },
      { json: 'type', js: 'type', typ: u(undefined, '') },
    ],
    false
  ),
  IntentClass: o(
    [
      { json: 'displayName', js: 'displayName', typ: '' },
      { json: 'name', js: 'name', typ: u(undefined, '') },
    ],
    false
  ),
  AppMetadata: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'description', js: 'description', typ: u(undefined, '') },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'icons', js: 'icons', typ: u(undefined, a(r('IconElement'))) },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
      { json: 'instanceMetadata', js: 'instanceMetadata', typ: u(undefined, m('any')) },
      { json: 'name', js: 'name', typ: u(undefined, '') },
      { json: 'resultType', js: 'resultType', typ: u(undefined, u(null, '')) },
      { json: 'screenshots', js: 'screenshots', typ: u(undefined, a(r('ScreenshotElement'))) },
      { json: 'title', js: 'title', typ: u(undefined, '') },
      { json: 'tooltip', js: 'tooltip', typ: u(undefined, '') },
      { json: 'version', js: 'version', typ: u(undefined, '') },
    ],
    false
  ),
  BaseImplementationMetadata: o(
    [
      { json: 'fdc3Version', js: 'fdc3Version', typ: '' },
      { json: 'optionalFeatures', js: 'optionalFeatures', typ: r('BaseImplementationMetadataOptionalFeatures') },
      { json: 'provider', js: 'provider', typ: '' },
      { json: 'providerVersion', js: 'providerVersion', typ: u(undefined, '') },
    ],
    false
  ),
  BaseImplementationMetadataOptionalFeatures: o(
    [
      { json: 'DesktopAgentBridging', js: 'DesktopAgentBridging', typ: true },
      { json: 'OriginatingAppMetadata', js: 'OriginatingAppMetadata', typ: true },
      { json: 'UserChannelMembershipAPIs', js: 'UserChannelMembershipAPIs', typ: true },
    ],
    false
  ),
  Channel: o(
    [
      { json: 'displayMetadata', js: 'displayMetadata', typ: u(undefined, r('DisplayMetadataClass')) },
      { json: 'id', js: 'id', typ: '' },
      { json: 'type', js: 'type', typ: r('Type') },
    ],
    false
  ),
  DisplayMetadataClass: o(
    [
      { json: 'color', js: 'color', typ: u(undefined, '') },
      { json: 'glyph', js: 'glyph', typ: u(undefined, '') },
      { json: 'name', js: 'name', typ: u(undefined, '') },
    ],
    false
  ),
  ContextMetadata: o([{ json: 'source', js: 'source', typ: r('SourceElement') }], false),
  SourceElement: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  DesktopAgentIdentifier: o([{ json: 'desktopAgent', js: 'desktopAgent', typ: '' }], false),
  DisplayMetadata: o(
    [
      { json: 'color', js: 'color', typ: u(undefined, '') },
      { json: 'glyph', js: 'glyph', typ: u(undefined, '') },
      { json: 'name', js: 'name', typ: u(undefined, '') },
    ],
    false
  ),
  Icon: o(
    [
      { json: 'size', js: 'size', typ: u(undefined, '') },
      { json: 'src', js: 'src', typ: '' },
      { json: 'type', js: 'type', typ: u(undefined, '') },
    ],
    false
  ),
  Image: o(
    [
      { json: 'label', js: 'label', typ: u(undefined, '') },
      { json: 'size', js: 'size', typ: u(undefined, '') },
      { json: 'src', js: 'src', typ: '' },
      { json: 'type', js: 'type', typ: u(undefined, '') },
    ],
    false
  ),
  ImplementationMetadata: o(
    [
      { json: 'fdc3Version', js: 'fdc3Version', typ: '' },
      { json: 'optionalFeatures', js: 'optionalFeatures', typ: r('ImplementationMetadataOptionalFeatures') },
      { json: 'provider', js: 'provider', typ: '' },
      { json: 'providerVersion', js: 'providerVersion', typ: u(undefined, '') },
    ],
    false
  ),
  ImplementationMetadataOptionalFeatures: o(
    [
      { json: 'DesktopAgentBridging', js: 'DesktopAgentBridging', typ: true },
      { json: 'OriginatingAppMetadata', js: 'OriginatingAppMetadata', typ: true },
      { json: 'UserChannelMembershipAPIs', js: 'UserChannelMembershipAPIs', typ: true },
    ],
    false
  ),
  IntentMetadata: o(
    [
      { json: 'displayName', js: 'displayName', typ: '' },
      { json: 'name', js: 'name', typ: u(undefined, '') },
    ],
    false
  ),
  IntentResolution: o(
    [
      { json: 'intent', js: 'intent', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceElement') },
      { json: 'version', js: 'version', typ: u(undefined, '') },
    ],
    false
  ),
  IntentResult: o(
    [
      { json: 'id', js: 'id', typ: u(undefined, u(m('any'), '')) },
      { json: 'name', js: 'name', typ: u(undefined, '') },
      { json: 'type', js: 'type', typ: '' },
      { json: 'displayMetadata', js: 'displayMetadata', typ: u(undefined, r('DisplayMetadataClass')) },
    ],
    'any'
  ),
  AgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('AgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  AgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('Identifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('Identifier')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    'any'
  ),
  Identifier: o(
    [
      { json: 'appId', js: 'appId', typ: u(undefined, '') },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  AgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('AgentResponseMetadata') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  AgentResponseMetadata: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('Identifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('Identifier')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
    ],
    'any'
  ),
  BridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PurpleBridgeRequestMetadata') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PurpleBridgeRequestMetadata: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('Identifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('Identifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    'any'
  ),
  BridgeResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('PurpleMetadata') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PurpleMetadata: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a('')) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('Identifier'))) },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('Identifier'))) },
    ],
    false
  ),
  BroadcastAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('MetaClass') },
      { json: 'payload', js: 'payload', typ: r('PurpleMessagePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  MetaClass: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  SourceObject: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  PurpleMessagePayload: o(
    [
      { json: 'channel', js: 'channel', typ: r('ChannelClass') },
      { json: 'context', js: 'context', typ: r('ContextElement') },
    ],
    false
  ),
  ChannelClass: o(
    [
      { json: 'displayMetadata', js: 'displayMetadata', typ: u(undefined, r('DisplayMetadataClass')) },
      { json: 'id', js: 'id', typ: '' },
      { json: 'type', js: 'type', typ: r('Type') },
    ],
    false
  ),
  ContextElement: o(
    [
      { json: 'id', js: 'id', typ: u(undefined, m('any')) },
      { json: 'name', js: 'name', typ: u(undefined, '') },
      { json: 'type', js: 'type', typ: '' },
    ],
    'any'
  ),
  BroadcastBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('BroadcastBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('BroadcastBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  BroadcastBridgeRequestMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  BroadcastBridgeRequestPayload: o(
    [
      { json: 'channel', js: 'channel', typ: r('ChannelClass') },
      { json: 'context', js: 'context', typ: r('ContextElement') },
    ],
    false
  ),
  ConnectionStep2Hello: o(
    [
      { json: 'meta', js: 'meta', typ: r('ConnectionStep2HelloMeta') },
      { json: 'payload', js: 'payload', typ: r('ConnectionStep2HelloPayload') },
      { json: 'type', js: 'type', typ: 'any' },
    ],
    false
  ),
  ConnectionStep2HelloMeta: o([{ json: 'timestamp', js: 'timestamp', typ: Date }], false),
  ConnectionStep2HelloPayload: o(
    [
      { json: 'authRequired', js: 'authRequired', typ: true },
      { json: 'authToken', js: 'authToken', typ: u(undefined, '') },
      { json: 'desktopAgentBridgeVersion', js: 'desktopAgentBridgeVersion', typ: '' },
      { json: 'supportedFDC3Versions', js: 'supportedFDC3Versions', typ: a('') },
    ],
    false
  ),
  ConnectionStep3Handshake: o(
    [
      { json: 'meta', js: 'meta', typ: r('ConnectionStep3HandshakeMeta') },
      { json: 'payload', js: 'payload', typ: r('ConnectionStep3HandshakePayload') },
      { json: 'type', js: 'type', typ: 'any' },
    ],
    false
  ),
  ConnectionStep3HandshakeMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  ConnectionStep3HandshakePayload: o(
    [
      { json: 'authToken', js: 'authToken', typ: u(undefined, '') },
      { json: 'channelsState', js: 'channelsState', typ: m(a(r('ContextElement'))) },
      { json: 'implementationMetadata', js: 'implementationMetadata', typ: r('ImplementationMetadataClass') },
      { json: 'requestedName', js: 'requestedName', typ: '' },
    ],
    false
  ),
  ImplementationMetadataClass: o(
    [
      { json: 'fdc3Version', js: 'fdc3Version', typ: '' },
      { json: 'optionalFeatures', js: 'optionalFeatures', typ: r('ImplementationMetadataOptionalFeatures') },
      { json: 'provider', js: 'provider', typ: '' },
      { json: 'providerVersion', js: 'providerVersion', typ: u(undefined, '') },
    ],
    false
  ),
  ConnectionStep4AuthenticationFailed: o(
    [
      { json: 'meta', js: 'meta', typ: r('ConnectionStep4AuthenticationFailedMeta') },
      { json: 'payload', js: 'payload', typ: u(undefined, r('ConnectionStep4AuthenticationFailedPayload')) },
      { json: 'type', js: 'type', typ: 'any' },
    ],
    false
  ),
  ConnectionStep4AuthenticationFailedMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  ConnectionStep4AuthenticationFailedPayload: o([{ json: 'message', js: 'message', typ: u(undefined, '') }], false),
  ConnectionStep6ConnectedAgentsUpdate: o(
    [
      { json: 'meta', js: 'meta', typ: r('ConnectionStep6ConnectedAgentsUpdateMeta') },
      { json: 'payload', js: 'payload', typ: r('ConnectionStep6ConnectedAgentsUpdatePayload') },
      { json: 'type', js: 'type', typ: 'any' },
    ],
    false
  ),
  ConnectionStep6ConnectedAgentsUpdateMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  ConnectionStep6ConnectedAgentsUpdatePayload: o(
    [
      { json: 'addAgent', js: 'addAgent', typ: u(undefined, '') },
      { json: 'allAgents', js: 'allAgents', typ: a(r('ImplementationMetadataElement')) },
      { json: 'channelsState', js: 'channelsState', typ: u(undefined, m(a(r('ContextElement')))) },
      { json: 'removeAgent', js: 'removeAgent', typ: u(undefined, '') },
    ],
    false
  ),
  ImplementationMetadataElement: o(
    [
      { json: 'fdc3Version', js: 'fdc3Version', typ: '' },
      { json: 'optionalFeatures', js: 'optionalFeatures', typ: r('ImplementationMetadataOptionalFeatures') },
      { json: 'provider', js: 'provider', typ: '' },
      { json: 'providerVersion', js: 'providerVersion', typ: u(undefined, '') },
    ],
    false
  ),
  FindInstancesAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('AgentRequestMetadata') },
      { json: 'payload', js: 'payload', typ: r('FluffyMessagePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  AgentRequestMetadata: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('DestinationClass')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    'any'
  ),
  DestinationClass: o([{ json: 'desktopAgent', js: 'desktopAgent', typ: '' }], false),
  FluffyMessagePayload: o([{ json: 'app', js: 'app', typ: r('SourceElement') }], false),
  FindInstancesAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('AgentResponseMetadata') },
      { json: 'payload', js: 'payload', typ: r('PurpleEPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PurpleEPayload: o([{ json: 'appIdentifiers', js: 'appIdentifiers', typ: a(r('AppMetadataElement')) }], false),
  FindInstancesBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindInstancesBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('FindInstancesBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindInstancesBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('DestinationClass')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    'any'
  ),
  FindInstancesBridgeRequestPayload: o([{ json: 'app', js: 'app', typ: r('SourceElement') }], false),
  FindInstancesBridgeResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindInstancesBridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindInstancesBridgeResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindInstancesBridgeResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a('')) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('Identifier'))) },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('ErrorSourceElement'))) },
    ],
    false
  ),
  ErrorSourceElement: o([{ json: 'desktopAgent', js: 'desktopAgent', typ: '' }], false),
  FindInstancesBridgeResponsePayload: o(
    [{ json: 'appIdentifiers', js: 'appIdentifiers', typ: a(r('AppMetadataElement')) }],
    false
  ),
  FindIntentAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('EntRequestMetadata') },
      { json: 'payload', js: 'payload', typ: r('TentacledMessagePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  EntRequestMetadata: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('Identifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    'any'
  ),
  TentacledMessagePayload: o(
    [
      { json: 'context', js: 'context', typ: r('ContextElement') },
      { json: 'intent', js: 'intent', typ: '' },
    ],
    false
  ),
  FindIntentAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('AgentResponseMetadata') },
      { json: 'payload', js: 'payload', typ: r('StickyMessagePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  StickyMessagePayload: o([{ json: 'appIntent', js: 'appIntent', typ: r('AppIntentElement') }], false),
  AppIntentElement: o(
    [
      { json: 'apps', js: 'apps', typ: a(r('AppMetadataElement')) },
      { json: 'intent', js: 'intent', typ: r('IntentClass') },
    ],
    false
  ),
  FindIntentBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('Identifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    'any'
  ),
  FindIntentBridgeRequestPayload: o(
    [
      { json: 'context', js: 'context', typ: r('ContextElement') },
      { json: 'intent', js: 'intent', typ: '' },
    ],
    false
  ),
  FindIntentBridgeResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentBridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentBridgeResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentBridgeResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a('')) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('ErrorSourceElement'))) },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('ErrorSourceElement'))) },
    ],
    false
  ),
  FindIntentBridgeResponsePayload: o([{ json: 'appIntent', js: 'appIntent', typ: r('AppIntentElement') }], false),
  FindIntentsByContextAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentsByContextAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('IndigoMessagePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentsByContextAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('Identifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    'any'
  ),
  IndigoMessagePayload: o([{ json: 'context', js: 'context', typ: r('ContextElement') }], false),
  FindIntentsByContextAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('AgentResponseMetadata') },
      { json: 'payload', js: 'payload', typ: r('IndecentMessagePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  IndecentMessagePayload: o([{ json: 'appIntents', js: 'appIntents', typ: a(r('AppIntentElement')) }], false),
  FindIntentsByContextBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentsByContextBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentsByContextBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentsByContextBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('Identifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    'any'
  ),
  FindIntentsByContextBridgeRequestPayload: o([{ json: 'context', js: 'context', typ: r('ContextElement') }], false),
  FindIntentsByContextBridgeResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentsByContextBridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentsByContextBridgeResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentsByContextBridgeResponseMeta: o(
    [
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('ErrorSourceElement'))) },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('ErrorSourceElement'))) },
    ],
    false
  ),
  FindIntentsByContextBridgeResponsePayload: o(
    [{ json: 'appIntents', js: 'appIntents', typ: a(r('AppIntentElement')) }],
    false
  ),
  GetAppMetadataRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('GetAppMetadataRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  GetAppMetadataRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('DestinationClass')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  GetAppMetadataRequestPayload: o([{ json: 'app', js: 'app', typ: r('SourceElement') }], false),
  GetAppMetadataResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('GetAppMetadataResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  GetAppMetadataResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a('')) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('ErrorSourceElement'))) },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('ErrorSourceElement'))) },
    ],
    false
  ),
  GetAppMetadataResponsePayload: o([{ json: 'appMetadata', js: 'appMetadata', typ: r('AppMetadataElement') }], false),
  OpenRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('OpenRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  OpenRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('DestinationClass')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  OpenRequestPayload: o(
    [
      { json: 'app', js: 'app', typ: r('SourceElement') },
      { json: 'context', js: 'context', typ: u(undefined, r('ContextElement')) },
    ],
    false
  ),
  OpenResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('OpenResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  OpenResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a('')) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('ErrorSourceElement'))) },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('ErrorSourceElement'))) },
    ],
    false
  ),
  OpenResponsePayload: o([{ json: 'appIdentifier', js: 'appIdentifier', typ: r('SourceElement') }], false),
  PrivateChannelBroadcast: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelBroadcastMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelBroadcastPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelBroadcastMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('SourceObject')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelBroadcastPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'context', js: 'context', typ: '' },
    ],
    false
  ),
  PrivateChannelEventListenerAdded: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelEventListenerAddedMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelEventListenerAddedPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelEventListenerAddedMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('SourceObject')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelEventListenerAddedPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'context', js: 'context', typ: '' },
    ],
    false
  ),
  PrivateChannelEventListenerRemoved: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelEventListenerRemovedMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelEventListenerRemovedPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelEventListenerRemovedMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('SourceObject')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelEventListenerRemovedPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'listenerType', js: 'listenerType', typ: '' },
    ],
    false
  ),
  PrivateChannelOnAddContextListener: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelOnAddContextListenerMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelOnAddContextListenerPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelOnAddContextListenerMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('SourceObject')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelOnAddContextListenerPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'contextType', js: 'contextType', typ: '' },
    ],
    false
  ),
  PrivateChannelOnDisconnect: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelOnDisconnectMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelOnDisconnectPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelOnDisconnectMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('SourceObject')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelOnDisconnectPayload: o([{ json: 'channel', js: 'channel', typ: '' }], false),
  PrivateChannelOnUnsubscribe: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelOnUnsubscribeMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelOnUnsubscribePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelOnUnsubscribeMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('SourceObject')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelOnUnsubscribePayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'contextType', js: 'contextType', typ: '' },
    ],
    false
  ),
  RaiseIntentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  RaiseIntentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: r('SourceObject') },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentRequestPayload: o(
    [
      { json: 'app', js: 'app', typ: r('SourceElement') },
      { json: 'context', js: 'context', typ: r('ContextElement') },
      { json: 'intent', js: 'intent', typ: '' },
    ],
    false
  ),
  RaiseIntentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  RaiseIntentResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a('')) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('Identifier'))) },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('ErrorSourceElement'))) },
    ],
    false
  ),
  RaiseIntentResponsePayload: o(
    [{ json: 'intentResolution', js: 'intentResolution', typ: r('IntentResolutionClass') }],
    false
  ),
  IntentResolutionClass: o(
    [
      { json: 'intent', js: 'intent', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceElement') },
      { json: 'version', js: 'version', typ: u(undefined, '') },
    ],
    false
  ),
  RaiseIntentResultResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentResultResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentResultResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  RaiseIntentResultResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a('')) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('Identifier'))) },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('SourceElement'))) },
    ],
    false
  ),
  RaiseIntentResultResponsePayload: o(
    [{ json: 'intentResult', js: 'intentResult', typ: r('IntentResultClass') }],
    false
  ),
  IntentResultClass: o(
    [
      { json: 'context', js: 'context', typ: u(undefined, r('ContextElement')) },
      { json: 'channel', js: 'channel', typ: u(undefined, r('ChannelClass')) },
    ],
    false
  ),
  Context: o(
    [
      { json: 'id', js: 'id', typ: u(undefined, m('any')) },
      { json: 'name', js: 'name', typ: u(undefined, '') },
      { json: 'type', js: 'type', typ: '' },
    ],
    'any'
  ),
  Type: ['app', 'private', 'user'],
};
