import { getAgent } from '@finos/fdc3';
import { waitFor } from './utils';

const TEST_TIMEOUT_MS = 50000;

describe('Basic Usage', function () {
  this.timeout(TEST_TIMEOUT_MS);

  it('BasicAB1: can broadcast a context', async () => {
    let responseReceived = false;
    const agent = await getAgent();
    const testChannel = await agent.getOrCreateChannel('test-channel');
    const contextListener = await testChannel.addContextListener(null, receivedContext => {
      expect(receivedContext).to.deep.equal({ type: 'custom.test-response', testName: 'BasicAB1' });
      responseReceived = true;
      contextListener.unsubscribe();
    });
    await agent.raiseIntent(
      'custom.instruction',
      {
        type: 'start-test',
        name: 'BasicAB1',
      },
      {
        appId: 'app-b',
      }
    );
    await waitFor(() => responseReceived);
  });

  it('BasicAB2: can retrieve a context', async () => {
    const agent = await getAgent();
    const intent = await agent.raiseIntent(
      'custom.instruction',
      {
        type: 'start-test',
        name: 'BasicAB2',
      },
      {
        appId: 'app-b',
      }
    );

    // Wait for App B to set the channel context
    await intent.getResult();

    const testChannel = await agent.getOrCreateChannel('test-channel');
    const currentContext = await testChannel.getCurrentContext();
    expect(currentContext).to.deep.equal({ type: 'custom.test-response', testName: 'BasicAB2' });
  });
});

describe('Filtered Context', function () {
  this.timeout(TEST_TIMEOUT_MS);

  it('ACFilteredContext1: typed listener receives only instrument when both instrument and contact are broadcast', async () => {
    let instrumentReceived = false;
    const agent = await getAgent();
    const testChannel = await agent.getOrCreateChannel('test-channel');
    const instrumentListener = await testChannel.addContextListener('fdc3.instrument', receivedContext => {
      instrumentReceived = true;
      expect(receivedContext.type).to.equal('fdc3.instrument');
    });
    await agent.raiseIntent(
      'custom.instruction',
      { type: 'start-test', name: 'ACFilteredContext1' },
      { appId: 'app-b' }
    );
    await waitFor(() => instrumentReceived);
    instrumentListener.unsubscribe();
  });

  it('ACFilteredContext2: typed listeners for instrument and contact both receive their contexts', async () => {
    let instrumentReceived = false;
    let contactReceived = false;
    const agent = await getAgent();
    const testChannel = await agent.getOrCreateChannel('test-channel');
    const instrumentListener = await testChannel.addContextListener('fdc3.instrument', receivedContext => {
      instrumentReceived = true;
      expect(receivedContext.type).to.equal('fdc3.instrument');
    });
    const contactListener = await testChannel.addContextListener('fdc3.contact', receivedContext => {
      contactReceived = true;
      expect(receivedContext.type).to.equal('fdc3.contact');
    });
    await agent.raiseIntent(
      'custom.instruction',
      { type: 'start-test', name: 'ACFilteredContext2' },
      { appId: 'app-b' }
    );
    await waitFor(() => instrumentReceived && contactReceived);
    instrumentListener.unsubscribe();
    contactListener.unsubscribe();
  });

  it('ACFilteredContext3: no delivery when B broadcasts on a different channel', async () => {
    let received = false;
    const agent = await getAgent();
    const testChannel = await agent.getOrCreateChannel('test-channel');
    const instrumentListener = await testChannel.addContextListener('fdc3.instrument', () => {
      received = true;
    });
    await agent.raiseIntent(
      'custom.instruction',
      { type: 'start-test', name: 'ACFilteredContext3' },
      { appId: 'app-b' }
    );
    // Give app-b time to broadcast on a different channel
    await new Promise(r => setTimeout(r, 500));
    instrumentListener.unsubscribe();
    expect(received).to.equal(false);
  });

  it('ACFilteredContext4: additional listener on another channel does not affect first channel delivery', async () => {
    let receivedOnFirst = false;
    let receivedOnSecond = false;
    const agent = await getAgent();
    const firstChannel = await agent.getOrCreateChannel('test-channel');
    const secondChannel = await agent.getOrCreateChannel('second-channel');
    const firstChannelListener = await firstChannel.addContextListener('fdc3.instrument', () => {
      receivedOnFirst = true;
    });
    const secondChannelListener = await secondChannel.addContextListener('fdc3.instrument', () => {
      receivedOnSecond = true;
    });
    await agent.raiseIntent(
      'custom.instruction',
      { type: 'start-test', name: 'ACFilteredContext4' },
      { appId: 'app-b' }
    );
    await waitFor(() => receivedOnFirst);
    firstChannelListener.unsubscribe();
    secondChannelListener.unsubscribe();
    expect(receivedOnSecond).to.equal(false);
  });

  it('ACUnsubscribe: no delivery after unsubscribe', async () => {
    let received = false;
    const agent = await getAgent();
    const testChannel = await agent.getOrCreateChannel('test-channel');
    const instrumentListener = await testChannel.addContextListener('fdc3.instrument', () => {
      received = true;
    });
    instrumentListener.unsubscribe();
    await agent.raiseIntent('custom.instruction', { type: 'start-test', name: 'ACUnsubscribe' }, { appId: 'app-b' });
    await new Promise(r => setTimeout(r, 500));
    expect(received).to.equal(false);
  });
});

