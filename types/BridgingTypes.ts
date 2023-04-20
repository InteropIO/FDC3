// To parse this data:
//
//   import { Convert, AppIdentifier, AppIntent, AppMetadata, Channel, ContextMetadata, DesktopAgentIdentifier, DisplayMetadata, Icon, Image, ImplementationMetadata, IntentMetadata, IntentResolution, IntentResult, BridgeRequest, BridgeResponse, BroadcastRequest, FindInstancesRequest, FindInstancesResponse, FindIntentRequest, FindIntentResponse, FindIntentsForContextRequest, FindIntentsForContextResponse, GetAppMetadataRequest, GetAppMetadataResponse, OpenRequest, OpenResponse, RaiseIntentRequest, RaiseIntentResponse, RaiseIntentResultResponse, Context } from "./file";
//
//   const appIdentifier = Convert.toAppIdentifier(json);
//   const appIntent = Convert.toAppIntent(json);
//   const appMetadata = Convert.toAppMetadata(json);
//   const channel = Convert.toChannel(json);
//   const contextMetadata = Convert.toContextMetadata(json);
//   const desktopAgentIdentifier = Convert.toDesktopAgentIdentifier(json);
//   const displayMetadata = Convert.toDisplayMetadata(json);
//   const schemasApiErrorsSchema = Convert.toSchemasApiErrorsSchema(json);
//   const icon = Convert.toIcon(json);
//   const image = Convert.toImage(json);
//   const implementationMetadata = Convert.toImplementationMetadata(json);
//   const intentMetadata = Convert.toIntentMetadata(json);
//   const intentResolution = Convert.toIntentResolution(json);
//   const intentResult = Convert.toIntentResult(json);
//   const bridgeRequest = Convert.toBridgeRequest(json);
//   const bridgeResponse = Convert.toBridgeResponse(json);
//   const broadcastRequest = Convert.toBroadcastRequest(json);
//   const findInstancesRequest = Convert.toFindInstancesRequest(json);
//   const findInstancesResponse = Convert.toFindInstancesResponse(json);
//   const findIntentRequest = Convert.toFindIntentRequest(json);
//   const findIntentResponse = Convert.toFindIntentResponse(json);
//   const findIntentsForContextRequest = Convert.toFindIntentsForContextRequest(json);
//   const findIntentsForContextResponse = Convert.toFindIntentsForContextResponse(json);
//   const getAppMetadataRequest = Convert.toGetAppMetadataRequest(json);
//   const getAppMetadataResponse = Convert.toGetAppMetadataResponse(json);
//   const openRequest = Convert.toOpenRequest(json);
//   const openResponse = Convert.toOpenResponse(json);
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
 */
export interface AppMetadataElement {
  appId: string;
  description?: string;
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
  name: string;
}

/**
 * Extends an AppIdentifier, describing an application or instance of an application.
 */
export interface AppMetadata {
  appId: string;
  description?: string;
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
  source: SourceClass;
}

/**
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls at specific applications.
 */
export interface SourceClass {
  appId: string;
  desktopAgent?: string;
  instanceId?: string;
}

/**
 * A string filled in by the Desktop Agent Bridge on receipt of a message, that represents
 * the Desktop Agent Identifier that is the source of the message.
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
 * Metadata relating to the FDC3 DesktopAgent object and its provider
 */
export interface ImplementationMetadata {
  appMetadata: AppMetadataElement;
  fdc3Version: string;
  optionalFeatures: OptionalFeatures;
  provider: string;
  providerVersion?: string;
}

export interface OptionalFeatures {
  OriginatingAppMetadata: boolean;
  UserChannelMembershipAPIs: boolean;
}

/**
 * The interface used to describe an intent within the platform.
 */
export interface IntentMetadata {
  displayName: string;
  name: string;
}

/**
 * IntentResolution provides a standard format for data returned upon resolving an intent.
 */
