import { AppIntent, AppIdentifier, IntentResolution, IntentHandler, Listener, ResolveError, IntentResult, IntentResolver, IntentResolutionChoice } from "@kite9/fdc3-standard";
import { BrowserTypes } from "@kite9/fdc3-schema";
import { IntentSupport } from "./IntentSupport";
import { Messaging } from "../Messaging";
import { DefaultIntentResolution } from "./DefaultIntentResolution";
import { DefaultIntentListener } from "../listeners/DefaultIntentListener";
import { DefaultChannel } from "../channels/DefaultChannel";
import { DefaultPrivateChannel } from "../channels/DefaultPrivateChannel";
import { Context } from "@kite9/fdc3-context";

type RaiseIntentForContextRequest = BrowserTypes.RaiseIntentForContextRequest
type RaiseIntentForContextResponse = BrowserTypes.RaiseIntentForContextResponse
type FindIntentResponse = BrowserTypes.FindIntentResponse
type FindIntentsByContextRequest = BrowserTypes.FindIntentsByContextRequest
type FindIntentsByContextResponse = BrowserTypes.FindIntentsByContextResponse
type RaiseIntentRequest = BrowserTypes.RaiseIntentRequest
type RaiseIntentResultResponse = BrowserTypes.RaiseIntentResultResponse
type RaiseIntentResponse = BrowserTypes.RaiseIntentResponse
type FindIntentRequest = BrowserTypes.FindIntentRequest

function convertIntentResult(m: RaiseIntentResultResponse, messaging: Messaging): Promise<IntentResult> {
    const result = m.payload.intentResult!!
    if (result.channel) {
        const c = result.channel!!;
        switch (c.type) {
            case 'private':
                return new Promise((resolve) => resolve(new DefaultPrivateChannel(messaging, c.id)))
            case 'app':
            case 'user':
            default:
                return new Promise((resolve) => resolve(new DefaultChannel(messaging, c.id, c.type, c.displayMetadata)))
        }
    } else if (result.context) {
        return new Promise((resolve) => {
            resolve(result.context)
        })
    } else {
        return new Promise((resolve) => (resolve()))
    }
}

export class DefaultIntentSupport implements IntentSupport {

    readonly messaging: Messaging
    readonly intentResolver: IntentResolver

    constructor(messaging: Messaging, intentResolver: IntentResolver) {
        this.messaging = messaging
        this.intentResolver = intentResolver
    }

    async findIntent(intent: string, context: Context, resultType: string | undefined): Promise<AppIntent> {
        const messageOut: FindIntentRequest = {
            type: "findIntentRequest",
            payload: {
                intent,
                context,
                resultType
            },
            meta: this.messaging.createMeta()
        }

        const result = await this.messaging.exchange(messageOut, "findIntentResponse") as FindIntentResponse
        const appIntent = result.payload.appIntent!!
        if (appIntent.apps.length == 0) {
            throw new Error(ResolveError.NoAppsFound)
        } else {
            return {
                intent: appIntent.intent as any /* ISSUE: 1295 */,
                apps: appIntent.apps
            }
        }
    }

    async findIntentsByContext(context: Context): Promise<AppIntent[]> {
        const messageOut: FindIntentsByContextRequest = {
            type: "findIntentsByContextRequest",
            payload: {
                context
            },
            meta: this.messaging.createMeta()
        }

        const result = await this.messaging.exchange(messageOut, "findIntentsByContextResponse") as FindIntentsByContextResponse
        const appIntents = result.payload.appIntents!!
        if (appIntents.length == 0) {
            throw new Error(ResolveError.NoAppsFound)
        } else {
            return appIntents
        }

    }

    private async createResultPromise(messageOut: RaiseIntentRequest | RaiseIntentForContextRequest): Promise<IntentResult> {
        const rp = await this.messaging.waitFor<RaiseIntentResultResponse>(m => (
            (m.type == 'raiseIntentResultResponse') &&
            (m.meta.requestUuid == messageOut.meta.requestUuid)))

        const ir = await convertIntentResult(rp, this.messaging)
        return ir
    }

    async raiseIntent(intent: string, context: Context, app: AppIdentifier): Promise<IntentResolution> {
        const meta = this.messaging.createMeta()
        const messageOut: RaiseIntentRequest = {
            type: "raiseIntentRequest",
            payload: {
                intent,
                context,
                app: app
            },
            meta: meta
        }

        var resultPromise = this.createResultPromise(messageOut)
        var response = await this.messaging.exchange(messageOut, "raiseIntentResponse", ResolveError.IntentDeliveryFailed) as RaiseIntentResponse

        if (response.payload.appIntent) {
            // we need to invoke the resolver
            const result: IntentResolutionChoice | void = await this.intentResolver.chooseIntent([response.payload.appIntent as any], context)
            if (result) {
                return this.raiseIntent(intent, context, result.appId)
            } else {
                throw new Error(ResolveError.UserCancelled)
            }
        } else {
            // single intent
            const details = response.payload.intentResolution!!
            return new DefaultIntentResolution(
                this.messaging,
                resultPromise,
                details.source,
                details.intent
            )
        }
    }

    async raiseIntentForContext(context: Context, app?: AppIdentifier | undefined): Promise<IntentResolution> {
        const messageOut: RaiseIntentForContextRequest = {
            type: "raiseIntentForContextRequest",
            payload: {
                context,
                app: app
            },
            meta: this.messaging.createMeta()
        }

        const resultPromise = this.createResultPromise(messageOut)
        const response = await this.messaging.exchange(messageOut, "raiseIntentForContextResponse", ResolveError.IntentDeliveryFailed) as RaiseIntentForContextResponse
        if (response.payload.appIntents) {
            // we need to invoke the resolver
            const result: IntentResolutionChoice | void = await this.intentResolver.chooseIntent(response.payload.appIntents as any[], context)
            if (result) {
                return this.raiseIntent(result.intent, context, result.appId)
            } else {
                throw new Error(ResolveError.UserCancelled)
            }
        } else {
            const details = response.payload.intentResolution!!
            return new DefaultIntentResolution(
                this.messaging,
                resultPromise,
                details.source,
                details.intent
            )
        }
    }

    async addIntentListener(intent: string, handler: IntentHandler): Promise<Listener> {
        const out = new DefaultIntentListener(this.messaging, intent, handler);
        await out.register()
        return out
    }

}