describe('App Channel History', function () {
  this.timeout(TEST_TIMEOUT_MS);

  it('ACContextHistoryTyped: getCurrentContext per type returns last of each', async () => {
    const agent = await getAgent();
    await agent.raiseIntent(
      'custom.instruction',
      { type: 'start-test', name: 'ACContextHistoryTyped' },
      { appId: 'app-b' }
    );
    const channel = await agent.getOrCreateChannel('test-channel');
    const instrument = await channel.getCurrentContext('fdc3.instrument');
    const contact = await channel.getCurrentContext('fdc3.contact');
    expect(instrument).to.deep.equal({ type: 'fdc3.instrument', id: { ticker: 'AAPL' } });
    expect(contact).to.deep.equal({ type: 'fdc3.contact', name: 'Alice' });
  });

  it('ACContextHistoryMultiple: only the last of each type is returned', async () => {
    const agent = await getAgent();
    await agent.raiseIntent(
      'custom.instruction',
      { type: 'start-test', name: 'ACContextHistoryMultiple' },
      { appId: 'app-b' }
    );
    const channel = await agent.getOrCreateChannel('test-channel');
    const instrument = await channel.getCurrentContext('fdc3.instrument');
    const contact = await channel.getCurrentContext('fdc3.contact');
    console.log('received', instrument, contact);
    expect(instrument).to.deep.equal({ type: 'fdc3.instrument', id: { ticker: 'MSFT' } });
    expect(contact).to.deep.equal({ type: 'fdc3.contact', name: 'Bob' });
  });

  it('ACContextHistoryLast: untyped current context returns very last broadcast of any type', async () => {
    const agent = await getAgent();
    await agent.raiseIntent(
      'custom.instruction',
      { type: 'start-test', name: 'ACContextHistoryLast' },
      { appId: 'app-b' }
    );
    const channel = await agent.getOrCreateChannel('test-channel');
    const current = await channel.getCurrentContext();
    expect(current).to.deep.equal({ type: 'fdc3.contact', name: 'Zoe' });
  });
});

describe('Multiple listeners on same/overlapping types', function () {
  this.timeout(TEST_TIMEOUT_MS);

  it('ACMultipleOverlappingListeners1: untyped and typed instrument listeners both receive', async () => {
    let untypedReceived = false;
    let typedReceived = false;
    const agent = await getAgent();
    const channel = await agent.getOrCreateChannel('test-channel');
    const untypedListener = await channel.addContextListener(null, receivedContext => {
      if (receivedContext.type === 'fdc3.instrument') untypedReceived = true;
    });
    const typedListener = await channel.addContextListener('fdc3.instrument', () => {
      typedReceived = true;
    });
    await agent.raiseIntent(
      'custom.instruction',
      { type: 'start-test', name: 'ACMultipleOverlappingListeners' },
      { appId: 'app-b' }
    );
    await waitFor(() => untypedReceived && typedReceived);
    untypedListener.unsubscribe();
    typedListener.unsubscribe();
  });

  it('ACMultipleOverlappingListeners2: two typed instrument listeners both receive', async () => {
    let typed1 = false;
    let typed2 = false;
    const agent = await getAgent();
    const channel = await agent.getOrCreateChannel('test-channel');
    const listener1 = await channel.addContextListener('fdc3.instrument', () => {
      typed1 = true;
    });
    const listener2 = await channel.addContextListener('fdc3.instrument', () => {
      typed2 = true;
    });
    await agent.raiseIntent(
      'custom.instruction',
      { type: 'start-test', name: 'ACMultipleOverlappingListeners' },
      { appId: 'app-b' }
    );
    await waitFor(() => typed1 && typed2);
    listener1.unsubscribe();
    listener2.unsubscribe();
  });
});
