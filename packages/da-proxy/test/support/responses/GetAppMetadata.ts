import { AutomaticResponse, TestMessaging } from "../TestMessaging";
import { GetAppMetadataRequest, GetAppMetadataResponse } from "@kite9/fdc3-common";

export class GetAppMetadata implements AutomaticResponse {


    filter(t: string) {
        return t == 'getAppMetadataRequest'
    }

    action(input: object, m: TestMessaging) {
        const out = this.createMetadataResponseMessage(input as GetAppMetadataRequest)

        setTimeout(() => { m.receive(out) }, 100)
        return Promise.resolve()
    }

    private createMetadataResponseMessage(m: GetAppMetadataRequest): GetAppMetadataResponse {
        return {
            meta: m.meta as any,
            type: "getAppMetadataResponse",
            payload: {
                appMetadata: {
                    appId: m.payload.app.appId,
                    name: "Metadata Name",
                    description: "Metadata Description"
                }
            }
        }
    }
}