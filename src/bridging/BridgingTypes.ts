// To parse this data:
//
//   import { Convert, BaseImplementationMetadata, AgentErrorResponseMessage, AgentRequestMessage, AgentResponseMessage, BridgeErrorResponseMessage, BridgeRequestMessage, BridgeResponseMessage, BroadcastAgentRequest, BroadcastBridgeRequest, ConnectionStepMessage, ConnectionStep2Hello, ConnectionStep3Handshake, ConnectionStep4AuthenticationFailed, ConnectionStep6ConnectedAgentsUpdate, FindInstancesAgentErrorResponse, FindInstancesAgentRequest, FindInstancesAgentResponse, FindInstancesBridgeErrorResponse, FindInstancesBridgeRequest, FindInstancesBridgeResponse, FindIntentAgentErrorResponse, FindIntentsAgentRequest, FindIntentAgentResponse, FindIntentBridgeErrorResponse, FindIntentBridgeRequest, FindIntentBridgeResponse, FindIntentsByContextAgentErrorResponse, FindIntentsByContextAgentRequest, FindIntentsByContextAgentResponse, FindIntentsByContextBridgeErrorResponse, FindIntentsByContextBridgeRequest, FindIntentsByContextBridgeResponse, GetAppMetadataAgentErrorResponse, GetAppMetadataAgentRequest, GetAppMetadataAgentResponse, GetAppMetadataBridgeErrorResponse, GetAppMetadataBridgeRequest, GetAppMetadataBridgeResponse, OpenAgentErrorResponse, OpenAgentRequest, OpenAgentResponse, OpenBridgeErrorResponse, OpenBridgeRequest, OpenBridgeResponse, PrivateChannelBroadcastAgentRequest, PrivateChannelBroadcastBridgeRequest, PrivateChannelEventListenerAddedAgentRequest, PrivateChannelEventListenerAddedBridgeRequest, PrivateChannelEventListenerRemovedAgentRequest, PrivateChannelEventListenerRemovedBridgeRequest, PrivateChannelOnAddContextListenerAgentRequest, PrivateChannelOnAddContextListenerBridgeRequest, PrivateChannelOnDisconnectAgentRequest, PrivateChannelOnDisconnectBridgeRequest, PrivateChannelOnUnsubscribeAgentRequest, PrivateChannelOnUnsubscribeBridgeRequest, RaiseIntentAgentErrorResponse, RaiseIntentAgentRequest, RaiseIntentAgentResponse, RaiseIntentBridgeErrorResponse, RaiseIntentBridgeRequest, RaiseIntentBridgeResponse, RaiseIntentResultAgentErrorResponse, RaiseIntentResultAgentResponse, RaiseIntentResultBridgeErrorResponse, RaiseIntentResultBridgeResponse, Context } from "./file";
//
//   const schemasAPIAPISchema = Convert.toSchemasAPIAPISchema(json);
//   const baseImplementationMetadata = Convert.toBaseImplementationMetadata(json);
//   const agentErrorResponseMessage = Convert.toAgentErrorResponseMessage(json);
//   const agentRequestMessage = Convert.toAgentRequestMessage(json);
//   const agentResponseMessage = Convert.toAgentResponseMessage(json);
//   const bridgeErrorResponseMessage = Convert.toBridgeErrorResponseMessage(json);
//   const bridgeRequestMessage = Convert.toBridgeRequestMessage(json);
//   const bridgeResponseMessage = Convert.toBridgeResponseMessage(json);
//   const broadcastAgentRequest = Convert.toBroadcastAgentRequest(json);
//   const broadcastBridgeRequest = Convert.toBroadcastBridgeRequest(json);
//   const bridgingCommons = Convert.toBridgingCommons(json);
//   const connectionStepMessage = Convert.toConnectionStepMessage(json);
//   const connectionStep2Hello = Convert.toConnectionStep2Hello(json);
//   const connectionStep3Handshake = Convert.toConnectionStep3Handshake(json);
//   const connectionStep4AuthenticationFailed = Convert.toConnectionStep4AuthenticationFailed(json);
//   const connectionStep6ConnectedAgentsUpdate = Convert.toConnectionStep6ConnectedAgentsUpdate(json);
//   const findInstancesAgentErrorResponse = Convert.toFindInstancesAgentErrorResponse(json);
//   const findInstancesAgentRequest = Convert.toFindInstancesAgentRequest(json);
//   const findInstancesAgentResponse = Convert.toFindInstancesAgentResponse(json);
//   const findInstancesBridgeErrorResponse = Convert.toFindInstancesBridgeErrorResponse(json);
//   const findInstancesBridgeRequest = Convert.toFindInstancesBridgeRequest(json);
//   const findInstancesBridgeResponse = Convert.toFindInstancesBridgeResponse(json);
//   const findIntentAgentErrorResponse = Convert.toFindIntentAgentErrorResponse(json);
//   const findIntentsAgentRequest = Convert.toFindIntentsAgentRequest(json);
//   const findIntentAgentResponse = Convert.toFindIntentAgentResponse(json);
//   const findIntentBridgeErrorResponse = Convert.toFindIntentBridgeErrorResponse(json);
//   const findIntentBridgeRequest = Convert.toFindIntentBridgeRequest(json);
//   const findIntentBridgeResponse = Convert.toFindIntentBridgeResponse(json);
//   const findIntentsByContextAgentErrorResponse = Convert.toFindIntentsByContextAgentErrorResponse(json);
//   const findIntentsByContextAgentRequest = Convert.toFindIntentsByContextAgentRequest(json);
//   const findIntentsByContextAgentResponse = Convert.toFindIntentsByContextAgentResponse(json);
//   const findIntentsByContextBridgeErrorResponse = Convert.toFindIntentsByContextBridgeErrorResponse(json);
//   const findIntentsByContextBridgeRequest = Convert.toFindIntentsByContextBridgeRequest(json);
//   const findIntentsByContextBridgeResponse = Convert.toFindIntentsByContextBridgeResponse(json);
//   const getAppMetadataAgentErrorResponse = Convert.toGetAppMetadataAgentErrorResponse(json);
//   const getAppMetadataAgentRequest = Convert.toGetAppMetadataAgentRequest(json);
//   const getAppMetadataAgentResponse = Convert.toGetAppMetadataAgentResponse(json);
//   const getAppMetadataBridgeErrorResponse = Convert.toGetAppMetadataBridgeErrorResponse(json);
//   const getAppMetadataBridgeRequest = Convert.toGetAppMetadataBridgeRequest(json);
//   const getAppMetadataBridgeResponse = Convert.toGetAppMetadataBridgeResponse(json);
//   const openAgentErrorResponse = Convert.toOpenAgentErrorResponse(json);
//   const openAgentRequest = Convert.toOpenAgentRequest(json);
//   const openAgentResponse = Convert.toOpenAgentResponse(json);
//   const openBridgeErrorResponse = Convert.toOpenBridgeErrorResponse(json);
//   const openBridgeRequest = Convert.toOpenBridgeRequest(json);
//   const openBridgeResponse = Convert.toOpenBridgeResponse(json);
//   const privateChannelBroadcastAgentRequest = Convert.toPrivateChannelBroadcastAgentRequest(json);
//   const privateChannelBroadcastBridgeRequest = Convert.toPrivateChannelBroadcastBridgeRequest(json);
//   const privateChannelEventListenerAddedAgentRequest = Convert.toPrivateChannelEventListenerAddedAgentRequest(json);
//   const privateChannelEventListenerAddedBridgeRequest = Convert.toPrivateChannelEventListenerAddedBridgeRequest(json);
//   const privateChannelEventListenerRemovedAgentRequest = Convert.toPrivateChannelEventListenerRemovedAgentRequest(json);
//   const privateChannelEventListenerRemovedBridgeRequest = Convert.toPrivateChannelEventListenerRemovedBridgeRequest(json);
//   const privateChannelOnAddContextListenerAgentRequest = Convert.toPrivateChannelOnAddContextListenerAgentRequest(json);
//   const privateChannelOnAddContextListenerBridgeRequest = Convert.toPrivateChannelOnAddContextListenerBridgeRequest(json);
//   const privateChannelOnDisconnectAgentRequest = Convert.toPrivateChannelOnDisconnectAgentRequest(json);
//   const privateChannelOnDisconnectBridgeRequest = Convert.toPrivateChannelOnDisconnectBridgeRequest(json);
//   const privateChannelOnUnsubscribeAgentRequest = Convert.toPrivateChannelOnUnsubscribeAgentRequest(json);
//   const privateChannelOnUnsubscribeBridgeRequest = Convert.toPrivateChannelOnUnsubscribeBridgeRequest(json);
//   const raiseIntentAgentErrorResponse = Convert.toRaiseIntentAgentErrorResponse(json);
//   const raiseIntentAgentRequest = Convert.toRaiseIntentAgentRequest(json);
//   const raiseIntentAgentResponse = Convert.toRaiseIntentAgentResponse(json);
//   const raiseIntentBridgeErrorResponse = Convert.toRaiseIntentBridgeErrorResponse(json);
//   const raiseIntentBridgeRequest = Convert.toRaiseIntentBridgeRequest(json);
//   const raiseIntentBridgeResponse = Convert.toRaiseIntentBridgeResponse(json);
//   const raiseIntentResultAgentErrorResponse = Convert.toRaiseIntentResultAgentErrorResponse(json);
//   const raiseIntentResultAgentResponse = Convert.toRaiseIntentResultAgentResponse(json);
//   const raiseIntentResultBridgeErrorResponse = Convert.toRaiseIntentResultBridgeErrorResponse(json);
//   const raiseIntentResultBridgeResponse = Convert.toRaiseIntentResultBridgeResponse(json);
//   const context = Convert.toContext(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * Metadata relating to the FDC3 Desktop Agent implementation and its provider.
 */
export interface BaseImplementationMetadata {
  /**
   * The version number of the FDC3 specification that the implementation provides.
   * The string must be a numeric semver version, e.g. 1.2 or 1.2.1.
   */
  fdc3Version: string;
  /**
   * Metadata indicating whether the Desktop Agent implements optional features of
   * the Desktop Agent API.
   */
  optionalFeatures: BaseImplementationMetadataOptionalFeatures;
  /**
   * The name of the provider of the Desktop Agent implementation (e.g. Finsemble, Glue42,
   * OpenFin etc.).
   */
  provider: string;
  /**
   * The version of the provider of the Desktop Agent implementation (e.g. 5.3.0).
   */
  providerVersion?: string;
}

/**
 * Metadata indicating whether the Desktop Agent implements optional features of
 * the Desktop Agent API.
 */
export interface BaseImplementationMetadataOptionalFeatures {
  /**
   * Used to indicate whether the experimental Desktop Agent Bridging
   * feature is implemented by the Desktop Agent.
   */
  DesktopAgentBridging: boolean;
  /**
   * Used to indicate whether the exposure of 'originating app metadata' for
   * context and intent messages is supported by the Desktop Agent.
   */
  OriginatingAppMetadata: boolean;
  /**
   * Used to indicate whether the optional `fdc3.joinUserChannel`,
   * `fdc3.getCurrentChannel` and `fdc3.leaveCurrentChannel` are implemented by
   * the Desktop Agent.
   */
  UserChannelMembershipAPIs: boolean;
}

/**
 * A response message from a Desktop Agent to the Bridge containing an error, to be used in
 * preference to the standard response when an error needs to be returned.
 */
