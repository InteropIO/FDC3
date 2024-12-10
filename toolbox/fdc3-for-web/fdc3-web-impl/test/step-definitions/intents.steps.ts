import { DataTable, Given, When } from '@cucumber/cucumber';
import { CustomWorld } from '../world';
import { DirectoryApp } from '../../src/directory/DirectoryInterface';
import { APP_FIELD, contextMap, createMeta } from './generic.steps';
import { handleResolve } from '@kite9/testing';
import { BrowserTypes } from '@kite9/fdc3-schema';

type FindIntentRequest = BrowserTypes.FindIntentRequest;
type FindIntentsByContextRequest = BrowserTypes.FindIntentsByContextRequest;
type AddIntentListenerRequest = BrowserTypes.AddIntentListenerRequest;
type IntentListenerUnsubscribeRequest = BrowserTypes.IntentListenerUnsubscribeRequest;
type RaiseIntentRequest = BrowserTypes.RaiseIntentRequest;
type RaiseIntentForContextRequest = BrowserTypes.RaiseIntentForContextRequest;
type IntentResultRequest = BrowserTypes.IntentResultRequest;

type ListensFor = {
  [key: string]: {
    displayName?: string | undefined;
    contexts: string[];
    resultType?: string | undefined;
  };
};

function decamelize(str: string, separator: string) {
  separator = typeof separator === 'undefined' ? '_' : separator;

  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
}

function convertDataTableToListensFor(cw: CustomWorld, dt: DataTable): ListensFor {
  const hashes = dt.hashes();
  const out: { [key: string]: any } = {};
  hashes.forEach(h => {
    out[h['Intent Name']] = {
      displayName: decamelize(h['Intent Name'], ' '),
      contexts: [handleResolve(h['Context Type'], cw)],
      resultType: handleResolve(h['Result Type'], cw),
    };
  });

  return out;
}

Given('{string} is an app with the following intents', function (this: CustomWorld, appId: string, dt: DataTable) {
  const currentApps = this.props[APP_FIELD] ?? [];

  const newApp: DirectoryApp = {
    appId,
    type: 'web',
    description: '',
    title: '',
    details: {},
    interop: {
      intents: {
        listensFor: convertDataTableToListensFor(this, dt),
      },
    },
  };

  currentApps.push(newApp);

  this.props[APP_FIELD] = currentApps;
});

When(
  '{string} finds intents with intent {string} and contextType {string} and result type {string}',
  function (this: CustomWorld, appStr: string, intentName: string, contextType: string, resultType: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message = {
      meta,
      payload: {
        intent: handleResolve(intentName, this)!!,
        resultType: handleResolve(resultType, this),
        context: contextMap[contextType],
      },
      type: 'findIntentRequest',
    } as FindIntentRequest;

    this.server.receive(message, uuid);
  }
);

When(
  '{string} finds intents with contextType {string}',
  function (this: CustomWorld, appStr: string, contextType: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message = {
      meta,
      payload: {
        context: contextMap[contextType],
      },
      type: 'findIntentsByContextRequest',
    } as FindIntentsByContextRequest;

    this.server.receive(message, uuid);
  }
);

Given(
  '{string} registers an intent listener for {string}',
  function (this: CustomWorld, appStr: string, intent: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;

    const message = {
      type: 'addIntentListenerRequest',
      meta,
      payload: {
        intent: handleResolve(intent, this),
      },
    } as AddIntentListenerRequest;
    this.server.receive(message, uuid);
  }
);

Given(
  '{string} registers an intent listener for {string} with contextType {string}',
  function (this: CustomWorld, appStr: string, intent: string, contextType: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message = {
      type: 'addIntentListenerRequest',
      meta,
      payload: {
        intent: handleResolve(intent, this),
        contextType: handleResolve(contextType, this),
      },
    } as AddIntentListenerRequest;
    this.server.receive(message, uuid);
  }
);

Given(
  '{string} unsubscribes an intent listener with id {string}',
  function (this: CustomWorld, appStr: string, id: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message = {
      type: 'intentListenerUnsubscribeRequest',
      meta,
      payload: {
        listenerUUID: handleResolve(id, this),
      },
    } as IntentListenerUnsubscribeRequest;
    this.server.receive(message, uuid);
  }
);

function raise(
  cw: CustomWorld,
  intentName: string,
  contextType: string,
  dest: string | null,
  meta: any
): RaiseIntentRequest {
  const destMeta = dest != null ? createMeta(cw, dest) : null;
  const message = {
    type: 'raiseIntentRequest',
    meta: {
      ...meta,
    },
    payload: {
      intent: handleResolve(intentName, cw),
      context: contextMap[contextType],
      app: dest ? destMeta!!.source : null,
    },
  } as RaiseIntentRequest;
  return message;
}