export interface IntentResolution {
  intent: string;
  source: SourceClass;
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

export interface BridgeRequest {
  meta: BridgeRequestMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: { [key: string]: any };
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

export interface BridgeRequestMeta {
  /**
   * Unique GUID for the request
   */
  requestGuid: string;
  source: SourceClass;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  [property: string]: any;
}

export interface BridgeResponse {
  meta?: BridgeResponseMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload?: { [key: string]: any };
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type?: string;
  [property: string]: any;
}

export interface BridgeResponseMeta {
  /**
   * Unique GUID for the request
   */
  requestGuid: string;
  source: SourceClass;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  destination?: any;
  /**
   * Array of error message strings for responses that were not returned to the bridge before
   * the timeout or because an error occurred. Should be the same length as the `errorSources
   * array and ordered the same. May be omitted if all sources responded.
   */
  errorDetails?: string[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded.
   */
  errorSources?: Identifier[];
  /**
   * Unique GUID for the response
   */
  responseGuid?: string;
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: Identifier[];
}

/**
 * Identifies an application, or instance of an application, and is used to target FDC3 API
 * calls at specific applications.
 *
 * A string filled in by the Desktop Agent Bridge on receipt of a message, that represents
 * the Desktop Agent Identifier that is the source of the message.
 */
export interface Identifier {
  appId?: string;
  desktopAgent?: string;
  instanceId?: string;
}

export interface BroadcastRequest {
  meta: BridgeRequestMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: { [key: string]: any };
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

export interface FindInstancesRequest {
  meta: FindInstancesRequestMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: FindInstancesRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

export interface FindInstancesRequestMeta {
  /**
   * Unique GUID for the request
   */
  requestGuid: string;
  source: SourceClass;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  destination?: DestinationClass;
  [property: string]: any;
}

/**
 * A string filled in by the Desktop Agent Bridge on receipt of a message, that represents
 * the Desktop Agent Identifier that is the source of the message.
 */
export interface DestinationClass {
  desktopAgent: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface FindInstancesRequestPayload {
  app: SourceClass;
}

export interface FindInstancesResponse {
  meta: BridgeResponseMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: FindInstancesResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface FindInstancesResponsePayload {
  appIdentifiers: AppMetadataElement[];
}

export interface FindIntentRequest {
  meta: BridgeRequestMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: FindIntentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface FindIntentRequestPayload {
  context: ContextObject;
  intent: string;
}

export interface ContextObject {
  id?: { [key: string]: any };
  name?: string;
  type: string;
  [property: string]: any;
}

export interface FindIntentResponse {
  meta: BridgeResponseMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: FindIntentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface FindIntentResponsePayload {
  appIntent: AppIntentElement;
  apps: AppMetadataElement[];
}

/**
 * Represents the binding of an intent to apps
 */
export interface AppIntentElement {
  apps: AppMetadataElement[];
  intent: IntentClass;
}

export interface FindIntentsForContextRequest {
  meta: BridgeRequestMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: FindIntentsForContextRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface FindIntentsForContextRequestPayload {
  context: ContextObject;
}

export interface FindIntentsForContextResponse {
  meta: FindIntentsForContextResponseMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: FindIntentsForContextResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

export interface FindIntentsForContextResponseMeta {
  /**
   * Unique GUID for the request
   */
  requestGuid: string;
  source: SourceClass;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  destination?: any;
  /**
   * Array of error message strings for responses that were not returned to the bridge before
   * the timeout or because an error occurred. Should be the same length as the `errorSources
   * array and ordered the same. May be omitted if all sources responded.
   */
  errorDetails?: string[];
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for responses that were not returned
   * to the bridge before the timeout or because an error occurred. May be omitted if all
   * sources responded.
   */
  errorSources?: Identifier[];
  /**
   * Unique GUID for the response
   */
  responseGuid?: string;
  /**
   * Array of AppIdentifiers or DesktopAgentIdentifiers for the sources that generated
   * responses to the request. Will contain a single value for individual responses and
   * multiple values for responses that were collated by the bridge. May be omitted if all
   * sources errored.
   */
  sources?: Identifier[];
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface FindIntentsForContextResponsePayload {
  appIntents?: AppIntentElement[];
  apps?: AppMetadataElement[];
}

export interface GetAppMetadataRequest {
  meta: BridgeRequestMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: GetAppMetadataRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface GetAppMetadataRequestPayload {
  app: SourceClass;
}

export interface GetAppMetadataResponse {
  meta: BridgeResponseMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: GetAppMetadataResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface GetAppMetadataResponsePayload {
  appMetadata: AppMetadataElement;
}

export interface OpenRequest {
  meta: BridgeRequestMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: OpenRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface OpenRequestPayload {
  app: SourceClass;
  context: ContextObject;
}

export interface OpenResponse {
  meta: BridgeResponseMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: OpenResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface OpenResponsePayload {
  appIdentifier: SourceClass;
}

export interface RaiseIntentRequest {
  meta: RaiseIntentRequestMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: RaiseIntentRequestPayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

export interface RaiseIntentRequestMeta {
  /**
   * Unique GUID for the request
   */
  requestGuid: string;
  source: SourceClass;
  /**
   * Timestamp at which request or response was generated
   */
  timestamp: Date;
  destination?: SourceClass;
  [property: string]: any;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface RaiseIntentRequestPayload {
  app: SourceClass;
  context: ContextObject;
}

export interface RaiseIntentResponse {
  meta: BridgeResponseMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: RaiseIntentResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface RaiseIntentResponsePayload {
  intentResolution: IntentResolutionClass;
}

/**
 * IntentResolution provides a standard format for data returned upon resolving an intent.
 */
export interface IntentResolutionClass {
  intent: string;
  source: SourceClass;
  version?: string;
}

export interface RaiseIntentResultResponse {
  meta: BridgeResponseMeta;
  /**
   * The message payload contains the arguments to FDC3 API functions for request messages,
   * and return values for response messages.
   */
  payload: RaiseIntentResultResponsePayload;
  /**
   * Identifies the type of the message and it is typically set to the FDC3 function name that
   * the message relates to, e.g. 'findIntent', with 'Request' or 'Response' appended.
   */
  type: string;
}

/**
 * The message payload contains the arguments to FDC3 API functions for request messages,
 * and return values for response messages.
 */
export interface RaiseIntentResultResponsePayload {
  intentResult: ContextObject;
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

