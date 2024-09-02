import { IntentHandler, IntentResult, AppIdentifier, Context } from "@finos/fdc3";
import { Messaging } from "../Messaging";
import { AbstractListener } from "./AbstractListener";
import { RaiseIntentResponse, IntentResultResponse, FluffyIntentResult as BridgeIntentResult, IntentEvent, IntentResultRequest } from "@kite9/fdc3-common"


export class DefaultIntentListener extends AbstractListener<IntentHandler> {

    readonly intent: string

    constructor(messaging: Messaging, intent: string, action: IntentHandler) {
        super(messaging,
            { intent },
            action,
            "addIntentListener",
            "intentListenerUnsubscribe")

        this.intent = intent
    }

    filter(m: IntentEvent): boolean {
        return (m.type == 'intentEvent') && (m.payload.intent == this.intent)
    }

    action(m: IntentEvent): void {
        this.handleIntentResponse(m)

        const done = this.handler(m.payload.context, {
            source: m.payload.originatingApp as AppIdentifier
        })

        this.handleIntentResult(done, m);
    }

    private handleIntentResponse(m: IntentEvent) {
        const out: RaiseIntentResponse = {
            type: "raiseIntentResponse",
            meta: {
                responseUuid: this.messaging.createUUID(),
                requestUuid: m.meta.eventUuid,
                timestamp: new Date()
            },
            payload: {
                intentResolution: {
                    intent: m.payload.intent,
                    source: this.messaging.getSource()
                }
            }
        };
        this.messaging.post(out);
    }

    private intentResultRequestMessage(ir: IntentResult, m: IntentEvent): IntentResultRequest {
        const out: IntentResultRequest = {
            type: "intentResultRequest",
            meta: {
                requestUuid: m.meta.eventUuid,
                timestamp: new Date()
            },
            payload: {
                intentResult: convertIntentResult(ir)
            }
        };

        return out
    }

    private handleIntentResult(done: Promise<IntentResult> | void, m: IntentEvent) {
        if (done == null) {
            // send an empty intent result response
            return this.messaging.exchange<IntentResultResponse>(this.intentResultRequestMessage(undefined, m), "intentResultResponse");
        } else {
            // respond after promise completes
            return done.then(ir => {
                return this.messaging.exchange<IntentResultResponse>(this.intentResultRequestMessage(ir, m), "intentResultResponse");
            });
        }
    }
}

function convertIntentResult(intentResult: IntentResult): BridgeIntentResult {
    if (intentResult == null) {
        return {
            // empty result
        }
    }
    switch (intentResult.type) {
        case 'user':
        case 'app':
        case 'private':
            // it's a channel
            return {
                channel: {
                    type: intentResult.type,
                    id: intentResult.id as string,
                    displayMetadata: intentResult.displayMetadata
                }
            }
        default:
            // it's a context
            return {
                context: intentResult as Context
            }
    }
}