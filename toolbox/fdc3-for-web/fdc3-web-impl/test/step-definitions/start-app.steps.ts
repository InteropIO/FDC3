import { DataTable, Then, When } from '@cucumber/cucumber'
import { CustomWorld } from '../world';
import { contextMap, createMeta } from './generic.steps';
import { matchData } from '@kite9/testing';
import { BrowserTypes } from '@kite9/fdc3-schema';

type OpenRequest = BrowserTypes.OpenRequest
type GetAppMetadataRequest = BrowserTypes.GetAppMetadataRequest
type FindInstancesRequest = BrowserTypes.FindInstancesRequest
type WebConnectionProtocol4ValidateAppIdentity = BrowserTypes.WebConnectionProtocol4ValidateAppIdentity


When('{string} is opened with connection id {string}', function (this: CustomWorld, app: string, uuid: string) {
  const meta = createMeta(this, app)
  this.sc.setInstanceDetails(uuid, {
    ...meta.source,
    connected: true
  })
  this.sc.setAppConnected(meta.source)
});

When('{string} is closed', function (this: CustomWorld, app: string) {
  const meta = createMeta(this, app)
  this.sc.disconnectApp(meta.source)
});

When('{string} sends validate', function (this: CustomWorld, uuid: string) {
  const identity = this.sc.getInstanceDetails(uuid)
  const message: WebConnectionProtocol4ValidateAppIdentity = {
    type: 'WCP4ValidateAppIdentity',
    meta: {
      connectionAttemptUuid: this.sc.createUUID(),
      timestamp: new Date()
    },
    payload: {
    } as any /* ISSUE: 1301 */
  }
  this.sc.setAppConnected(identity!!)
  this.server.receive(message, uuid)
});

When('{string} revalidates', function (this: CustomWorld, uuid: string) {

  const message: WebConnectionProtocol4ValidateAppIdentity = {
    type: 'WCP4ValidateAppIdentity',
    meta: {
      connectionAttemptUuid: this.sc.createUUID(),
      timestamp: new Date()
    },
    payload: {
      instanceUuid: uuid
    } as any /* ISSUE: 1301 */
  }

  this.server.receive(message, uuid)
});

Then('running apps will be', async function (this: CustomWorld, dataTable: DataTable) {
  const apps = await this.sc.getConnectedApps()
  matchData(this, apps, dataTable)
});

When('{string} opens app {string}', function (this: CustomWorld, appStr: string, open: string) {
  const from = createMeta(this, appStr)
  const uuid = this.sc.getInstanceUUID(from.source)!!
  const message: OpenRequest = {
    type: 'openRequest',
    meta: from,
    payload: {
      app: {
        appId: open,
        desktopAgent: "n/a"
      },
    }
  }
  this.server.receive(message, uuid)
});

When('{string} opens app {string} with context data {string}', function (this: CustomWorld, appStr: string, open: string, context: string) {
  const from = createMeta(this, appStr)
  const uuid = this.sc.getInstanceUUID(from.source)!!
  const message: OpenRequest = {
    type: 'openRequest',
    meta: from,
    payload: {
      app: {
        appId: open,
        desktopAgent: "n/a"
      },
      context: contextMap[context]
    }
  }
  this.server.receive(message, uuid)
});

When('{string} requests metadata for {string}', function (this: CustomWorld, appStr: string, open: string) {
  const from = createMeta(this, appStr)
  const uuid = this.sc.getInstanceUUID(from.source)!!
  const message: GetAppMetadataRequest = {
    type: 'getAppMetadataRequest',
    meta: from,
    payload: {
      app: {
        appId: open,
        desktopAgent: "n/a"
      }
    }
  }
  this.server.receive(message, uuid)
});


When('{string} findsInstances of {string}', function (this: CustomWorld, appStr: string, open: string) {
  const from = createMeta(this, appStr)
  const uuid = this.sc.getInstanceUUID(from.source)!!
  const message: FindInstancesRequest = {
    type: 'findInstancesRequest',
    meta: from,
    payload: {
      app: {
        appId: open
      }
    }
  }
  this.server.receive(message, uuid)
});

When('we wait for the listener timeout', function (this: CustomWorld) {
  return new Promise<void>((resolve, _reject) => {
    setTimeout(() => resolve(), 3100)
  })
});