  public static toSchemasApiErrorsSchema(json: string): any {
    return cast(JSON.parse(json), 'any');
  }

  public static schemasApiErrorsSchemaToJson(value: any): string {
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

  public static toBroadcastRequest(json: string): BroadcastRequest {
    return cast(JSON.parse(json), r('BroadcastRequest'));
  }

  public static broadcastRequestToJson(value: BroadcastRequest): string {
    return JSON.stringify(uncast(value, r('BroadcastRequest')), null, 2);
  }

  public static toFindInstancesRequest(json: string): FindInstancesRequest {
    return cast(JSON.parse(json), r('FindInstancesRequest'));
  }

  public static findInstancesRequestToJson(value: FindInstancesRequest): string {
    return JSON.stringify(uncast(value, r('FindInstancesRequest')), null, 2);
  }

  public static toFindInstancesResponse(json: string): FindInstancesResponse {
    return cast(JSON.parse(json), r('FindInstancesResponse'));
  }

  public static findInstancesResponseToJson(value: FindInstancesResponse): string {
    return JSON.stringify(uncast(value, r('FindInstancesResponse')), null, 2);
  }

  public static toFindIntentRequest(json: string): FindIntentRequest {
    return cast(JSON.parse(json), r('FindIntentRequest'));
  }

  public static findIntentRequestToJson(value: FindIntentRequest): string {
    return JSON.stringify(uncast(value, r('FindIntentRequest')), null, 2);
  }

  public static toFindIntentResponse(json: string): FindIntentResponse {
    return cast(JSON.parse(json), r('FindIntentResponse'));
  }

  public static findIntentResponseToJson(value: FindIntentResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentResponse')), null, 2);
  }

  public static toFindIntentsForContextRequest(json: string): FindIntentsForContextRequest {
    return cast(JSON.parse(json), r('FindIntentsForContextRequest'));
  }

  public static findIntentsForContextRequestToJson(value: FindIntentsForContextRequest): string {
    return JSON.stringify(uncast(value, r('FindIntentsForContextRequest')), null, 2);
  }

  public static toFindIntentsForContextResponse(json: string): FindIntentsForContextResponse {
    return cast(JSON.parse(json), r('FindIntentsForContextResponse'));
  }

  public static findIntentsForContextResponseToJson(value: FindIntentsForContextResponse): string {
    return JSON.stringify(uncast(value, r('FindIntentsForContextResponse')), null, 2);
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
    false
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
      { json: 'name', js: 'name', typ: '' },
    ],
    false
  ),
  AppMetadata: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'description', js: 'description', typ: u(undefined, '') },
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
  ContextMetadata: o([{ json: 'source', js: 'source', typ: r('SourceClass') }], false),
  SourceClass: o(
    [
      { json: 'appId', js: 'appId', typ: '' },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    false
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
      { json: 'appMetadata', js: 'appMetadata', typ: r('AppMetadataElement') },
      { json: 'fdc3Version', js: 'fdc3Version', typ: '' },
      { json: 'optionalFeatures', js: 'optionalFeatures', typ: r('OptionalFeatures') },
      { json: 'provider', js: 'provider', typ: '' },
      { json: 'providerVersion', js: 'providerVersion', typ: u(undefined, '') },
    ],
    false
  ),
  OptionalFeatures: o(
    [
      { json: 'OriginatingAppMetadata', js: 'OriginatingAppMetadata', typ: true },
      { json: 'UserChannelMembershipAPIs', js: 'UserChannelMembershipAPIs', typ: true },
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
  IntentResolution: o(
    [
      { json: 'intent', js: 'intent', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceClass') },
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
  BridgeRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  BridgeRequestMeta: o(
    [
      { json: 'requestGuid', js: 'requestGuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceClass') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
    ],
    'any'
  ),
  BridgeResponse: o(
    [
      { json: 'meta', js: 'meta', typ: u(undefined, r('BridgeResponseMeta')) },
      { json: 'payload', js: 'payload', typ: u(undefined, m('any')) },
      { json: 'type', js: 'type', typ: u(undefined, '') },
    ],
    'any'
  ),
  BridgeResponseMeta: o(
    [
      { json: 'requestGuid', js: 'requestGuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceClass') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'destination', js: 'destination', typ: u(undefined, 'any') },
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a('')) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('Identifier'))) },
      { json: 'responseGuid', js: 'responseGuid', typ: u(undefined, '') },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('Identifier'))) },
    ],
    false
  ),
  Identifier: o(
    [
      { json: 'appId', js: 'appId', typ: u(undefined, '') },
      { json: 'desktopAgent', js: 'desktopAgent', typ: u(undefined, '') },
      { json: 'instanceId', js: 'instanceId', typ: u(undefined, '') },
    ],
    false
  ),
  BroadcastRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: m('any') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindInstancesRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindInstancesRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('FindInstancesRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindInstancesRequestMeta: o(
    [
      { json: 'requestGuid', js: 'requestGuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceClass') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'destination', js: 'destination', typ: u(undefined, r('DestinationClass')) },
    ],
    'any'
  ),
  DestinationClass: o([{ json: 'desktopAgent', js: 'desktopAgent', typ: '' }], false),
  FindInstancesRequestPayload: o([{ json: 'app', js: 'app', typ: r('SourceClass') }], false),
  FindInstancesResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindInstancesResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindInstancesResponsePayload: o(
    [{ json: 'appIdentifiers', js: 'appIdentifiers', typ: a(r('AppMetadataElement')) }],
    false
  ),
  FindIntentRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentRequestPayload: o(
    [
      { json: 'context', js: 'context', typ: r('ContextObject') },
      { json: 'intent', js: 'intent', typ: '' },
    ],
    false
  ),
  ContextObject: o(
    [
      { json: 'id', js: 'id', typ: u(undefined, m('any')) },
      { json: 'name', js: 'name', typ: u(undefined, '') },
      { json: 'type', js: 'type', typ: '' },
    ],
    'any'
  ),
  FindIntentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentResponsePayload: o(
    [
      { json: 'appIntent', js: 'appIntent', typ: r('AppIntentElement') },
      { json: 'apps', js: 'apps', typ: a(r('AppMetadataElement')) },
    ],
    false
  ),
  AppIntentElement: o(
    [
      { json: 'apps', js: 'apps', typ: a(r('AppMetadataElement')) },
      { json: 'intent', js: 'intent', typ: r('IntentClass') },
    ],
    false
  ),
  FindIntentsForContextRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentsForContextRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentsForContextRequestPayload: o([{ json: 'context', js: 'context', typ: r('ContextObject') }], false),
  FindIntentsForContextResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('FindIntentsForContextResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('FindIntentsForContextResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  FindIntentsForContextResponseMeta: o(
    [
      { json: 'requestGuid', js: 'requestGuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceClass') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'destination', js: 'destination', typ: u(undefined, 'any') },
      { json: 'errorDetails', js: 'errorDetails', typ: u(undefined, a('')) },
      { json: 'errorSources', js: 'errorSources', typ: u(undefined, a(r('Identifier'))) },
      { json: 'responseGuid', js: 'responseGuid', typ: u(undefined, '') },
      { json: 'sources', js: 'sources', typ: u(undefined, a(r('Identifier'))) },
    ],
    false
  ),
  FindIntentsForContextResponsePayload: o(
    [
      { json: 'appIntents', js: 'appIntents', typ: u(undefined, a(r('AppIntentElement'))) },
      { json: 'apps', js: 'apps', typ: u(undefined, a(r('AppMetadataElement'))) },
    ],
    false
  ),
  GetAppMetadataRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  GetAppMetadataRequestPayload: o([{ json: 'app', js: 'app', typ: r('SourceClass') }], false),
  GetAppMetadataResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('GetAppMetadataResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  GetAppMetadataResponsePayload: o([{ json: 'appMetadata', js: 'appMetadata', typ: r('AppMetadataElement') }], false),
  OpenRequest: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeRequestMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenRequestPayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  OpenRequestPayload: o(
    [
      { json: 'app', js: 'app', typ: r('SourceClass') },
      { json: 'context', js: 'context', typ: r('ContextObject') },
    ],
    false
  ),
  OpenResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('OpenResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  OpenResponsePayload: o([{ json: 'appIdentifier', js: 'appIdentifier', typ: r('SourceClass') }], false),
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
      { json: 'requestGuid', js: 'requestGuid', typ: '' },
      { json: 'source', js: 'source', typ: r('SourceClass') },
      { json: 'timestamp', js: 'timestamp', typ: Date },
      { json: 'destination', js: 'destination', typ: u(undefined, r('SourceClass')) },
    ],
    'any'
  ),
  RaiseIntentRequestPayload: o(
    [
      { json: 'app', js: 'app', typ: r('SourceClass') },
      { json: 'context', js: 'context', typ: r('ContextObject') },
    ],
    false
  ),
  RaiseIntentResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
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
      { json: 'source', js: 'source', typ: r('SourceClass') },
      { json: 'version', js: 'version', typ: u(undefined, '') },
    ],
    false
  ),
  RaiseIntentResultResponse: o(
    [
      { json: 'meta', js: 'meta', typ: r('BridgeResponseMeta') },
      { json: 'payload', js: 'payload', typ: r('RaiseIntentResultResponsePayload') },
      { json: 'type', js: 'type', typ: '' },
    ],
    false
  ),
  RaiseIntentResultResponsePayload: o([{ json: 'intentResult', js: 'intentResult', typ: r('ContextObject') }], false),
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