export interface AgentErrorResponseMessage {
  meta: AgentResponseMetadata;
  /**
   * Error message payload containing an standardized error string.
   */
  payload: ErrorResponseMessagePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface AgentResponseMetadata {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * Field that represents the source application instance that the response was produced by,
 * or the Desktop Agent if it produced the response without an application.
 *
 * Field that represents the source Desktop Agent that a response was received from.
 *
 * Identifies a particular Desktop Agent in Desktop Agent Bridging scenarios
 * where a request needs to be directed to a Desktop Agent rather than a specific app, or a
 * response message is returned by the Desktop Agent (or more specifically its resolver)
 * rather than a specific app. Used as a substitute for `AppIdentifier` in cases where no
 * app details are available or are appropriate.
 *
 * Array of DesktopAgentIdentifiers for responses that were not returned to the bridge
 * before the timeout or because an error occurred. May be omitted if all sources responded
 * without errors. MUST include the `desktopAgent` field when returned by the bridge.
 *
 * Array of DesktopAgentIdentifiers for the sources that generated responses to the request.
 * Will contain a single value for individual responses and multiple values for responses
 * that were collated by the bridge. May be omitted if all sources errored. MUST include the
 * `desktopAgent` field when returned by the bridge.
 */
export interface DesktopAgentIdentifier {
  /**
   * Used in Desktop Agent Bridging to attribute or target a message to a
   * particular Desktop Agent.
   */
  desktopAgent: string;
  [property: string]: any;
}

/**
 * Error message payload containing an standardized error string.
 */
export interface ErrorResponseMessagePayload {
  error: ResponseErrorDetail;
  [property: string]: any;
}

/**
 * Array of error message strings for responses that were not returned to the bridge before
 * the timeout or because an error occurred. Should be the same length as the `errorSources`
 * array and ordered the same. May be omitted if all sources responded without errors.
 *
 * Constants representing the errors that can be encountered when calling the `open` method
 * on the DesktopAgent object (`fdc3`).
 *
 * Constants representing the errors that can be encountered when calling the `findIntent`,
 * `findIntentsByContext`, `raiseIntent` or `raiseIntentForContext` methods on the
 * DesktopAgent (`fdc3`).
 */
export enum ResponseErrorDetail {
  AccessDenied = 'AccessDenied',
  AgentDisconnected = 'AgentDisconnected',
  AppNotFound = 'AppNotFound',
  AppTimeout = 'AppTimeout',
  CreationFailed = 'CreationFailed',
  DesktopAgentNotFound = 'DesktopAgentNotFound',
  ErrorOnLaunch = 'ErrorOnLaunch',
  IntentDeliveryFailed = 'IntentDeliveryFailed',
  IntentHandlerRejected = 'IntentHandlerRejected',
  MalformedContext = 'MalformedContext',
  MalformedMessage = 'MalformedMessage',
  NoAppsFound = 'NoAppsFound',
  NoChannelFound = 'NoChannelFound',
  NoResultReturned = 'NoResultReturned',
  NotConnectedToBridge = 'NotConnectedToBridge',
  ResolverTimeout = 'ResolverTimeout',
  ResolverUnavailable = 'ResolverUnavailable',
  ResponseToBridgeTimedOut = 'ResponseToBridgeTimedOut',
  TargetAppUnavailable = 'TargetAppUnavailable',
  TargetInstanceUnavailable = 'TargetInstanceUnavailable',
  UserCancelledResolution = 'UserCancelledResolution',
}

/**
 * Identifies the type of the message and it is typically set to the FDC3 function name that
 * the message relates to, e.g. 'findIntent', with 'Response' appended.
 */
export enum ResponseMessageType {
  FindInstancesResponse = 'findInstancesResponse',
  FindIntentResponse = 'findIntentResponse',
  FindIntentsByContextResponse = 'findIntentsByContextResponse',
  GetAppMetadataResponse = 'getAppMetadataResponse',
  OpenResponse = 'openResponse',
  RaiseIntentResponse = 'raiseIntentResponse',
  RaiseIntentResultResponse = 'raiseIntentResultResponse',
}

/**
 * A request message from a Desktop Agent to the Bridge.
 */
export interface AgentRequestMessage {
  meta: AgentRequestMetadata;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: { [key: string]: any };
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface AgentRequestMetadata {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: BridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceIdentifier;
  timestamp: Date;
}

/**
 * Optional field that represents the destination that the request should be routed to. Must
 * be set by the Desktop Agent for API calls that include a target app parameter and must
 * include the name of the Desktop Agent hosting the target application.
 *
 * Represents Identifiers that MUST include the Desktop Agent name and MAY identify a
 * specific app or instance.
 *
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Field that represents the source application that a request or response was received
 * from, or the source Desktop Agent if it issued the request or response itself.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls, such as `fdc3.open` or `fdc3.raiseIntent` at specific applications or application
 * instances.
 *
 * Will always include at least an `appId` field, which uniquely identifies a specific app.
 *
 * If the `instanceId` field is set then the `AppMetadata` object represents a specific
 * instance of the application that may be addressed using that Id.
 *
 * Identifier for the app instance that was selected (or started) to resolve the intent.
 * `source.instanceId` MUST be set, indicating the specific app instance that
 * received the intent.
 *
 * Field that represents the source application instance that the response was produced by,
 * or the Desktop Agent if it produced the response without an application.
 *
 * Field that represents the source Desktop Agent that a response was received from.
 *
 * Identifies a particular Desktop Agent in Desktop Agent Bridging scenarios
 * where a request needs to be directed to a Desktop Agent rather than a specific app, or a
 * response message is returned by the Desktop Agent (or more specifically its resolver)
 * rather than a specific app. Used as a substitute for `AppIdentifier` in cases where no
 * app details are available or are appropriate.
 *
 * Array of DesktopAgentIdentifiers for responses that were not returned to the bridge
 * before the timeout or because an error occurred. May be omitted if all sources responded
 * without errors. MUST include the `desktopAgent` field when returned by the bridge.
 *
 * Array of DesktopAgentIdentifiers for the sources that generated responses to the request.
 * Will contain a single value for individual responses and multiple values for responses
 * that were collated by the bridge. May be omitted if all sources errored. MUST include the
 * `desktopAgent` field when returned by the bridge.
 */
export interface BridgeParticipantIdentifier {
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId?: string;
  /**
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   *
   * Used in Desktop Agent Bridging to attribute or target a message to a
   * particular Desktop Agent.
   */
  desktopAgent?: string;
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  [property: string]: any;
}

/**
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Field that represents the source application that a request or response was received
 * from, or the source Desktop Agent if it issued the request or response itself.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls, such as `fdc3.open` or `fdc3.raiseIntent` at specific applications or application
 * instances.
 *
 * Will always include at least an `appId` field, which uniquely identifies a specific app.
 *
 * If the `instanceId` field is set then the `AppMetadata` object represents a specific
 * instance of the application that may be addressed using that Id.
 *
 * Identifier for the app instance that was selected (or started) to resolve the intent.
 * `source.instanceId` MUST be set, indicating the specific app instance that
 * received the intent.
 *
 * Field that represents the source application instance that the response was produced by,
 * or the Desktop Agent if it produced the response without an application.
 *
 * Field that represents the source Desktop Agent that a response was received from.
 *
 * Identifies a particular Desktop Agent in Desktop Agent Bridging scenarios
 * where a request needs to be directed to a Desktop Agent rather than a specific app, or a
 * response message is returned by the Desktop Agent (or more specifically its resolver)
 * rather than a specific app. Used as a substitute for `AppIdentifier` in cases where no
 * app details are available or are appropriate.
 *
 * Array of DesktopAgentIdentifiers for responses that were not returned to the bridge
 * before the timeout or because an error occurred. May be omitted if all sources responded
 * without errors. MUST include the `desktopAgent` field when returned by the bridge.
 *
 * Array of DesktopAgentIdentifiers for the sources that generated responses to the request.
 * Will contain a single value for individual responses and multiple values for responses
 * that were collated by the bridge. May be omitted if all sources errored. MUST include the
 * `desktopAgent` field when returned by the bridge.
 */
export interface SourceIdentifier {
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId?: string;
  /**
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   *
   * Used in Desktop Agent Bridging to attribute or target a message to a
   * particular Desktop Agent.
   */
  desktopAgent?: string;
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  [property: string]: any;
}

/**
 * Identifies the type of the message and it is typically set to the FDC3 function name that
 * the message relates to, e.g. 'findIntent', with 'Request' appended.
 */
export enum RequestMessageType {
  BroadcastRequest = 'broadcastRequest',
  FindInstancesRequest = 'findInstancesRequest',
  FindIntentRequest = 'findIntentRequest',
  FindIntentsByContextRequest = 'findIntentsByContextRequest',
  GetAppMetadataRequest = 'getAppMetadataRequest',
  OpenRequest = 'openRequest',
  PrivateChannelBroadcast = 'PrivateChannel.broadcast',
  PrivateChannelEventListenerAdded = 'PrivateChannel.eventListenerAdded',
  PrivateChannelOnAddContextListener = 'PrivateChannel.onAddContextListener',
  PrivateChannelOnDisconnect = 'PrivateChannel.onDisconnect',
  PrivateChannelOnUnsubscribe = 'PrivateChannel.onUnsubscribe',
  RaiseIntentRequest = 'raiseIntentRequest',
  RaiseIntentResultResponse = 'raiseIntentResultResponse',
}

/**
 * A response message from a Desktop Agent to the Bridge.
 */
export interface AgentResponseMessage {
  meta: AgentResponseMetadata;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: { [key: string]: any };
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request, used where all connected agents returned errors.
 */
export interface BridgeErrorResponseMessage {
  meta: BridgeErrorResponseMessageMeta;
  /**
   * The error message payload contains details of an error return to the app or agent that
   * raised the original request.
   */
  payload: ResponseErrorMessagePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface BridgeErrorResponseMessageMeta {
  errorDetails: ResponseErrorDetail[];
  errorSources: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The error message payload contains details of an error return to the app or agent that
 * raised the original request.
 */
export interface ResponseErrorMessagePayload {
  error?: ResponseErrorDetail;
  [property: string]: any;
}

/**
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface BridgeRequestMessage {
  meta: BridgeRequestMetadata;
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

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface BridgeRequestMetadata {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: BridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: BridgeSourceIdentifier;
  timestamp: Date;
}

/**
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Field that represents the source application that a request or response was received
 * from, or the source Desktop Agent if it issued the request or response itself.
 *
 * Field that represents the source application instance that the response was produced by,
 * or the Desktop Agent if it produced the response without an application.
 *
 * Field that represents the source Desktop Agent that a response was received from.
 *
 * Identifies a particular Desktop Agent in Desktop Agent Bridging scenarios
 * where a request needs to be directed to a Desktop Agent rather than a specific app, or a
 * response message is returned by the Desktop Agent (or more specifically its resolver)
 * rather than a specific app. Used as a substitute for `AppIdentifier` in cases where no
 * app details are available or are appropriate.
 *
 * Array of DesktopAgentIdentifiers for responses that were not returned to the bridge
 * before the timeout or because an error occurred. May be omitted if all sources responded
 * without errors. MUST include the `desktopAgent` field when returned by the bridge.
 *
 * Array of DesktopAgentIdentifiers for the sources that generated responses to the request.
 * Will contain a single value for individual responses and multiple values for responses
 * that were collated by the bridge. May be omitted if all sources errored. MUST include the
 * `desktopAgent` field when returned by the bridge.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls, such as `fdc3.open` or `fdc3.raiseIntent` at specific applications or application
 * instances.
 *
 * Will always include at least an `appId` field, which uniquely identifies a specific app.
 *
 * If the `instanceId` field is set then the `AppMetadata` object represents a specific
 * instance of the application that may be addressed using that Id.
 *
 * Identifier for the app instance that was selected (or started) to resolve the intent.
 * `source.instanceId` MUST be set, indicating the specific app instance that
 * received the intent.
 */
export interface BridgeSourceIdentifier {
  /**
   * Used in Desktop Agent Bridging to attribute or target a message to a
   * particular Desktop Agent.
   *
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   */
  desktopAgent: string;
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId?: string;
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  [property: string]: any;
}

/**
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request.
 */
export interface BridgeResponseMessage {
  meta: BridgeResponseMessageMeta;
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

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface BridgeResponseMessageMeta {
  errorDetails?: ResponseErrorDetail[];
  errorSources?: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  sources?: DesktopAgentIdentifier[];
  timestamp: Date;
}

/**
 * A request to broadcast context on a channel.
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface BroadcastAgentRequest {
  meta: BroadcastAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: BroadcastAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface BroadcastAgentRequestMeta {
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  timestamp: Date;
}

/**
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls, such as `fdc3.open` or `fdc3.raiseIntent` at specific applications or application
 * instances.
 *
 * Will always include at least an `appId` field, which uniquely identifies a specific app.
 *
 * If the `instanceId` field is set then the `AppMetadata` object represents a specific
 * instance of the application that may be addressed using that Id.
 *
 * Identifier for the app instance that was selected (or started) to resolve the intent.
 * `source.instanceId` MUST be set, indicating the specific app instance that
 * received the intent.
 *
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Field that represents the source application that a request or response was received
 * from, or the source Desktop Agent if it issued the request or response itself.
 *
 * Field that represents the source application instance that the response was produced by,
 * or the Desktop Agent if it produced the response without an application.
 *
 * Field that represents the source Desktop Agent that a response was received from.
 *
 * Identifies a particular Desktop Agent in Desktop Agent Bridging scenarios
 * where a request needs to be directed to a Desktop Agent rather than a specific app, or a
 * response message is returned by the Desktop Agent (or more specifically its resolver)
 * rather than a specific app. Used as a substitute for `AppIdentifier` in cases where no
 * app details are available or are appropriate.
 *
 * Array of DesktopAgentIdentifiers for responses that were not returned to the bridge
 * before the timeout or because an error occurred. May be omitted if all sources responded
 * without errors. MUST include the `desktopAgent` field when returned by the bridge.
 *
 * Array of DesktopAgentIdentifiers for the sources that generated responses to the request.
 * Will contain a single value for individual responses and multiple values for responses
 * that were collated by the bridge. May be omitted if all sources errored. MUST include the
 * `desktopAgent` field when returned by the bridge.
 */
export interface SourceObject {
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId: string;
  /**
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   *
   * Used in Desktop Agent Bridging to attribute or target a message to a
   * particular Desktop Agent.
   */
  desktopAgent?: string;
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface BroadcastAgentRequestPayload {
  /**
   * The Id of the PrivateChannel that the broadcast was sent on
   */
  channelId: string;
  /**
   * The context object that was the payload of a broadcast message.
   */
  context: ContextElement;
}

/**
 * The context object that was the payload of a broadcast message.
 */
export interface ContextElement {
  id?: { [key: string]: any };
  name?: string;
  type: string;
  [property: string]: any;
}

/**
 * A request to broadcast context on a channel.
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
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

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface BroadcastBridgeRequestMeta {
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls, such as `fdc3.open` or `fdc3.raiseIntent` at specific applications or application
 * instances.
 *
 * Will always include at least an `appId` field, which uniquely identifies a specific app.
 *
 * If the `instanceId` field is set then the `AppMetadata` object represents a specific
 * instance of the application that may be addressed using that Id.
 *
 * Identifier for the app instance that was selected (or started) to resolve the intent.
 * `source.instanceId` MUST be set, indicating the specific app instance that
 * received the intent.
 *
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Field that represents the source application that a request or response was received
 * from, or the source Desktop Agent if it issued the request or response itself.
 *
 * Field that represents the source application instance that the response was produced by,
 * or the Desktop Agent if it produced the response without an application.
 *
 * Field that represents the source Desktop Agent that a response was received from.
 *
 * Identifies a particular Desktop Agent in Desktop Agent Bridging scenarios
 * where a request needs to be directed to a Desktop Agent rather than a specific app, or a
 * response message is returned by the Desktop Agent (or more specifically its resolver)
 * rather than a specific app. Used as a substitute for `AppIdentifier` in cases where no
 * app details are available or are appropriate.
 *
 * Array of DesktopAgentIdentifiers for responses that were not returned to the bridge
 * before the timeout or because an error occurred. May be omitted if all sources responded
 * without errors. MUST include the `desktopAgent` field when returned by the bridge.
 *
 * Array of DesktopAgentIdentifiers for the sources that generated responses to the request.
 * Will contain a single value for individual responses and multiple values for responses
 * that were collated by the bridge. May be omitted if all sources errored. MUST include the
 * `desktopAgent` field when returned by the bridge.
 */
export interface MetaSource {
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId: string;
  /**
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   *
   * Used in Desktop Agent Bridging to attribute or target a message to a
   * particular Desktop Agent.
   */
  desktopAgent: string;
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface BroadcastBridgeRequestPayload {
  /**
   * The Id of the PrivateChannel that the broadcast was sent on
   */
  channelId: string;
  /**
   * The context object that was the payload of a broadcast message.
   */
  context: ContextElement;
}

/**
 * A message used during the connection flow for a Desktop Agent to the Bridge. Used for
 * messages sent in either direction.
 */
export interface ConnectionStepMessage {
  meta: ConnectionStepMetadata;
  /**
   * The message payload, containing data pertaining to this connection step.
   */
  payload: { [key: string]: any };
  /**
   * Identifies the type of the connection step message.
   */
  type: ConnectionStepMessageType;
}

/**
 * Metadata for this connection step message.
 */
export interface ConnectionStepMetadata {
  requestUuid?: string;
  responseUuid?: string;
  timestamp: Date;
}

/**
 * Identifies the type of the connection step message.
 */
export enum ConnectionStepMessageType {
  AuthenticationFailed = 'authenticationFailed',
  ConnectedAgentsUpdate = 'connectedAgentsUpdate',
  Handshake = 'handshake',
  Hello = 'hello',
}

/**
 * Hello message sent by the Bridge to anyone connecting to the Bridge (enables
 * identification as a bridge and confirmation of whether authentication is required)
 *
 * A message used during the connection flow for a Desktop Agent to the Bridge. Used for
 * messages sent in either direction.
 */
export interface ConnectionStep2Hello {
  meta: ConnectionStep2HelloMeta;
  /**
   * The message payload, containing data pertaining to this connection step.
   */
  payload: ConnectionStep2HelloPayload;
  /**
   * Identifies the type of the connection step message.
   */
  type: ConnectionStepMessageType;
}

/**
 * Metadata for this connection step message.
 */
export interface ConnectionStep2HelloMeta {
  timestamp: Date;
}

/**
 * The message payload, containing data pertaining to this connection step.
 */
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

/**
 * Handshake message sent by the Desktop Agent to the Bridge (including requested name,
 * channel state and authentication data)
 *
 * A message used during the connection flow for a Desktop Agent to the Bridge. Used for
 * messages sent in either direction.
 */
export interface ConnectionStep3Handshake {
  meta: ConnectionStep3HandshakeMeta;
  /**
   * The message payload, containing data pertaining to this connection step.
   */
  payload: ConnectionStep3HandshakePayload;
  /**
   * Identifies the type of the connection step message.
   */
  type: ConnectionStepMessageType;
}

/**
 * Metadata for this connection step message.
 */
export interface ConnectionStep3HandshakeMeta {
  requestUuid: string;
  timestamp: Date;
}

/**
 * The message payload, containing data pertaining to this connection step.
 */
export interface ConnectionStep3HandshakePayload {
  authToken?: string;
  /**
   * The current state of the Desktop Agent's channels, excluding any private channels, as a
   * mapping of channel id to an array of Context objects, most recent first.
   */
  channelsState: { [key: string]: ContextElement[] };
  /**
   * Desktop Agent ImplementationMetadata trying to connect to the bridge.
   */
  implementationMetadata: ImplementationMetadataElement;
  /**
   * The requested Desktop Agent name
   */
  requestedName: string;
}

/**
 * Desktop Agent ImplementationMetadata trying to connect to the bridge.
 *
 * Metadata relating to the FDC3 Desktop Agent implementation and its provider.
 */
export interface ImplementationMetadataElement {
  /**
   * The version number of the FDC3 specification that the implementation provides.
   * The string must be a numeric semver version, e.g. 1.2 or 1.2.1.
   */
  fdc3Version: string;
  /**
   * Metadata indicating whether the Desktop Agent implements optional features of
   * the Desktop Agent API.
   */
  optionalFeatures: ImplementationMetadataOptionalFeatures;
  /**
   * The name of the provider of the Desktop Agent implementation (e.g. Finsemble, Glue42,
   * OpenFin etc.).
   */
  provider: string;
  /**
   * The version of the provider of the Desktop Agent implementation (e.g. 5.3.0).
   */
  providerVersion?: string;
}

/**
 * Metadata indicating whether the Desktop Agent implements optional features of
 * the Desktop Agent API.
 */
export interface ImplementationMetadataOptionalFeatures {
  /**
   * Used to indicate whether the experimental Desktop Agent Bridging
   * feature is implemented by the Desktop Agent.
   */
  DesktopAgentBridging: boolean;
  /**
   * Used to indicate whether the exposure of 'originating app metadata' for
   * context and intent messages is supported by the Desktop Agent.
   */
  OriginatingAppMetadata: boolean;
  /**
   * Used to indicate whether the optional `fdc3.joinUserChannel`,
   * `fdc3.getCurrentChannel` and `fdc3.leaveCurrentChannel` are implemented by
   * the Desktop Agent.
   */
  UserChannelMembershipAPIs: boolean;
}

/**
 * Message sent by Bridge to Desktop Agent if their authentication fails.
 *
 * A message used during the connection flow for a Desktop Agent to the Bridge. Used for
 * messages sent in either direction.
 */
export interface ConnectionStep4AuthenticationFailed {
  meta: ConnectionStep4AuthenticationFailedMeta;
  /**
   * The message payload, containing data pertaining to this connection step.
   */
  payload: ConnectionStep4AuthenticationFailedPayload;
  /**
   * Identifies the type of the connection step message.
   */
  type: ConnectionStepMessageType;
}

/**
 * Metadata for this connection step message.
 */
export interface ConnectionStep4AuthenticationFailedMeta {
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The message payload, containing data pertaining to this connection step.
 */
export interface ConnectionStep4AuthenticationFailedPayload {
  message?: string;
}

/**
 * Message sent by Bridge to all Desktop Agent when an agent joins or leaves the bridge,
 * includes the details of all agents, the change made and the expected channel state for
 * all agents.
 *
 * A message used during the connection flow for a Desktop Agent to the Bridge. Used for
 * messages sent in either direction.
 */
export interface ConnectionStep6ConnectedAgentsUpdate {
  meta: ConnectionStep6ConnectedAgentsUpdateMeta;
  /**
   * The message payload, containing data pertaining to this connection step.
   */
  payload: ConnectionStep6ConnectedAgentsUpdatePayload;
  /**
   * Identifies the type of the connection step message.
   */
  type: ConnectionStepMessageType;
}

/**
 * Metadata for this connection step message.
 */
export interface ConnectionStep6ConnectedAgentsUpdateMeta {
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The message payload, containing data pertaining to this connection step.
 */
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
 * A response to a findInstances request that contains an error.
 *
 * A response message from a Desktop Agent to the Bridge containing an error, to be used in
 * preference to the standard response when an error needs to be returned.
 */
export interface FindInstancesAgentErrorResponse {
  meta: FindInstancesAgentErrorResponseMeta;
  /**
   * Error message payload containing an standardized error string.
   */
  payload: FindInstancesAgentErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface FindInstancesAgentErrorResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * Error message payload containing an standardized error string.
 */
export interface FindInstancesAgentErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * Constants representing the errors that can be encountered when calling the `findIntent`,
 * `findIntentsByContext`, `raiseIntent` or `raiseIntentForContext` methods on the
 * DesktopAgent (`fdc3`).
 *
 * Array of error message strings for responses that were not returned to the bridge before
 * the timeout or because an error occurred. Should be the same length as the `errorSources`
 * array and ordered the same. May be omitted if all sources responded without errors.
 *
 * Constants representing the errors that can be encountered when calling the `open` method
 * on the DesktopAgent object (`fdc3`).
 */
export enum ErrorMessage {
  AgentDisconnected = 'AgentDisconnected',
  DesktopAgentNotFound = 'DesktopAgentNotFound',
  IntentDeliveryFailed = 'IntentDeliveryFailed',
  MalformedContext = 'MalformedContext',
  MalformedMessage = 'MalformedMessage',
  NoAppsFound = 'NoAppsFound',
  NotConnectedToBridge = 'NotConnectedToBridge',
  ResolverTimeout = 'ResolverTimeout',
  ResolverUnavailable = 'ResolverUnavailable',
  ResponseToBridgeTimedOut = 'ResponseToBridgeTimedOut',
  TargetAppUnavailable = 'TargetAppUnavailable',
  TargetInstanceUnavailable = 'TargetInstanceUnavailable',
  UserCancelledResolution = 'UserCancelledResolution',
}

/**
 * A request for details of instances of a particular app
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface FindInstancesAgentRequest {
  meta: FindInstancesAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: FindInstancesAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface FindInstancesAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: PurpleBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  timestamp: Date;
}

/**
 * Field that represents the source application instance that the response was produced by,
 * or the Desktop Agent if it produced the response without an application.
 *
 * Field that represents the source Desktop Agent that a response was received from.
 *
 * Identifies a particular Desktop Agent in Desktop Agent Bridging scenarios
 * where a request needs to be directed to a Desktop Agent rather than a specific app, or a
 * response message is returned by the Desktop Agent (or more specifically its resolver)
 * rather than a specific app. Used as a substitute for `AppIdentifier` in cases where no
 * app details are available or are appropriate.
 *
 * Array of DesktopAgentIdentifiers for responses that were not returned to the bridge
 * before the timeout or because an error occurred. May be omitted if all sources responded
 * without errors. MUST include the `desktopAgent` field when returned by the bridge.
 *
 * Array of DesktopAgentIdentifiers for the sources that generated responses to the request.
 * Will contain a single value for individual responses and multiple values for responses
 * that were collated by the bridge. May be omitted if all sources errored. MUST include the
 * `desktopAgent` field when returned by the bridge.
 *
 * Optional field that represents the destination that the request should be routed to. Must
 * be set by the Desktop Agent for API calls that include a target app parameter and must
 * include the name of the Desktop Agent hosting the target application.
 *
 * Represents Identifiers that MUST include the Desktop Agent name and MAY identify a
 * specific app or instance.
 *
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Field that represents the source application that a request or response was received
 * from, or the source Desktop Agent if it issued the request or response itself.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls, such as `fdc3.open` or `fdc3.raiseIntent` at specific applications or application
 * instances.
 *
 * Will always include at least an `appId` field, which uniquely identifies a specific app.
 *
 * If the `instanceId` field is set then the `AppMetadata` object represents a specific
 * instance of the application that may be addressed using that Id.
 *
 * Identifier for the app instance that was selected (or started) to resolve the intent.
 * `source.instanceId` MUST be set, indicating the specific app instance that
 * received the intent.
 */
export interface PurpleBridgeParticipantIdentifier {
  /**
   * Used in Desktop Agent Bridging to attribute or target a message to a
   * particular Desktop Agent.
   *
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   */
  desktopAgent: string;
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId?: string;
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FindInstancesAgentRequestPayload {
  app: AppIdentifier;
}

/**
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls, such as `fdc3.open` or `fdc3.raiseIntent` at specific applications or application
 * instances.
 *
 * Will always include at least an `appId` field, which uniquely identifies a specific app.
 *
 * If the `instanceId` field is set then the `AppMetadata` object represents a specific
 * instance of the application that may be addressed using that Id.
 *
 * Identifier for the app instance that was selected (or started) to resolve the intent.
 * `source.instanceId` MUST be set, indicating the specific app instance that
 * received the intent.
 */
export interface AppIdentifier {
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId: string;
  /**
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   */
  desktopAgent?: string;
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  [property: string]: any;
}

/**
 * A response to a findInstances request.
 *
 * A response message from a Desktop Agent to the Bridge.
 */
export interface FindInstancesAgentResponse {
  meta: FindInstancesAgentResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: FindInstancesAgentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface FindInstancesAgentResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface FindInstancesAgentResponsePayload {
  appIdentifiers: AppMetadata[];
}

/**
 * Extends an `AppIdentifier`, describing an application or instance of an application, with
 * additional descriptive metadata that is usually provided by an FDC3 App Directory that
 * the desktop agent connects to.
 *
 * The additional information from an app directory can aid in rendering UI elements, such
 * as a launcher menu or resolver UI. This includes a title, description, tooltip and icon
 * and screenshot URLs.
 *
 * Note that as `AppMetadata` instances are also `AppIdentifiers` they may be passed to the
 * `app` argument of `fdc3.open`, `fdc3.raiseIntent` etc.
 */
export interface AppMetadata {
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId: string;
  /**
   * A longer, multi-paragraph description for the application that could include markup
   */
  description?: string;
  /**
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   */
  desktopAgent?: string;
  /**
   * A list of icon URLs for the application that can be used to render UI elements
   */
  icons?: Icon[];
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  /**
   * An optional set of, implementation specific, metadata fields that can be used to
   * disambiguate instances, such as a window title or screen position. Must only be set if
   * `instanceId` is set.
   */
  instanceMetadata?: { [key: string]: any };
  /**
   * The 'friendly' app name.
   * This field was used with the `open` and `raiseIntent` calls in FDC3 <2.0, which now
   * require an `AppIdentifier` wth `appId` set.
   * Note that for display purposes the `title` field should be used, if set, in preference to
   * this field.
   */
  name?: string;
  /**
   * The type of output returned for any intent specified during resolution. May express a
   * particular context type (e.g. "fdc3.instrument"), channel (e.g. "channel") or a channel
   * that will receive a specified type (e.g. "channel<fdc3.instrument>").
   */
  resultType?: null | string;
  /**
   * Images representing the app in common usage scenarios that can be used to render UI
   * elements
   */
  screenshots?: Image[];
  /**
   * A more user-friendly application title that can be used to render UI elements
   */
  title?: string;
  /**
   * A tooltip for the application that can be used to render UI elements
   */
  tooltip?: string;
  /**
   * The Version of the application.
   */
  version?: string;
}

/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright FINOS FDC3 contributors - see NOTICE file
 */
export interface Icon {
  /**
   * The icon dimension, formatted as `<height>x<width>`.
   */
  size?: string;
  /**
   * The icon url
   */
  src: string;
  /**
   * Icon media type. If not present the Desktop Agent may use the src file extension.
   */
  type?: string;
}

/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright FINOS FDC3 contributors - see NOTICE file
 */
export interface Image {
  /**
   * Caption for the image.
   */
  label?: string;
  /**
   * The image dimension, formatted as `<height>x<width>`.
   */
  size?: string;
  /**
   * The image url.
   */
  src: string;
  /**
   * Image media type. If not present the Desktop Agent may use the src file extension.
   */
  type?: string;
}

/**
 * A response to a findInstances request that contains an error.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request, used where all connected agents returned errors.
 */
export interface FindInstancesBridgeErrorResponse {
  meta: FindInstancesBridgeErrorResponseMeta;
  /**
   * The error message payload contains details of an error return to the app or agent that
   * raised the original request.
   */
  payload: FindInstancesBridgeErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface FindInstancesBridgeErrorResponseMeta {
  errorDetails: ResponseErrorDetail[];
  errorSources: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The error message payload contains details of an error return to the app or agent that
 * raised the original request.
 */
export interface FindInstancesBridgeErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * A request for details of instances of a particular app
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
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

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface FindInstancesBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: PurpleBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FindInstancesBridgeRequestPayload {
  app: AppIdentifier;
}

/**
 * A response to a findInstances request.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request.
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

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface FindInstancesBridgeResponseMeta {
  errorDetails?: ResponseErrorDetail[];
  errorSources?: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  sources?: DesktopAgentIdentifier[];
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface FindInstancesBridgeResponsePayload {
  appIdentifiers: AppMetadata[];
}

/**
 * A response to a findIntent request that contains an error.
 *
 * A response message from a Desktop Agent to the Bridge containing an error, to be used in
 * preference to the standard response when an error needs to be returned.
 */
export interface FindIntentAgentErrorResponse {
  meta: FindIntentAgentErrorResponseMeta;
  /**
   * Error message payload containing an standardized error string.
   */
  payload: FindIntentAgentErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface FindIntentAgentErrorResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * Error message payload containing an standardized error string.
 */
export interface FindIntentAgentErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * A request for details of apps available to resolve a particular intent and context pair.
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface FindIntentsAgentRequest {
  meta: FindIntentsAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: FindIntentsAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface FindIntentsAgentRequestMeta {
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceIdentifier;
  timestamp: Date;
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: BridgeParticipantIdentifier;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FindIntentsAgentRequestPayload {
  context: ContextElement;
  intent: string;
}

/**
 * A response to a findIntent request.
 *
 * A response message from a Desktop Agent to the Bridge.
 */
export interface FindIntentAgentResponse {
  meta: FindIntentAgentResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: FindIntentAgentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface FindIntentAgentResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface FindIntentAgentResponsePayload {
  appIntent: AppIntent;
}

/**
 * An interface that relates an intent to apps
 */
export interface AppIntent {
  /**
   * Details of applications that can resolve the intent.
   */
  apps: AppMetadata[];
  /**
   * Details of the intent whose relationship to resolving applications is being described.
   */
  intent: IntentMetadata;
}

/**
 * Details of the intent whose relationship to resolving applications is being described.
 *
 * Intent descriptor
 */
export interface IntentMetadata {
  /**
   * Display name for the intent.
   */
  displayName: string;
  /**
   * The unique name of the intent that can be invoked by the raiseIntent call
   */
  name: string;
}

/**
 * A response to a findIntent request that contains an error.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request, used where all connected agents returned errors.
 */
export interface FindIntentBridgeErrorResponse {
  meta: FindIntentBridgeErrorResponseMeta;
  /**
   * The error message payload contains details of an error return to the app or agent that
   * raised the original request.
   */
  payload: FindIntentBridgeErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface FindIntentBridgeErrorResponseMeta {
  errorDetails: ResponseErrorDetail[];
  errorSources: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The error message payload contains details of an error return to the app or agent that
 * raised the original request.
 */
export interface FindIntentBridgeErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * A request for details of apps available to resolve a particular intent and context pair.
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
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

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface FindIntentBridgeRequestMeta {
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: BridgeSourceIdentifier;
  timestamp: Date;
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: BridgeParticipantIdentifier;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FindIntentBridgeRequestPayload {
  context: ContextElement;
  intent: string;
}

/**
 * A response to a findIntent request.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request.
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

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface FindIntentBridgeResponseMeta {
  errorDetails?: ResponseErrorDetail[];
  errorSources?: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  sources?: DesktopAgentIdentifier[];
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface FindIntentBridgeResponsePayload {
  appIntent: AppIntent;
}

/**
 * A response to a findIntentsByContext request that contains an error.
 *
 * A response message from a Desktop Agent to the Bridge containing an error, to be used in
 * preference to the standard response when an error needs to be returned.
 */
export interface FindIntentsByContextAgentErrorResponse {
  meta: FindIntentsByContextAgentErrorResponseMeta;
  /**
   * Error message payload containing an standardized error string.
   */
  payload: FindIntentsByContextAgentErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface FindIntentsByContextAgentErrorResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * Error message payload containing an standardized error string.
 */
export interface FindIntentsByContextAgentErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * A request for details of intents and apps available to resolve them for a particular
 * context.
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface FindIntentsByContextAgentRequest {
  meta: FindIntentsByContextAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: FindIntentsByContextAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface FindIntentsByContextAgentRequestMeta {
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  timestamp: Date;
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: BridgeParticipantIdentifier;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FindIntentsByContextAgentRequestPayload {
  context: ContextElement;
}

/**
 * A response to a findIntentsByContext request.
 *
 * A response message from a Desktop Agent to the Bridge.
 */
export interface FindIntentsByContextAgentResponse {
  meta: FindIntentsByContextAgentResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: FindIntentsByContextAgentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface FindIntentsByContextAgentResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface FindIntentsByContextAgentResponsePayload {
  appIntents: AppIntent[];
}

/**
 * A response to a findIntentsByContext request that contains an error.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request, used where all connected agents returned errors.
 */
export interface FindIntentsByContextBridgeErrorResponse {
  meta: FindIntentsByContextBridgeErrorResponseMeta;
  /**
   * The error message payload contains details of an error return to the app or agent that
   * raised the original request.
   */
  payload: FindIntentsByContextBridgeErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface FindIntentsByContextBridgeErrorResponseMeta {
  errorDetails: ResponseErrorDetail[];
  errorSources: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The error message payload contains details of an error return to the app or agent that
 * raised the original request.
 */
export interface FindIntentsByContextBridgeErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * A request for details of intents and apps available to resolve them for a particular
 * context.
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
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

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface FindIntentsByContextBridgeRequestMeta {
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: BridgeParticipantIdentifier;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface FindIntentsByContextBridgeRequestPayload {
  context: ContextElement;
}

/**
 * A response to a findIntentsByContext request.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request.
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

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface FindIntentsByContextBridgeResponseMeta {
  errorDetails?: ResponseErrorDetail[];
  errorSources?: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  sources?: DesktopAgentIdentifier[];
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface FindIntentsByContextBridgeResponsePayload {
  appIntents: AppIntent[];
}

/**
 * A response to a getAppMetadata request that contains an error.
 *
 * A response message from a Desktop Agent to the Bridge containing an error, to be used in
 * preference to the standard response when an error needs to be returned.
 */
export interface GetAppMetadataAgentErrorResponse {
  meta: GetAppMetadataAgentErrorResponseMeta;
  /**
   * Error message payload containing an standardized error string.
   */
  payload: GetAppMetadataAgentErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface GetAppMetadataAgentErrorResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * Error message payload containing an standardized error string.
 */
export interface GetAppMetadataAgentErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * A request for metadata about an app
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface GetAppMetadataAgentRequest {
  meta: GetAppMetadataAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: GetAppMetadataAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface GetAppMetadataAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: PurpleBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface GetAppMetadataAgentRequestPayload {
  app: AppIdentifier;
}

/**
 * A response to a getAppMetadata request.
 *
 * A response message from a Desktop Agent to the Bridge.
 */
export interface GetAppMetadataAgentResponse {
  meta: GetAppMetadataAgentResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: GetAppMetadataAgentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface GetAppMetadataAgentResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface GetAppMetadataAgentResponsePayload {
  appMetadata: AppMetadata;
}

/**
 * A response to a getAppMetadata request that contains an error.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request, used where all connected agents returned errors.
 */
export interface GetAppMetadataBridgeErrorResponse {
  meta: GetAppMetadataBridgeErrorResponseMeta;
  /**
   * The error message payload contains details of an error return to the app or agent that
   * raised the original request.
   */
  payload: GetAppMetadataBridgeErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface GetAppMetadataBridgeErrorResponseMeta {
  errorDetails: ResponseErrorDetail[];
  errorSources: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The error message payload contains details of an error return to the app or agent that
 * raised the original request.
 */
export interface GetAppMetadataBridgeErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * A request for metadata about an app
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface GetAppMetadataBridgeRequest {
  meta: GetAppMetadataBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: GetAppMetadataBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface GetAppMetadataBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: PurpleBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface GetAppMetadataBridgeRequestPayload {
  app: AppIdentifier;
}

/**
 * A response to a getAppMetadata request.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request.
 */
export interface GetAppMetadataBridgeResponse {
  meta: GetAppMetadataBridgeResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: GetAppMetadataBridgeResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface GetAppMetadataBridgeResponseMeta {
  errorDetails?: ResponseErrorDetail[];
  errorSources?: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  sources?: DesktopAgentIdentifier[];
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface GetAppMetadataBridgeResponsePayload {
  appMetadata: AppMetadata;
}

/**
 * A response to an open request that contains an error
 *
 * A response message from a Desktop Agent to the Bridge containing an error, to be used in
 * preference to the standard response when an error needs to be returned.
 */
export interface OpenAgentErrorResponse {
  meta: OpenAgentErrorResponseMeta;
  /**
   * Error message payload containing an standardized error string.
   */
  payload: OpenAgentErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface OpenAgentErrorResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * Error message payload containing an standardized error string.
 */
export interface OpenAgentErrorResponsePayload {
  error: OpenErrorMessage;
}

/**
 * Constants representing the errors that can be encountered when calling the `open` method
 * on the DesktopAgent object (`fdc3`).
 *
 * Array of error message strings for responses that were not returned to the bridge before
 * the timeout or because an error occurred. Should be the same length as the `errorSources`
 * array and ordered the same. May be omitted if all sources responded without errors.
 *
 * Constants representing the errors that can be encountered when calling the `findIntent`,
 * `findIntentsByContext`, `raiseIntent` or `raiseIntentForContext` methods on the
 * DesktopAgent (`fdc3`).
 */
export enum OpenErrorMessage {
  AgentDisconnected = 'AgentDisconnected',
  AppNotFound = 'AppNotFound',
  AppTimeout = 'AppTimeout',
  DesktopAgentNotFound = 'DesktopAgentNotFound',
  ErrorOnLaunch = 'ErrorOnLaunch',
  MalformedContext = 'MalformedContext',
  MalformedMessage = 'MalformedMessage',
  NotConnectedToBridge = 'NotConnectedToBridge',
  ResolverUnavailable = 'ResolverUnavailable',
  ResponseToBridgeTimedOut = 'ResponseToBridgeTimedOut',
}

/**
 * A request to open an application
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface OpenAgentRequest {
  meta: OpenAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: OpenAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface OpenAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: PurpleBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface OpenAgentRequestPayload {
  /**
   * The application to open on the specified Desktop Agent
   */
  app: AppToOpen;
  context?: ContextElement;
}

/**
 * The application to open on the specified Desktop Agent
 *
 * Field that represents the source application instance that the response was produced by,
 * or the Desktop Agent if it produced the response without an application.
 *
 * Field that represents the source Desktop Agent that a response was received from.
 *
 * Identifies a particular Desktop Agent in Desktop Agent Bridging scenarios
 * where a request needs to be directed to a Desktop Agent rather than a specific app, or a
 * response message is returned by the Desktop Agent (or more specifically its resolver)
 * rather than a specific app. Used as a substitute for `AppIdentifier` in cases where no
 * app details are available or are appropriate.
 *
 * Array of DesktopAgentIdentifiers for responses that were not returned to the bridge
 * before the timeout or because an error occurred. May be omitted if all sources responded
 * without errors. MUST include the `desktopAgent` field when returned by the bridge.
 *
 * Array of DesktopAgentIdentifiers for the sources that generated responses to the request.
 * Will contain a single value for individual responses and multiple values for responses
 * that were collated by the bridge. May be omitted if all sources errored. MUST include the
 * `desktopAgent` field when returned by the bridge.
 *
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls, such as `fdc3.open` or `fdc3.raiseIntent` at specific applications or application
 * instances.
 *
 * Will always include at least an `appId` field, which uniquely identifies a specific app.
 *
 * If the `instanceId` field is set then the `AppMetadata` object represents a specific
 * instance of the application that may be addressed using that Id.
 *
 * Identifier for the app instance that was selected (or started) to resolve the intent.
 * `source.instanceId` MUST be set, indicating the specific app instance that
 * received the intent.
 */
export interface AppToOpen {
  /**
   * Used in Desktop Agent Bridging to attribute or target a message to a
   * particular Desktop Agent.
   *
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   */
  desktopAgent: string;
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId: string;
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  [property: string]: any;
}

/**
 * A response to an open request
 *
 * A response message from a Desktop Agent to the Bridge.
 */
export interface OpenAgentResponse {
  meta: OpenAgentResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: OpenAgentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface OpenAgentResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface OpenAgentResponsePayload {
  appIdentifier: AppIdentifier;
}

/**
 * A response to an open request that contains an error
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request, used where all connected agents returned errors.
 */
export interface OpenBridgeErrorResponse {
  meta: OpenBridgeErrorResponseMeta;
  /**
   * The error message payload contains details of an error return to the app or agent that
   * raised the original request.
   */
  payload: OpenBridgeErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface OpenBridgeErrorResponseMeta {
  errorDetails: ResponseErrorDetail[];
  errorSources: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The error message payload contains details of an error return to the app or agent that
 * raised the original request.
 */
export interface OpenBridgeErrorResponsePayload {
  error: OpenErrorMessage;
}

/**
 * A request to open an application
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface OpenBridgeRequest {
  meta: OpenBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: OpenBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface OpenBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: PurpleBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface OpenBridgeRequestPayload {
  /**
   * The application to open on the specified Desktop Agent
   */
  app: AppToOpen;
  context?: ContextElement;
}

/**
 * A response to an open request
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request.
 */
export interface OpenBridgeResponse {
  meta: OpenBridgeResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: OpenBridgeResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface OpenBridgeResponseMeta {
  errorDetails?: ResponseErrorDetail[];
  errorSources?: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  sources?: DesktopAgentIdentifier[];
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface OpenBridgeResponsePayload {
  appIdentifier: AppIdentifier;
}

/**
 * A request to broadcast on a PrivateChannel.
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface PrivateChannelBroadcastAgentRequest {
  meta: PrivateChannelBroadcastAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelBroadcastAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface PrivateChannelBroadcastAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  timestamp: Date;
}

/**
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls, such as `fdc3.open` or `fdc3.raiseIntent` at specific applications or application
 * instances.
 *
 * Will always include at least an `appId` field, which uniquely identifies a specific app.
 *
 * If the `instanceId` field is set then the `AppMetadata` object represents a specific
 * instance of the application that may be addressed using that Id.
 *
 * Identifier for the app instance that was selected (or started) to resolve the intent.
 * `source.instanceId` MUST be set, indicating the specific app instance that
 * received the intent.
 *
 * Optional field that represents the destination that the request should be routed to. Must
 * be set by the Desktop Agent for API calls that include a target app parameter and must
 * include the name of the Desktop Agent hosting the target application.
 *
 * Represents Identifiers that MUST include the Desktop Agent name and MAY identify a
 * specific app or instance.
 *
 * Field that represents the source application that the request was received from, or the
 * source Desktop Agent if it issued the request itself.
 *
 * Field that represents the source application that a request or response was received
 * from, or the source Desktop Agent if it issued the request or response itself.
 *
 * Field that represents the source application instance that the response was produced by,
 * or the Desktop Agent if it produced the response without an application.
 *
 * Field that represents the source Desktop Agent that a response was received from.
 *
 * Identifies a particular Desktop Agent in Desktop Agent Bridging scenarios
 * where a request needs to be directed to a Desktop Agent rather than a specific app, or a
 * response message is returned by the Desktop Agent (or more specifically its resolver)
 * rather than a specific app. Used as a substitute for `AppIdentifier` in cases where no
 * app details are available or are appropriate.
 *
 * Array of DesktopAgentIdentifiers for responses that were not returned to the bridge
 * before the timeout or because an error occurred. May be omitted if all sources responded
 * without errors. MUST include the `desktopAgent` field when returned by the bridge.
 *
 * Array of DesktopAgentIdentifiers for the sources that generated responses to the request.
 * Will contain a single value for individual responses and multiple values for responses
 * that were collated by the bridge. May be omitted if all sources errored. MUST include the
 * `desktopAgent` field when returned by the bridge.
 */
export interface FluffyBridgeParticipantIdentifier {
  /**
   * The unique application identifier located within a specific application directory
   * instance. An example of an appId might be 'app@sub.root'
   */
  appId: string;
  /**
   * The Desktop Agent that the app is available on. Used in Desktop Agent Bridging to
   * identify the Desktop Agent to target.
   *
   * Used in Desktop Agent Bridging to attribute or target a message to a
   * particular Desktop Agent.
   */
  desktopAgent?: string;
  /**
   * An optional instance identifier, indicating that this object represents a specific
   * instance of the application described.
   */
  instanceId?: string;
  [property: string]: any;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelBroadcastAgentRequestPayload {
  /**
   * The Id of the PrivateChannel that the broadcast was sent on
   */
  channelId: string;
  /**
   * The context object that was the payload of a broadcast message.
   */
  context: ContextElement;
}

/**
 * A request to broadcast on a PrivateChannel.
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface PrivateChannelBroadcastBridgeRequest {
  meta: PrivateChannelBroadcastBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelBroadcastBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface PrivateChannelBroadcastBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelBroadcastBridgeRequestPayload {
  /**
   * The Id of the PrivateChannel that the broadcast was sent on
   */
  channelId: string;
  /**
   * The context object that was the payload of a broadcast message.
   */
  context: ContextElement;
}

/**
 * A request to forward on an EventListenerAdded event, relating to a PrivateChannel
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface PrivateChannelEventListenerAddedAgentRequest {
  meta: PrivateChannelEventListenerAddedAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelEventListenerAddedAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface PrivateChannelEventListenerAddedAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelEventListenerAddedAgentRequestPayload {
  channel: string;
  context: string;
}

/**
 * A request to forward on an EventListenerAdded event, relating to a PrivateChannel
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface PrivateChannelEventListenerAddedBridgeRequest {
  meta: PrivateChannelEventListenerAddedBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelEventListenerAddedBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface PrivateChannelEventListenerAddedBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelEventListenerAddedBridgeRequestPayload {
  channel: string;
  context: string;
}

/**
 * A request to forward on an EventListenerRemoved event, relating to a PrivateChannel
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface PrivateChannelEventListenerRemovedAgentRequest {
  meta: PrivateChannelEventListenerRemovedAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelEventListenerRemovedAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface PrivateChannelEventListenerRemovedAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelEventListenerRemovedAgentRequestPayload {
  channel: string;
  listenerType: string;
}

/**
 * A request to forward on an EventListenerRemoved event, relating to a PrivateChannel
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface PrivateChannelEventListenerRemovedBridgeRequest {
  meta: PrivateChannelEventListenerRemovedBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelEventListenerRemovedBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface PrivateChannelEventListenerRemovedBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelEventListenerRemovedBridgeRequestPayload {
  channel: string;
  listenerType: string;
}

/**
 * A request to forward on an AddCOntextListener event, relating to a PrivateChannel
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface PrivateChannelOnAddContextListenerAgentRequest {
  meta: PrivateChannelOnAddContextListenerAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelOnAddContextListenerAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface PrivateChannelOnAddContextListenerAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelOnAddContextListenerAgentRequestPayload {
  channel: string;
  contextType: string;
}

/**
 * A request to forward on an AddCOntextListener event, relating to a PrivateChannel
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface PrivateChannelOnAddContextListenerBridgeRequest {
  meta: PrivateChannelOnAddContextListenerBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelOnAddContextListenerBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface PrivateChannelOnAddContextListenerBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelOnAddContextListenerBridgeRequestPayload {
  channel: string;
  contextType: string;
}

/**
 * A request to forward on a Disconnect event, relating to a PrivateChannel
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface PrivateChannelOnDisconnectAgentRequest {
  meta: PrivateChannelOnDisconnectAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelOnDisconnectAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface PrivateChannelOnDisconnectAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelOnDisconnectAgentRequestPayload {
  channel: string;
}

/**
 * A request to forward on a Disconnect event, relating to a PrivateChannel
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface PrivateChannelOnDisconnectBridgeRequest {
  meta: PrivateChannelOnDisconnectBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelOnDisconnectBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface PrivateChannelOnDisconnectBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelOnDisconnectBridgeRequestPayload {
  channel: string;
}

/**
 * A request to forward on an Unsubscribe event, relating to a PrivateChannel
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface PrivateChannelOnUnsubscribeAgentRequest {
  meta: PrivateChannelOnUnsubscribeAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelOnUnsubscribeAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface PrivateChannelOnUnsubscribeAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source?: SourceObject;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelOnUnsubscribeAgentRequestPayload {
  channel: string;
  contextType: string;
}

/**
 * A request to forward on an Unsubscribe event, relating to a PrivateChannel
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface PrivateChannelOnUnsubscribeBridgeRequest {
  meta: ERequestMetadata;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: PrivateChannelOnUnsubscribeBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface ERequestMetadata {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination?: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface PrivateChannelOnUnsubscribeBridgeRequestPayload {
  channel: string;
  contextType: string;
}

/**
 * A response to a request to raise an intent that contains an error.
 *
 * A response message from a Desktop Agent to the Bridge containing an error, to be used in
 * preference to the standard response when an error needs to be returned.
 */
export interface RaiseIntentAgentErrorResponse {
  meta: RaiseIntentAgentErrorResponseMeta;
  /**
   * Error message payload containing an standardized error string.
   */
  payload: RaiseIntentAgentErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface RaiseIntentAgentErrorResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * Error message payload containing an standardized error string.
 */
export interface RaiseIntentAgentErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * A request to raise an intent.
 *
 * A request message from a Desktop Agent to the Bridge.
 */
export interface RaiseIntentAgentRequest {
  meta: RaiseIntentAgentRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: RaiseIntentAgentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: RequestMessageType;
}

/**
 * Metadata for a request message sent by Desktop Agents to the Bridge.
 */
export interface RaiseIntentAgentRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: SourceObject;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface RaiseIntentAgentRequestPayload {
  app: AppIdentifier;
  context: ContextElement;
  intent: string;
}

/**
 * A response to a request to raise an intent.
 *
 * A response message from a Desktop Agent to the Bridge.
 */
export interface RaiseIntentAgentResponse {
  meta: RaiseIntentAgentResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: RaiseIntentAgentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface RaiseIntentAgentResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface RaiseIntentAgentResponsePayload {
  intentResolution: IntentResolution;
}

/**
 * IntentResolution provides a standard format for data returned upon resolving an intent.
 *
 * ```javascript
 * //resolve a "Chain" type intent
 * let resolution = await agent.raiseIntent("intentName", context);
 *
 * //resolve a "Client-Service" type intent with a data response or a Channel
 * let resolution = await agent.raiseIntent("intentName", context);
 * try {
 * const result = await resolution.getResult();
 * if (result && result.broadcast) {
 * console.log(`${resolution.source} returned a channel with id ${result.id}`);
 * } else if (result){
 * console.log(`${resolution.source} returned data: ${JSON.stringify(result)}`);
 * } else {
 * console.error(`${resolution.source} didn't return data`
 * }
 * } catch(error) {
 * console.error(`${resolution.source} returned an error: ${error}`);
 * }
 *
 * // Use metadata about the resolving app instance to target a further intent
 * await agent.raiseIntent("intentName", context, resolution.source);
 * ```
 */
export interface IntentResolution {
  /**
   * The intent that was raised. May be used to determine which intent the user
   * chose in response to `fdc3.raiseIntentForContext()`.
   */
  intent: string;
  /**
   * Identifier for the app instance that was selected (or started) to resolve the intent.
   * `source.instanceId` MUST be set, indicating the specific app instance that
   * received the intent.
   */
  source: AppIdentifier;
  /**
   * The version number of the Intents schema being used.
   */
  version?: string;
}

/**
 * A response to a request to raise an intent that contains an error.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request, used where all connected agents returned errors.
 */
export interface RaiseIntentBridgeErrorResponse {
  meta: RaiseIntentBridgeErrorResponseMeta;
  /**
   * The error message payload contains details of an error return to the app or agent that
   * raised the original request.
   */
  payload: RaiseIntentBridgeErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface RaiseIntentBridgeErrorResponseMeta {
  errorDetails: ResponseErrorDetail[];
  errorSources: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The error message payload contains details of an error return to the app or agent that
 * raised the original request.
 */
export interface RaiseIntentBridgeErrorResponsePayload {
  error: ErrorMessage;
}

/**
 * A request to raise an intent.
 *
 * A request message forwarded from the Bridge onto a Desktop Agent connected to it.
 */
export interface RaiseIntentBridgeRequest {
  meta: RaiseIntentBridgeRequestMeta;
  /**
   * The message payload typically contains the arguments to FDC3 API functions.
   */
  payload: RaiseIntentBridgeRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' appended.
   */
  type: string;
}

/**
 * Metadata required in a request message forwarded on by the Bridge
 */
export interface RaiseIntentBridgeRequestMeta {
  /**
   * Optional field that represents the destination that the request should be routed to. Must
   * be set by the Desktop Agent for API calls that include a target app parameter and must
   * include the name of the Desktop Agent hosting the target application.
   */
  destination: FluffyBridgeParticipantIdentifier;
  requestUuid: string;
  /**
   * Field that represents the source application that the request was received from, or the
   * source Desktop Agent if it issued the request itself.
   */
  source: MetaSource;
  timestamp: Date;
}

/**
 * The message payload typically contains the arguments to FDC3 API functions.
 */
export interface RaiseIntentBridgeRequestPayload {
  app: AppIdentifier;
  context: ContextElement;
  intent: string;
}

/**
 * A response to a request to raise an intent.
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request.
 */
export interface RaiseIntentBridgeResponse {
  meta: RaiseIntentBridgeResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: RaiseIntentBridgeResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface RaiseIntentBridgeResponseMeta {
  errorDetails?: ResponseErrorDetail[];
  errorSources?: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  sources?: DesktopAgentIdentifier[];
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface RaiseIntentBridgeResponsePayload {
  intentResolution: IntentResolution;
}

/**
 * A secondary response to a request to raise an intent used to deliver the intent result,
 * which contains an error
 *
 * A response message from a Desktop Agent to the Bridge containing an error, to be used in
 * preference to the standard response when an error needs to be returned.
 */
export interface RaiseIntentResultAgentErrorResponse {
  meta: RaiseIntentResultAgentErrorResponseMeta;
  /**
   * Error message payload containing an standardized error string.
   */
  payload: RaiseIntentResultAgentErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface RaiseIntentResultAgentErrorResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * Error message payload containing an standardized error string.
 */
export interface RaiseIntentResultAgentErrorResponsePayload {
  error: RaiseIntentResultErrorMessage;
}

/**
 * Array of error message strings for responses that were not returned to the bridge before
 * the timeout or because an error occurred. Should be the same length as the `errorSources`
 * array and ordered the same. May be omitted if all sources responded without errors.
 *
 * Constants representing the errors that can be encountered when calling the `open` method
 * on the DesktopAgent object (`fdc3`).
 *
 * Constants representing the errors that can be encountered when calling the `findIntent`,
 * `findIntentsByContext`, `raiseIntent` or `raiseIntentForContext` methods on the
 * DesktopAgent (`fdc3`).
 */
export enum RaiseIntentResultErrorMessage {
  AgentDisconnected = 'AgentDisconnected',
  IntentHandlerRejected = 'IntentHandlerRejected',
  MalformedMessage = 'MalformedMessage',
  NoResultReturned = 'NoResultReturned',
  NotConnectedToBridge = 'NotConnectedToBridge',
  ResponseToBridgeTimedOut = 'ResponseToBridgeTimedOut',
}

/**
 * A secondary response to a request to raise an intent used to deliver the intent result
 *
 * A response message from a Desktop Agent to the Bridge.
 */
export interface RaiseIntentResultAgentResponse {
  meta: RaiseIntentResultAgentResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: RaiseIntentResultAgentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: ResponseMessageType;
}

/**
 * Metadata for a response messages sent by a Desktop Agent to the Bridge
 */
export interface RaiseIntentResultAgentResponseMeta {
  requestUuid: string;
  responseUuid: string;
  /**
   * Field that represents the source application instance that the response was produced by,
   * or the Desktop Agent if it produced the response without an application.
   */
  source: DesktopAgentIdentifier;
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface RaiseIntentResultAgentResponsePayload {
  intentResult: IntentResult;
}

export interface IntentResult {
  context?: ContextElement;
  channel?: Channel;
}

/**
 * Represents a context channel that applications can use to send and receive
 * context data.
 *
 * Please note that There are differences in behavior when you interact with a
 * User channel via the `DesktopAgent` interface and the `Channel` interface.
 * Specifically, when 'joining' a User channel or adding a context listener
 * when already joined to a channel via the `DesktopAgent` interface, existing
 * context (matching the type of the context listener) on the channel is
 * received by the context listener immediately. Whereas, when a context
 * listener is added via the Channel interface, context is not received
 * automatically, but may be retrieved manually via the `getCurrentContext()`
 * function.
 */
export interface Channel {
  /**
   * Channels may be visualized and selectable by users. DisplayMetadata may be used to
   * provide hints on how to see them.
   * For App channels, displayMetadata would typically not be present.
   */
  displayMetadata?: DisplayMetadata;
  /**
   * Constant that uniquely identifies this channel.
   */
  id: string;
  /**
   * Uniquely defines each channel type.
   * Can be "user", "app" or "private".
   */
  type: Type;
}

/**
 * Channels may be visualized and selectable by users. DisplayMetadata may be used to
 * provide hints on how to see them.
 * For App channels, displayMetadata would typically not be present.
 *
 * A system channel will be global enough to have a presence across many apps. This gives us
 * some hints
 * to render them in a standard way. It is assumed it may have other properties too, but if
 * it has these,
 * this is their meaning.
 */
export interface DisplayMetadata {
  /**
   * The color that should be associated within this channel when displaying this channel in a
   * UI, e.g: `0xFF0000`.
   */
  color?: string;
  /**
   * A URL of an image that can be used to display this channel
   */
  glyph?: string;
  /**
   * A user-readable name for this channel, e.g: `"Red"`
   */
  name?: string;
}

/**
 * Uniquely defines each channel type.
 * Can be "user", "app" or "private".
 */
export enum Type {
  App = 'app',
  Private = 'private',
  User = 'user',
}

/**
 * A secondary response to a request to raise an intent used to deliver the intent result,
 * which contains an error
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request, used where all connected agents returned errors.
 */
export interface RaiseIntentResultBridgeErrorResponse {
  meta: RaiseIntentResultBridgeErrorResponseMeta;
  /**
   * The error message payload contains details of an error return to the app or agent that
   * raised the original request.
   */
  payload: RaiseIntentResultBridgeErrorResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface RaiseIntentResultBridgeErrorResponseMeta {
  errorDetails: ResponseErrorDetail[];
  errorSources: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  timestamp: Date;
}

/**
 * The error message payload contains details of an error return to the app or agent that
 * raised the original request.
 */
export interface RaiseIntentResultBridgeErrorResponsePayload {
  error: RaiseIntentResultErrorMessage;
}

/**
 * A secondary response to a request to raise an intent used to deliver the intent result
 *
 * A response message from the Bridge back to the original Desktop Agent that raised the
 * request.
 */
export interface RaiseIntentResultBridgeResponse {
  meta: RaiseIntentResultBridgeResponseMeta;
  /**
   * The message payload typically contains return values for FDC3 API functions.
   */
  payload: RaiseIntentResultBridgeResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Response' appended.
   */
  type: string;
}

/**
 * Metadata required in a response message collated and/or forwarded on by the Bridge
 */
export interface RaiseIntentResultBridgeResponseMeta {
  errorDetails?: ResponseErrorDetail[];
  errorSources?: DesktopAgentIdentifier[];
  requestUuid: string;
  responseUuid: string;
  sources?: DesktopAgentIdentifier[];
  timestamp: Date;
}

/**
 * The message payload typically contains return values for FDC3 API functions.
 */
export interface RaiseIntentResultBridgeResponsePayload {
  intentResult: IntentResult;
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
  public static toSchemasAPIAPISchema(json: string): any {
    return cast(JSON.parse(json), 'any');
  }

  public static schemasAPIAPISchemaToJson(value: any): string {
    return JSON.stringify(uncast(value, 'any'), null, 2);
  }

  public static toBaseImplementationMetadata(json: string): BaseImplementationMetadata {
    return cast(JSON.parse(json), r('BaseImplementationMetadata'));
  }

  public static baseImplementationMetadataToJson(value: BaseImplementationMetadata): string {
    return JSON.stringify(uncast(value, r('BaseImplementationMetadata')), null, 2);
  }

  public static toAgentErrorResponseMessage(json: string): AgentErrorResponseMessage {
    return cast(JSON.parse(json), r('AgentErrorResponseMessage'));
  }

  public static agentErrorResponseMessageToJson(value: AgentErrorResponseMessage): string {
    return JSON.stringify(uncast(value, r('AgentErrorResponseMessage')), null, 2);
  }

  public static toAgentRequestMessage(json: string): AgentRequestMessage {
    return cast(JSON.parse(json), r('AgentRequestMessage'));
  }

  public static agentRequestMessageToJson(value: AgentRequestMessage): string {
    return JSON.stringify(uncast(value, r('AgentRequestMessage')), null, 2);
  }

  public static toAgentResponseMessage(json: string): AgentResponseMessage {
    return cast(JSON.parse(json), r('AgentResponseMessage'));
  }

  public static agentResponseMessageToJson(value: AgentResponseMessage): string {
    return JSON.stringify(uncast(value, r('AgentResponseMessage')), null, 2);
  }

  public static toBridgeErrorResponseMessage(json: string): BridgeErrorResponseMessage {
    return cast(JSON.parse(json), r('BridgeErrorResponseMessage'));
  }

  public static bridgeErrorResponseMessageToJson(value: BridgeErrorResponseMessage): string {
    return JSON.stringify(uncast(value, r('BridgeErrorResponseMessage')), null, 2);
  }

  public static toBridgeRequestMessage(json: string): BridgeRequestMessage {
    return cast(JSON.parse(json), r('BridgeRequestMessage'));
  }

  public static bridgeRequestMessageToJson(value: BridgeRequestMessage): string {
    return JSON.stringify(uncast(value, r('BridgeRequestMessage')), null, 2);
  }

  public static toBridgeResponseMessage(json: string): BridgeResponseMessage {
    return cast(JSON.parse(json), r('BridgeResponseMessage'));
  }

  public static bridgeResponseMessageToJson(value: BridgeResponseMessage): string {
    return JSON.stringify(uncast(value, r('BridgeResponseMessage')), null, 2);
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

  public static toBridgingCommons(json: string): { [key: string]: any } {
    return cast(JSON.parse(json), m('any'));
  }

  public static bridgingCommonsToJson(value: { [key: string]: any }): string {
    return JSON.stringify(uncast(value, m('any')), null, 2);
  }

  public static toConnectionStepMessage(json: string): ConnectionStepMessage {
    return cast(JSON.parse(json), r('ConnectionStepMessage'));
  }

  public static connectionStepMessageToJson(value: ConnectionStepMessage): string {
    return JSON.stringify(uncast(value, r('ConnectionStepMessage')), null, 2);
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

  public static toFindInstancesAgentErrorResponse(json: string): FindInstancesAgentErrorResponse {
    return cast(JSON.parse(json), r('FindInstancesAgentErrorResponse'));
  }

  public static findInstancesAgentErrorResponseToJson(value: FindInstancesAgentErrorResponse): string {
    return JSON.stringify(uncast(value, r('FindInstancesAgentErrorResponse')), null, 2);
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

  public static toFindInstancesBridgeErrorResponse(json: string): FindInstancesBridgeErrorResponse {
    return cast(JSON.parse(json), r('FindInstancesBridgeErrorResponse'));
  }

  public static findInstancesBridgeErrorResponseToJson(value: FindInstancesBridgeErrorResponse): string {
    return JSON.stringify(uncast(value, r('FindInstancesBridgeErrorResponse')), null, 2);
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

  public static toFindIntentAgentErrorResponse(json: string): FindIntentAgentErrorResponse {
    return cast(JSON.parse(json), r('FindIntentAgentErrorResponse'));
  }

  public static findIntentAgentErrorResponseToJson(value: FindIntentAgentErrorResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentAgentErrorResponse')), null, 2);
  }

  public static toFindIntentsAgentRequest(json: string): FindIntentsAgentRequest {
    return cast(JSON.parse(json), r('FindIntentsAgentRequest'));
  }

  public static findIntentsAgentRequestToJson(value: FindIntentsAgentRequest): string {
    return JSON.stringify(uncast(value, r('FindIntentsAgentRequest')), null, 2);
  }

  public static toFindIntentAgentResponse(json: string): FindIntentAgentResponse {
    return cast(JSON.parse(json), r('FindIntentAgentResponse'));
  }

  public static findIntentAgentResponseToJson(value: FindIntentAgentResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentAgentResponse')), null, 2);
  }

  public static toFindIntentBridgeErrorResponse(json: string): FindIntentBridgeErrorResponse {
    return cast(JSON.parse(json), r('FindIntentBridgeErrorResponse'));
  }

  public static findIntentBridgeErrorResponseToJson(value: FindIntentBridgeErrorResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentBridgeErrorResponse')), null, 2);
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

  public static toFindIntentsByContextAgentErrorResponse(json: string): FindIntentsByContextAgentErrorResponse {
    return cast(JSON.parse(json), r('FindIntentsByContextAgentErrorResponse'));
  }

  public static findIntentsByContextAgentErrorResponseToJson(value: FindIntentsByContextAgentErrorResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentsByContextAgentErrorResponse')), null, 2);
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

  public static toFindIntentsByContextBridgeErrorResponse(json: string): FindIntentsByContextBridgeErrorResponse {
    return cast(JSON.parse(json), r('FindIntentsByContextBridgeErrorResponse'));
  }

  public static findIntentsByContextBridgeErrorResponseToJson(value: FindIntentsByContextBridgeErrorResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentsByContextBridgeErrorResponse')), null, 2);
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

  public static toGetAppMetadataAgentErrorResponse(json: string): GetAppMetadataAgentErrorResponse {
    return cast(JSON.parse(json), r('GetAppMetadataAgentErrorResponse'));
  }

  public static getAppMetadataAgentErrorResponseToJson(value: GetAppMetadataAgentErrorResponse): string {
    return JSON.stringify(uncast(value, r('GetAppMetadataAgentErrorResponse')), null, 2);
  }

  public static toGetAppMetadataAgentRequest(json: string): GetAppMetadataAgentRequest {
    return cast(JSON.parse(json), r('GetAppMetadataAgentRequest'));
  }

  public static getAppMetadataAgentRequestToJson(value: GetAppMetadataAgentRequest): string {
    return JSON.stringify(uncast(value, r('GetAppMetadataAgentRequest')), null, 2);
  }

  public static toGetAppMetadataAgentResponse(json: string): GetAppMetadataAgentResponse {
    return cast(JSON.parse(json), r('GetAppMetadataAgentResponse'));
  }

  public static getAppMetadataAgentResponseToJson(value: GetAppMetadataAgentResponse): string {
    return JSON.stringify(uncast(value, r('GetAppMetadataAgentResponse')), null, 2);
  }

  public static toGetAppMetadataBridgeErrorResponse(json: string): GetAppMetadataBridgeErrorResponse {
    return cast(JSON.parse(json), r('GetAppMetadataBridgeErrorResponse'));
  }

  public static getAppMetadataBridgeErrorResponseToJson(value: GetAppMetadataBridgeErrorResponse): string {
    return JSON.stringify(uncast(value, r('GetAppMetadataBridgeErrorResponse')), null, 2);
  }

  public static toGetAppMetadataBridgeRequest(json: string): GetAppMetadataBridgeRequest {
    return cast(JSON.parse(json), r('GetAppMetadataBridgeRequest'));
  }

  public static getAppMetadataBridgeRequestToJson(value: GetAppMetadataBridgeRequest): string {
    return JSON.stringify(uncast(value, r('GetAppMetadataBridgeRequest')), null, 2);
  }

  public static toGetAppMetadataBridgeResponse(json: string): GetAppMetadataBridgeResponse {
    return cast(JSON.parse(json), r('GetAppMetadataBridgeResponse'));
  }

  public static getAppMetadataBridgeResponseToJson(value: GetAppMetadataBridgeResponse): string {
    return JSON.stringify(uncast(value, r('GetAppMetadataBridgeResponse')), null, 2);
  }

  public static toOpenAgentErrorResponse(json: string): OpenAgentErrorResponse {
    return cast(JSON.parse(json), r('OpenAgentErrorResponse'));
  }

  public static openAgentErrorResponseToJson(value: OpenAgentErrorResponse): string {
    return JSON.stringify(uncast(value, r('OpenAgentErrorResponse')), null, 2);
  }

  public static toOpenAgentRequest(json: string): OpenAgentRequest {
    return cast(JSON.parse(json), r('OpenAgentRequest'));
  }

  public static openAgentRequestToJson(value: OpenAgentRequest): string {
    return JSON.stringify(uncast(value, r('OpenAgentRequest')), null, 2);
  }

  public static toOpenAgentResponse(json: string): OpenAgentResponse {
    return cast(JSON.parse(json), r('OpenAgentResponse'));
  }

  public static openAgentResponseToJson(value: OpenAgentResponse): string {
    return JSON.stringify(uncast(value, r('OpenAgentResponse')), null, 2);
  }

  public static toOpenBridgeErrorResponse(json: string): OpenBridgeErrorResponse {
    return cast(JSON.parse(json), r('OpenBridgeErrorResponse'));
  }

  public static openBridgeErrorResponseToJson(value: OpenBridgeErrorResponse): string {
    return JSON.stringify(uncast(value, r('OpenBridgeErrorResponse')), null, 2);
  }

  public static toOpenBridgeRequest(json: string): OpenBridgeRequest {
    return cast(JSON.parse(json), r('OpenBridgeRequest'));
  }

  public static openBridgeRequestToJson(value: OpenBridgeRequest): string {
    return JSON.stringify(uncast(value, r('OpenBridgeRequest')), null, 2);
  }

  public static toOpenBridgeResponse(json: string): OpenBridgeResponse {
    return cast(JSON.parse(json), r('OpenBridgeResponse'));
  }

  public static openBridgeResponseToJson(value: OpenBridgeResponse): string {
    return JSON.stringify(uncast(value, r('OpenBridgeResponse')), null, 2);
  }

  public static toPrivateChannelBroadcastAgentRequest(json: string): PrivateChannelBroadcastAgentRequest {
    return cast(JSON.parse(json), r('PrivateChannelBroadcastAgentRequest'));
  }

  public static privateChannelBroadcastAgentRequestToJson(value: PrivateChannelBroadcastAgentRequest): string {
    return JSON.stringify(uncast(value, r('PrivateChannelBroadcastAgentRequest')), null, 2);
  }

  public static toPrivateChannelBroadcastBridgeRequest(json: string): PrivateChannelBroadcastBridgeRequest {
    return cast(JSON.parse(json), r('PrivateChannelBroadcastBridgeRequest'));
  }

  public static privateChannelBroadcastBridgeRequestToJson(value: PrivateChannelBroadcastBridgeRequest): string {
    return JSON.stringify(uncast(value, r('PrivateChannelBroadcastBridgeRequest')), null, 2);
  }

  public static toPrivateChannelEventListenerAddedAgentRequest(
    json: string
  ): PrivateChannelEventListenerAddedAgentRequest {
    return cast(JSON.parse(json), r('PrivateChannelEventListenerAddedAgentRequest'));
  }

  public static privateChannelEventListenerAddedAgentRequestToJson(
    value: PrivateChannelEventListenerAddedAgentRequest
  ): string {
    return JSON.stringify(uncast(value, r('PrivateChannelEventListenerAddedAgentRequest')), null, 2);
  }

  public static toPrivateChannelEventListenerAddedBridgeRequest(
    json: string
  ): PrivateChannelEventListenerAddedBridgeRequest {
    return cast(JSON.parse(json), r('PrivateChannelEventListenerAddedBridgeRequest'));
  }

  public static privateChannelEventListenerAddedBridgeRequestToJson(
    value: PrivateChannelEventListenerAddedBridgeRequest
  ): string {
    return JSON.stringify(uncast(value, r('PrivateChannelEventListenerAddedBridgeRequest')), null, 2);
  }

  public static toPrivateChannelEventListenerRemovedAgentRequest(
    json: string
  ): PrivateChannelEventListenerRemovedAgentRequest {
    return cast(JSON.parse(json), r('PrivateChannelEventListenerRemovedAgentRequest'));
  }

  public static privateChannelEventListenerRemovedAgentRequestToJson(
    value: PrivateChannelEventListenerRemovedAgentRequest
  ): string {
    return JSON.stringify(uncast(value, r('PrivateChannelEventListenerRemovedAgentRequest')), null, 2);
  }

  public static toPrivateChannelEventListenerRemovedBridgeRequest(
    json: string
  ): PrivateChannelEventListenerRemovedBridgeRequest {
    return cast(JSON.parse(json), r('PrivateChannelEventListenerRemovedBridgeRequest'));
  }

  public static privateChannelEventListenerRemovedBridgeRequestToJson(
    value: PrivateChannelEventListenerRemovedBridgeRequest
  ): string {
    return JSON.stringify(uncast(value, r('PrivateChannelEventListenerRemovedBridgeRequest')), null, 2);
  }

  public static toPrivateChannelOnAddContextListenerAgentRequest(
    json: string
  ): PrivateChannelOnAddContextListenerAgentRequest {
    return cast(JSON.parse(json), r('PrivateChannelOnAddContextListenerAgentRequest'));
  }

  public static privateChannelOnAddContextListenerAgentRequestToJson(
    value: PrivateChannelOnAddContextListenerAgentRequest
  ): string {
    return JSON.stringify(uncast(value, r('PrivateChannelOnAddContextListenerAgentRequest')), null, 2);
  }

  public static toPrivateChannelOnAddContextListenerBridgeRequest(
    json: string
  ): PrivateChannelOnAddContextListenerBridgeRequest {
    return cast(JSON.parse(json), r('PrivateChannelOnAddContextListenerBridgeRequest'));
  }

  public static privateChannelOnAddContextListenerBridgeRequestToJson(
    value: PrivateChannelOnAddContextListenerBridgeRequest
  ): string {
    return JSON.stringify(uncast(value, r('PrivateChannelOnAddContextListenerBridgeRequest')), null, 2);
  }

  public static toPrivateChannelOnDisconnectAgentRequest(json: string): PrivateChannelOnDisconnectAgentRequest {
    return cast(JSON.parse(json), r('PrivateChannelOnDisconnectAgentRequest'));
  }

  public static privateChannelOnDisconnectAgentRequestToJson(value: PrivateChannelOnDisconnectAgentRequest): string {
    return JSON.stringify(uncast(value, r('PrivateChannelOnDisconnectAgentRequest')), null, 2);
  }

  public static toPrivateChannelOnDisconnectBridgeRequest(json: string): PrivateChannelOnDisconnectBridgeRequest {
    return cast(JSON.parse(json), r('PrivateChannelOnDisconnectBridgeRequest'));
  }

  public static privateChannelOnDisconnectBridgeRequestToJson(value: PrivateChannelOnDisconnectBridgeRequest): string {
    return JSON.stringify(uncast(value, r('PrivateChannelOnDisconnectBridgeRequest')), null, 2);
  }

  public static toPrivateChannelOnUnsubscribeAgentRequest(json: string): PrivateChannelOnUnsubscribeAgentRequest {
    return cast(JSON.parse(json), r('PrivateChannelOnUnsubscribeAgentRequest'));
  }

  public static privateChannelOnUnsubscribeAgentRequestToJson(value: PrivateChannelOnUnsubscribeAgentRequest): string {
    return JSON.stringify(uncast(value, r('PrivateChannelOnUnsubscribeAgentRequest')), null, 2);
  }

  public static toPrivateChannelOnUnsubscribeBridgeRequest(json: string): PrivateChannelOnUnsubscribeBridgeRequest {
    return cast(JSON.parse(json), r('PrivateChannelOnUnsubscribeBridgeRequest'));
  }

  public static privateChannelOnUnsubscribeBridgeRequestToJson(
    value: PrivateChannelOnUnsubscribeBridgeRequest
  ): string {
    return JSON.stringify(uncast(value, r('PrivateChannelOnUnsubscribeBridgeRequest')), null, 2);
  }

  public static toRaiseIntentAgentErrorResponse(json: string): RaiseIntentAgentErrorResponse {
    return cast(JSON.parse(json), r('RaiseIntentAgentErrorResponse'));
  }

  public static raiseIntentAgentErrorResponseToJson(value: RaiseIntentAgentErrorResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentAgentErrorResponse')), null, 2);
  }

  public static toRaiseIntentAgentRequest(json: string): RaiseIntentAgentRequest {
    return cast(JSON.parse(json), r('RaiseIntentAgentRequest'));
  }

  public static raiseIntentAgentRequestToJson(value: RaiseIntentAgentRequest): string {
    return JSON.stringify(uncast(value, r('RaiseIntentAgentRequest')), null, 2);
  }

  public static toRaiseIntentAgentResponse(json: string): RaiseIntentAgentResponse {
    return cast(JSON.parse(json), r('RaiseIntentAgentResponse'));
  }

  public static raiseIntentAgentResponseToJson(value: RaiseIntentAgentResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentAgentResponse')), null, 2);
  }

  public static toRaiseIntentBridgeErrorResponse(json: string): RaiseIntentBridgeErrorResponse {
    return cast(JSON.parse(json), r('RaiseIntentBridgeErrorResponse'));
  }

  public static raiseIntentBridgeErrorResponseToJson(value: RaiseIntentBridgeErrorResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentBridgeErrorResponse')), null, 2);
  }

  public static toRaiseIntentBridgeRequest(json: string): RaiseIntentBridgeRequest {
    return cast(JSON.parse(json), r('RaiseIntentBridgeRequest'));
  }

  public static raiseIntentBridgeRequestToJson(value: RaiseIntentBridgeRequest): string {
    return JSON.stringify(uncast(value, r('RaiseIntentBridgeRequest')), null, 2);
  }

  public static toRaiseIntentBridgeResponse(json: string): RaiseIntentBridgeResponse {
    return cast(JSON.parse(json), r('RaiseIntentBridgeResponse'));
  }

  public static raiseIntentBridgeResponseToJson(value: RaiseIntentBridgeResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentBridgeResponse')), null, 2);
  }

  public static toRaiseIntentResultAgentErrorResponse(json: string): RaiseIntentResultAgentErrorResponse {
    return cast(JSON.parse(json), r('RaiseIntentResultAgentErrorResponse'));
  }

  public static raiseIntentResultAgentErrorResponseToJson(value: RaiseIntentResultAgentErrorResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentResultAgentErrorResponse')), null, 2);
  }

  public static toRaiseIntentResultAgentResponse(json: string): RaiseIntentResultAgentResponse {
    return cast(JSON.parse(json), r('RaiseIntentResultAgentResponse'));
  }

  public static raiseIntentResultAgentResponseToJson(value: RaiseIntentResultAgentResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentResultAgentResponse')), null, 2);
  }

  public static toRaiseIntentResultBridgeErrorResponse(json: string): RaiseIntentResultBridgeErrorResponse {
    return cast(JSON.parse(json), r('RaiseIntentResultBridgeErrorResponse'));
  }

  public static raiseIntentResultBridgeErrorResponseToJson(value: RaiseIntentResultBridgeErrorResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentResultBridgeErrorResponse')), null, 2);
  }

  public static toRaiseIntentResultBridgeResponse(json: string): RaiseIntentResultBridgeResponse {
    return cast(JSON.parse(json), r('RaiseIntentResultBridgeResponse'));
  }

  public static raiseIntentResultBridgeResponseToJson(value: RaiseIntentResultBridgeResponse): string {
    return JSON.stringify(uncast(value, r('RaiseIntentResultBridgeResponse')), null, 2);
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
  AgentErrorResponseMessage: o(
    [
      { json: 'meta', js: 'meta', typ: r('AgentResponseMetadata') },
      { json: 'payload', js: 'payload', typ: r('ErrorResponseMessagePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  AgentResponseMetadata: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  DesktopAgentIdentifier: o([{ json: 'desktopAgent', js: 'desktopAgent', typ: '' }], 'any'),
  ErrorResponseMessagePayload: o([{ json: 'error', js: 'error', typ: r('ResponseErrorDetail') }], 'any'),
  AgentRequestMessage: o(
    [
      { json: 'meta', js: 'meta', typ: r('AgentRequestMetadata') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  AgentRequestMetadata: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('BridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceIdentifier')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  BridgeParticipantIdentifier: o(
    [
      { json: 'appId', js: 'appId', typ: u(undefined, '') },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  SourceIdentifier: o(
    [
      { json: 'appId', js: 'appId', typ: u(undefined, '') },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  AgentResponseMessage: o(
    [
      { json: 'meta', js: 'meta', typ: r('AgentResponseMetadata') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  BridgeErrorResponseMessage: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeErrorResponseMessageMeta') },
      { json: 'payload', js: 'payload', typ: r('ResponseErrorMessagePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  BridgeErrorResponseMessageMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: a(r('ResponseErrorDetail')) },
      { json: 'errorSources', js: 'errorSources', typ: a(r('DesktopAgentIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  ResponseErrorMessagePayload: o([{ json: 'error', js: 'error', typ: u(undefined, r('ResponseErrorDetail')) }], 'any'),
  BridgeRequestMessage: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeRequestMetadata') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  BridgeRequestMetadata: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('BridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('BridgeSourceIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  BridgeSourceIdentifier: o(
    [
      { json: 'desktopAgent', js: 'desktopAgent', typ: '' },
      { json: 'appId', js: 'appId', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  BridgeResponseMessage: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeResponseMessageMeta') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  BridgeResponseMessageMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a(r('ResponseErrorDetail'))) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  BroadcastAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('BroadcastAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('BroadcastAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  BroadcastAgentRequestMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
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
  BroadcastAgentRequestPayload: o(
    [
      { json: 'channelId', js: 'channelId', typ: '' },
      { json: 'context', js: 'context', typ: r('ContextElement') },
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
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  MetaSource: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'desktopAgent', js: 'desktopAgent', typ: '' },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  BroadcastBridgeRequestPayload: o(
    [
      { json: 'channelId', js: 'channelId', typ: '' },
      { json: 'context', js: 'context', typ: r('ContextElement') },
    ],
    false
  ),
  ConnectionStepMessage: o(
    [
      { json: 'meta', js: 'meta', typ: r('ConnectionStepMetadata') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: r('ConnectionStepMessageType') },
    ],
    false
  ),
  ConnectionStepMetadata: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: u(undefined, '') },
      { json: 'responseUuid', js: 'responseUuid', typ: u(undefined, '') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  ConnectionStep2Hello: o(
    [
      { json: 'meta', js: 'meta', typ: r('ConnectionStep2HelloMeta') },
      { json: 'payload', js: 'payload', typ: r('ConnectionStep2HelloPayload') },
      { json: 'type', js: 'type', typ: r('ConnectionStepMessageType') },
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
      { json: 'type', js: 'type', typ: r('ConnectionStepMessageType') },
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
      { json: 'implementationMetadata', js: 'implementationMetadata', typ: r('ImplementationMetadataElement') },
      { json: 'requestedName', js: 'requestedName', typ: '' },
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
  ImplementationMetadataOptionalFeatures: o(
    [
      { json: 'DesktopAgentBridging', js: 'DesktopAgentBridging', typ: true },
      { json: 'OriginatingAppMetadata', js: 'OriginatingAppMetadata', typ: true },
      { json: 'UserChannelMembershipAPIs', js: 'UserChannelMembershipAPIs', typ: true },
    ],
    false
  ),
  ConnectionStep4AuthenticationFailed: o(
    [
      { json: 'meta', js: 'meta', typ: r('ConnectionStep4AuthenticationFailedMeta') },
      { json: 'payload', js: 'payload', typ: r('ConnectionStep4AuthenticationFailedPayload') },
      { json: 'type', js: 'type', typ: r('ConnectionStepMessageType') },
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
      { json: 'type', js: 'type', typ: r('ConnectionStepMessageType') },
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
  FindInstancesAgentErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindInstancesAgentErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindInstancesAgentErrorResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  FindInstancesAgentErrorResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindInstancesAgentErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
  FindInstancesAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindInstancesAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('FindInstancesAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  FindInstancesAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('PurpleBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PurpleBridgeParticipantIdentifier: o(
    [
      { json: 'desktopAgent', js: 'desktopAgent', typ: '' },
      { json: 'appId', js: 'appId', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  FindInstancesAgentRequestPayload: o([{ json: 'app', js: 'app', typ: r('AppIdentifier') }], false),
  AppIdentifier: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  FindInstancesAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindInstancesAgentResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindInstancesAgentResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  FindInstancesAgentResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindInstancesAgentResponsePayload: o(
    [{ json: 'appIdentifiers', js: 'appIdentifiers', typ: a(r('AppMetadata')) }],
    false
  ),
  AppMetadata: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'description', js: 'description', typ: u(undefined, '') },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'icons', js: 'icons', typ: u(undefined, a(r('Icon'))) },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
      { json: 'instanceMetadata', js: 'instanceMetadata', typ: u(undefined, m('any')) },
      { json: 'name', js: 'name', typ: u(undefined, '') },
      { json: 'resultType', js: 'resultType', typ: u(undefined, u(null, '')) },
      { json: 'screenshots', js: 'screenshots', typ: u(undefined, a(r('Image'))) },
      { json: 'title', js: 'title', typ: u(undefined, '') },
      { json: 'tooltip', js: 'tooltip', typ: u(undefined, '') },
      { json: 'version', js: 'version', typ: u(undefined, '') },
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
  FindInstancesBridgeErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindInstancesBridgeErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindInstancesBridgeErrorResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindInstancesBridgeErrorResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: a(r('ResponseErrorDetail')) },
      { json: 'errorSources', js: 'errorSources', typ: a(r('DesktopAgentIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindInstancesBridgeErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
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
      { json: 'destination', js: 'destination', typ: u(undefined, r('PurpleBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindInstancesBridgeRequestPayload: o([{ json: 'app', js: 'app', typ: r('AppIdentifier') }], false),
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
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a(r('ResponseErrorDetail'))) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindInstancesBridgeResponsePayload: o(
    [{ json: 'appIdentifiers', js: 'appIdentifiers', typ: a(r('AppMetadata')) }],
    false
  ),
  FindIntentAgentErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentAgentErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentAgentErrorResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  FindIntentAgentErrorResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindIntentAgentErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
  FindIntentsAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentsAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentsAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  FindIntentsAgentRequestMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceIdentifier')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'destination', js: 'destination', typ: u(undefined, r('BridgeParticipantIdentifier')) },
    ],
    false
  ),
  FindIntentsAgentRequestPayload: o(
    [
      { json: 'context', js: 'context', typ: r('ContextElement') },
      { json: 'intent', js: 'intent', typ: '' },
    ],
    false
  ),
  FindIntentAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentAgentResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentAgentResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  FindIntentAgentResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindIntentAgentResponsePayload: o([{ json: 'appIntent', js: 'appIntent', typ: r('AppIntent') }], false),
  AppIntent: o(
    [
      { json: 'apps', js: 'apps', typ: a(r('AppMetadata')) },
      { json: 'intent', js: 'intent', typ: r('IntentMetadata') },
    ],
    false
  ),
  IntentMetadata: o(
    [
      { json: 'displayName', js: 'displayName', typ: '' },
      { json: 'name', js: 'name', typ: '' },
    ],
    false
  ),
  FindIntentBridgeErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentBridgeErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentBridgeErrorResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentBridgeErrorResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: a(r('ResponseErrorDetail')) },
      { json: 'errorSources', js: 'errorSources', typ: a(r('DesktopAgentIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindIntentBridgeErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
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
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('BridgeSourceIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'destination', js: 'destination', typ: u(undefined, r('BridgeParticipantIdentifier')) },
    ],
    false
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
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a(r('ResponseErrorDetail'))) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindIntentBridgeResponsePayload: o([{ json: 'appIntent', js: 'appIntent', typ: r('AppIntent') }], false),
  FindIntentsByContextAgentErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentsByContextAgentErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentsByContextAgentErrorResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  FindIntentsByContextAgentErrorResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindIntentsByContextAgentErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
  FindIntentsByContextAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentsByContextAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentsByContextAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  FindIntentsByContextAgentRequestMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'destination', js: 'destination', typ: u(undefined, r('BridgeParticipantIdentifier')) },
    ],
    false
  ),
  FindIntentsByContextAgentRequestPayload: o([{ json: 'context', js: 'context', typ: r('ContextElement') }], false),
  FindIntentsByContextAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentsByContextAgentResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentsByContextAgentResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  FindIntentsByContextAgentResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindIntentsByContextAgentResponsePayload: o(
    [{ json: 'appIntents', js: 'appIntents', typ: a(r('AppIntent')) }],
    false
  ),
  FindIntentsByContextBridgeErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentsByContextBridgeErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentsByContextBridgeErrorResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentsByContextBridgeErrorResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: a(r('ResponseErrorDetail')) },
      { json: 'errorSources', js: 'errorSources', typ: a(r('DesktopAgentIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindIntentsByContextBridgeErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
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
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'destination', js: 'destination', typ: u(undefined, r('BridgeParticipantIdentifier')) },
    ],
    false
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
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a(r('ResponseErrorDetail'))) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FindIntentsByContextBridgeResponsePayload: o(
    [{ json: 'appIntents', js: 'appIntents', typ: a(r('AppIntent')) }],
    false
  ),
  GetAppMetadataAgentErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('GetAppMetadataAgentErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataAgentErrorResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  GetAppMetadataAgentErrorResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  GetAppMetadataAgentErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
  GetAppMetadataAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('GetAppMetadataAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  GetAppMetadataAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('PurpleBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  GetAppMetadataAgentRequestPayload: o([{ json: 'app', js: 'app', typ: r('AppIdentifier') }], false),
  GetAppMetadataAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('GetAppMetadataAgentResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataAgentResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  GetAppMetadataAgentResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  GetAppMetadataAgentResponsePayload: o([{ json: 'appMetadata', js: 'appMetadata', typ: r('AppMetadata') }], false),
  GetAppMetadataBridgeErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('GetAppMetadataBridgeErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataBridgeErrorResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  GetAppMetadataBridgeErrorResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: a(r('ResponseErrorDetail')) },
      { json: 'errorSources', js: 'errorSources', typ: a(r('DesktopAgentIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  GetAppMetadataBridgeErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
  GetAppMetadataBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('GetAppMetadataBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  GetAppMetadataBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('PurpleBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  GetAppMetadataBridgeRequestPayload: o([{ json: 'app', js: 'app', typ: r('AppIdentifier') }], false),
  GetAppMetadataBridgeResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('GetAppMetadataBridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataBridgeResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  GetAppMetadataBridgeResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a(r('ResponseErrorDetail'))) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  GetAppMetadataBridgeResponsePayload: o([{ json: 'appMetadata', js: 'appMetadata', typ: r('AppMetadata') }], false),
  OpenAgentErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('OpenAgentErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenAgentErrorResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  OpenAgentErrorResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  OpenAgentErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('OpenErrorMessage') }], false),
  OpenAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('OpenAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  OpenAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('PurpleBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  OpenAgentRequestPayload: o(
    [
      { json: 'app', js: 'app', typ: r('AppToOpen') },
      { json: 'context', js: 'context', typ: u(undefined, r('ContextElement')) },
    ],
    false
  ),
  AppToOpen: o(
    [
      { json: 'desktopAgent', js: 'desktopAgent', typ: '' },
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  OpenAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('OpenAgentResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenAgentResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  OpenAgentResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  OpenAgentResponsePayload: o([{ json: 'appIdentifier', js: 'appIdentifier', typ: r('AppIdentifier') }], false),
  OpenBridgeErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('OpenBridgeErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenBridgeErrorResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  OpenBridgeErrorResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: a(r('ResponseErrorDetail')) },
      { json: 'errorSources', js: 'errorSources', typ: a(r('DesktopAgentIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  OpenBridgeErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('OpenErrorMessage') }], false),
  OpenBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('OpenBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  OpenBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('PurpleBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  OpenBridgeRequestPayload: o(
    [
      { json: 'app', js: 'app', typ: r('AppToOpen') },
      { json: 'context', js: 'context', typ: u(undefined, r('ContextElement')) },
    ],
    false
  ),
  OpenBridgeResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('OpenBridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenBridgeResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  OpenBridgeResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a(r('ResponseErrorDetail'))) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  OpenBridgeResponsePayload: o([{ json: 'appIdentifier', js: 'appIdentifier', typ: r('AppIdentifier') }], false),
  PrivateChannelBroadcastAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelBroadcastAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelBroadcastAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  PrivateChannelBroadcastAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  FluffyBridgeParticipantIdentifier: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    'any'
  ),
  PrivateChannelBroadcastAgentRequestPayload: o(
    [
      { json: 'channelId', js: 'channelId', typ: '' },
      { json: 'context', js: 'context', typ: r('ContextElement') },
    ],
    false
  ),
  PrivateChannelBroadcastBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelBroadcastBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelBroadcastBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelBroadcastBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelBroadcastBridgeRequestPayload: o(
    [
      { json: 'channelId', js: 'channelId', typ: '' },
      { json: 'context', js: 'context', typ: r('ContextElement') },
    ],
    false
  ),
  PrivateChannelEventListenerAddedAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelEventListenerAddedAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelEventListenerAddedAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  PrivateChannelEventListenerAddedAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelEventListenerAddedAgentRequestPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'context', js: 'context', typ: '' },
    ],
    false
  ),
  PrivateChannelEventListenerAddedBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelEventListenerAddedBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelEventListenerAddedBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelEventListenerAddedBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelEventListenerAddedBridgeRequestPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'context', js: 'context', typ: '' },
    ],
    false
  ),
  PrivateChannelEventListenerRemovedAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelEventListenerRemovedAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelEventListenerRemovedAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  PrivateChannelEventListenerRemovedAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelEventListenerRemovedAgentRequestPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'listenerType', js: 'listenerType', typ: '' },
    ],
    false
  ),
  PrivateChannelEventListenerRemovedBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelEventListenerRemovedBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelEventListenerRemovedBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelEventListenerRemovedBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelEventListenerRemovedBridgeRequestPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'listenerType', js: 'listenerType', typ: '' },
    ],
    false
  ),
  PrivateChannelOnAddContextListenerAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelOnAddContextListenerAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelOnAddContextListenerAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  PrivateChannelOnAddContextListenerAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelOnAddContextListenerAgentRequestPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'contextType', js: 'contextType', typ: '' },
    ],
    false
  ),
  PrivateChannelOnAddContextListenerBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelOnAddContextListenerBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelOnAddContextListenerBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelOnAddContextListenerBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelOnAddContextListenerBridgeRequestPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'contextType', js: 'contextType', typ: '' },
    ],
    false
  ),
  PrivateChannelOnDisconnectAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelOnDisconnectAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelOnDisconnectAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  PrivateChannelOnDisconnectAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelOnDisconnectAgentRequestPayload: o([{ json: 'channel', js: 'channel', typ: '' }], false),
  PrivateChannelOnDisconnectBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelOnDisconnectBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelOnDisconnectBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  PrivateChannelOnDisconnectBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelOnDisconnectBridgeRequestPayload: o([{ json: 'channel', js: 'channel', typ: '' }], false),
  PrivateChannelOnUnsubscribeAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('PrivateChannelOnUnsubscribeAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelOnUnsubscribeAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  PrivateChannelOnUnsubscribeAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: u(undefined, r('SourceObject')) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelOnUnsubscribeAgentRequestPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'contextType', js: 'contextType', typ: '' },
    ],
    false
  ),
  PrivateChannelOnUnsubscribeBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('ERequestMetadata') },
      { json: 'payload', js: 'payload', typ: r('PrivateChannelOnUnsubscribeBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  ERequestMetadata: o(
    [
      { json: 'destination', js: 'destination', typ: u(undefined, r('FluffyBridgeParticipantIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  PrivateChannelOnUnsubscribeBridgeRequestPayload: o(
    [
      { json: 'channel', js: 'channel', typ: '' },
      { json: 'contextType', js: 'contextType', typ: '' },
    ],
    false
  ),
  RaiseIntentAgentErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentAgentErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentAgentErrorResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  RaiseIntentAgentErrorResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentAgentErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
  RaiseIntentAgentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentAgentRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentAgentRequestPayload') },
      { json: 'type', js: 'type', typ: r('RequestMessageType') },
    ],
    false
  ),
  RaiseIntentAgentRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: r('FluffyBridgeParticipantIdentifier') },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceObject') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentAgentRequestPayload: o(
    [
      { json: 'app', js: 'app', typ: r('AppIdentifier') },
      { json: 'context', js: 'context', typ: r('ContextElement') },
      { json: 'intent', js: 'intent', typ: '' },
    ],
    false
  ),
  RaiseIntentAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentAgentResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentAgentResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  RaiseIntentAgentResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentAgentResponsePayload: o(
    [{ json: 'intentResolution', js: 'intentResolution', typ: r('IntentResolution') }],
    false
  ),
  IntentResolution: o(
    [
      { json: 'intent', js: 'intent', typ: '' },
      { json: 'source', js: 'source', typ: r('AppIdentifier') },
      { json: 'version', js: 'version', typ: u(undefined, '') },
    ],
    false
  ),
  RaiseIntentBridgeErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentBridgeErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentBridgeErrorResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  RaiseIntentBridgeErrorResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: a(r('ResponseErrorDetail')) },
      { json: 'errorSources', js: 'errorSources', typ: a(r('DesktopAgentIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentBridgeErrorResponsePayload: o([{ json: 'error', js: 'error', typ: r('ErrorMessage') }], false),
  RaiseIntentBridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentBridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentBridgeRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  RaiseIntentBridgeRequestMeta: o(
    [
      { json: 'destination', js: 'destination', typ: r('FluffyBridgeParticipantIdentifier') },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('MetaSource') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentBridgeRequestPayload: o(
    [
      { json: 'app', js: 'app', typ: r('AppIdentifier') },
      { json: 'context', js: 'context', typ: r('ContextElement') },
      { json: 'intent', js: 'intent', typ: '' },
    ],
    false
  ),
  RaiseIntentBridgeResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentBridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentBridgeResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  RaiseIntentBridgeResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a(r('ResponseErrorDetail'))) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentBridgeResponsePayload: o(
    [{ json: 'intentResolution', js: 'intentResolution', typ: r('IntentResolution') }],
    false
  ),
  RaiseIntentResultAgentErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentResultAgentErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentResultAgentErrorResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  RaiseIntentResultAgentErrorResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentResultAgentErrorResponsePayload: o(
    [{ json: 'error', js: 'error', typ: r('RaiseIntentResultErrorMessage') }],
    false
  ),
  RaiseIntentResultAgentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentResultAgentResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentResultAgentResponsePayload') },
      { json: 'type', js: 'type', typ: r('ResponseMessageType') },
    ],
    false
  ),
  RaiseIntentResultAgentResponseMeta: o(
    [
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'source', js: 'source', typ: r('DesktopAgentIdentifier') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentResultAgentResponsePayload: o(
    [{ json: 'intentResult', js: 'intentResult', typ: r('IntentResult') }],
    false
  ),
  IntentResult: o(
    [
      { json: 'context', js: 'context', typ: u(undefined, r('ContextElement')) },
      { json: 'channel', js: 'channel', typ: u(undefined, r('Channel')) },
    ],
    false
  ),
  Channel: o(
    [
      { json: 'displayMetadata', js: 'displayMetadata', typ: u(undefined, r('DisplayMetadata')) },
      { json: 'id', js: 'id', typ: '' },
      { json: 'type', js: 'type', typ: r('Type') },
    ],
    false
  ),
  DisplayMetadata: o(
    [
      { json: 'color', js: 'color', typ: u(undefined, '') },
      { json: 'glyph', js: 'glyph', typ: u(undefined, '') },
      { json: 'name', js: 'name', typ: u(undefined, '') },
    ],
    false
  ),
  RaiseIntentResultBridgeErrorResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentResultBridgeErrorResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentResultBridgeErrorResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  RaiseIntentResultBridgeErrorResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: a(r('ResponseErrorDetail')) },
      { json: 'errorSources', js: 'errorSources', typ: a(r('DesktopAgentIdentifier')) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentResultBridgeErrorResponsePayload: o(
    [{ json: 'error', js: 'error', typ: r('RaiseIntentResultErrorMessage') }],
    false
  ),
  RaiseIntentResultBridgeResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('RaiseIntentResultBridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentResultBridgeResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  RaiseIntentResultBridgeResponseMeta: o(
    [
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a(r('ResponseErrorDetail'))) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'requestUuid', js: 'requestUuid', typ: '' },
      { json: 'responseUuid', js: 'responseUuid', typ: '' },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('DesktopAgentIdentifier'))) },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    false
  ),
  RaiseIntentResultBridgeResponsePayload: o(
    [{ json: 'intentResult', js: 'intentResult', typ: r('IntentResult') }],
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
  ResponseErrorDetail: [
    'AccessDenied',
    'AgentDisconnected',
    'AppNotFound',
    'AppTimeout',
    'CreationFailed',
    'DesktopAgentNotFound',
    'ErrorOnLaunch',
    'IntentDeliveryFailed',
    'IntentHandlerRejected',
    'MalformedContext',
    'MalformedMessage',
    'NoAppsFound',
    'NoChannelFound',
    'NoResultReturned',
    'NotConnectedToBridge',
    'ResolverTimeout',
    'ResolverUnavailable',
    'ResponseToBridgeTimedOut',
    'TargetAppUnavailable',
    'TargetInstanceUnavailable',
    'UserCancelledResolution',
  ],
  ResponseMessageType: [
    'findInstancesResponse',
    'findIntentResponse',
    'findIntentsByContextResponse',
    'getAppMetadataResponse',
    'openResponse',
    'raiseIntentResponse',
    'raiseIntentResultResponse',
  ],
  RequestMessageType: [
    'broadcastRequest',
    'findInstancesRequest',
    'findIntentRequest',
    'findIntentsByContextRequest',
    'getAppMetadataRequest',
    'openRequest',
    'PrivateChannel.broadcast',
    'PrivateChannel.eventListenerAdded',
    'PrivateChannel.onAddContextListener',
    'PrivateChannel.onDisconnect',
    'PrivateChannel.onUnsubscribe',
    'raiseIntentRequest',
    'raiseIntentResultResponse',
  ],
  ConnectionStepMessageType: ['authenticationFailed', 'connectedAgentsUpdate', 'handshake', 'hello'],
  ErrorMessage: [
    'AgentDisconnected',
    'DesktopAgentNotFound',
    'IntentDeliveryFailed',
    'MalformedContext',
    'MalformedMessage',
    'NoAppsFound',
    'NotConnectedToBridge',
    'ResolverTimeout',
    'ResolverUnavailable',
    'ResponseToBridgeTimedOut',
    'TargetAppUnavailable',
    'TargetInstanceUnavailable',
    'UserCancelledResolution',
  ],
  OpenErrorMessage: [
    'AgentDisconnected',
    'AppNotFound',
    'AppTimeout',
    'DesktopAgentNotFound',
    'ErrorOnLaunch',
    'MalformedContext',
    'MalformedMessage',
    'NotConnectedToBridge',
    'ResolverUnavailable',
    'ResponseToBridgeTimedOut',
  ],
  RaiseIntentResultErrorMessage: [
    'AgentDisconnected',
    'IntentHandlerRejected',
    'MalformedMessage',
    'NoResultReturned',
    'NotConnectedToBridge',
    'ResponseToBridgeTimedOut',
  ],
  Type: ['app', 'private', 'user'],
};