function raiseWithContext(
  cw: CustomWorld,
  contextType: string,
  dest: string | null,
  meta: any
): RaiseIntentForContextRequest {
  const destMeta = dest != null ? createMeta(cw, dest) : null;
  const message = {
    type: 'raiseIntentForContextRequest',
    meta: {
      ...meta,
    },
    payload: {
      context: contextMap[contextType],
      app: dest ? destMeta!!.source : null,
    },
  } as RaiseIntentForContextRequest;
  return message;
}

When(
  '{string} raises an intent with contextType {string}',
  function (this: CustomWorld, appStr: string, contextType: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message = raiseWithContext(this, contextType, null, meta);
    this.server.receive(message, uuid);
  }
);

When(
  '{string} raises an intent with contextType {string} on app {string}',
  function (this: CustomWorld, appStr: string, contextType: string, dest: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message = raiseWithContext(this, contextType, dest, meta);
    this.server.receive(message, uuid);
  }
);

When(
  '{string} raises an intent for {string} with contextType {string}',
  function (this: CustomWorld, appStr: string, intentName: string, contextType: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message = raise(this, intentName, contextType, null, meta);
    this.server.receive(message, uuid);
  }
);

When(
  '{string} raises an intent for {string} with contextType {string} on app {string}',
  function (this: CustomWorld, appStr: string, intentName: string, contextType: string, dest: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message = raise(this, intentName, contextType, dest, meta);
    this.server.receive(message, uuid);
  }
);

When(
  '{string} raises an intent for {string} with contextType {string} on app {string} with requestUuid {string}',
  function (
    this: CustomWorld,
    appStr: string,
    intentName: string,
    contextType: string,
    dest: string,
    requestUuid: string
  ) {
    const meta = {
      ...createMeta(this, appStr),
      requestUuid,
    };
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message = raise(this, intentName, contextType, dest, meta);
    this.server.receive(message, uuid);
  }
);

When('we wait for the intent timeout', function (this: CustomWorld) {
  return new Promise<void>((resolve, _reject) => {
    setTimeout(() => resolve(), 2100);
  });
});

When(
  '{string} sends a intentResultRequest with eventUuid {string} and contextType {string} and raiseIntentUuid {string}',
  function (this: CustomWorld, appStr: string, eventUuid: string, contextType: string, raiseIntentUuid: string) {
    const meta = createMeta(this, appStr);
    const uuid1 = this.sc.getInstanceUUID(meta.source)!!;
    const message: IntentResultRequest = {
      type: 'intentResultRequest',
      meta: {
        ...meta,
      },
      payload: {
        intentResult: {
          context: contextMap[contextType],
        },
        intentEventUuid: eventUuid,
        raiseIntentRequestUuid: raiseIntentUuid,
      },
    };
    this.server.receive(message, uuid1);
  }
);

When(
  '{string} sends a intentResultRequest with eventUuid {string} and void contents and raiseIntentUuid {string}',
  function (this: CustomWorld, appStr: string, eventUuid: string, raiseIntentUuid: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;
    const message: IntentResultRequest = {
      type: 'intentResultRequest',
      meta: {
        ...meta,
      },
      payload: {
        intentResult: {},
        intentEventUuid: eventUuid,
        raiseIntentRequestUuid: raiseIntentUuid,
      },
    };
    this.server.receive(message, uuid);
  }
);

When(
  '{string} sends a intentResultRequest with eventUuid {string} and private channel {string} and raiseIntentUuid {string}',
  function (this: CustomWorld, appStr: string, eventUuid: string, channelId: string, raiseIntentUuid: string) {
    const meta = createMeta(this, appStr);
    const uuid = this.sc.getInstanceUUID(meta.source)!!;

    const message: IntentResultRequest = {
      type: 'intentResultRequest',
      meta: {
        ...meta,
      },
      payload: {
        intentResult: {
          channel: {
            type: 'private',
            id: channelId,
          },
        },
        intentEventUuid: eventUuid,
        raiseIntentRequestUuid: raiseIntentUuid,
      },
    };
    this.server.receive(message, uuid);
  }
);

// When('{string} sends a intentResultRequest with eventUuid {string}', function (this: CustomWorld, appStr: string, requestUuid: string) {
//     const meta = createMeta(this, appStr)
//     const uuid = this.sc.getInstanceUUID(meta.source)!!
//     const message = {
//         type: 'intentResultRequest',
//         meta: {
//             requestUuid: meta.requestUuid,
//             responseUuid: this.sc.createUUID(),
//             timestamp: new Date()
//         },
//         payload: {
//             intentResult: {
//                 context: {
//                     "type": "fdc3.something",
//                     "name": "Some Name"
//                 }
//             },
//             intentEventUuid: 'event-uuid-1',
//             raiseIntentRequestUuid: requestUuid
//         }
//     } as IntentResultRequest

//     this.server.receive(message, uuid)
// });
