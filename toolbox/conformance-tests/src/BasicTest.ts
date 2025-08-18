import { getAgent } from '@finos/fdc3';
import { isPromise } from './utils';

const TEST_TIMEOUT_MS = 10000;

describe('Connection', function () {
  this.timeout(TEST_TIMEOUT_MS);

  it('getAgent resolves a DesktopAgent', async function () {
    const agent = await getAgent();
    expect(agent).to.be.an('object');
    // Check that agent is of type DesktopAgent by verifying required methods
    expect(agent.addContextListener).to.be.a('function');
    expect(agent.addEventListener).to.be.a('function');
    expect(agent.addIntentListener).to.be.a('function');
    expect(agent.createPrivateChannel).to.be.a('function');
    expect(agent.findInstances).to.be.a('function');
    expect(agent.findIntent).to.be.a('function');
    expect(agent.findIntentsByContext).to.be.a('function');
    expect(agent.getAppMetadata).to.be.a('function');
    expect(agent.getCurrentChannel).to.be.a('function');
    expect(agent.getInfo).to.be.a('function');
    expect(agent.getInfo).to.be.a('function');
    expect(agent.getOrCreateChannel).to.be.a('function');
    expect(agent.getUserChannels).to.be.a('function');
    expect(agent.joinUserChannel).to.be.a('function');
    expect(agent.leaveCurrentChannel).to.be.a('function');
    expect(agent.open).to.be.a('function');
    expect(agent.raiseIntent).to.be.a('function');
    expect(agent.raiseIntentForContext).to.be.a('function');
  });

  it('getInfo returns ImplementationMetadata with 2.2.x version and provider details', async function () {
    const agent = await getAgent();
    const info = await agent.getInfo();
    console.log('BasicGI1: getInfo', info);
    expect(info).to.be.an('object');
    expect(info.fdc3Version).to.be.a('string');
    expect(info.fdc3Version.startsWith('2.2')).to.equal(true);
    expect(info.provider).to.be.a('string');
    expect(info.provider.length).to.be.greaterThan(0);
    expect(info.providerVersion).to.be.a('string');
    expect(info.providerVersion?.length).to.be.greaterThan(0);
  });

  it('getUserChannels returns user channels', async function () {
    const agent = await getAgent();
    const channels = await agent.getUserChannels();
    expect(Array.isArray(channels)).to.equal(true);
    if (channels.length > 0) {
      const c = channels[0];
      expect(c).to.be.an('object');
      expect(c.id).to.be.a('string');
      if (typeof c.type !== 'undefined') {
        expect(c.type).to.equal('user');
      }
    }
  });
});

describe('Basic API Usage', function () {
  this.timeout(TEST_TIMEOUT_MS);

  it('BasicCL1: can create and unsubscribe to a typed context listener', async function () {
    const desktopAgent = await getAgent();
    const listener = await desktopAgent.addContextListener('fdc3.contact', function () {
      /* no-op */
    });
    expect(listener).to.be.an('object');
    expect(listener.unsubscribe).to.be.a('function');
    listener.unsubscribe();
  });

  it('BasicCL2: can create and unsubscribe toan unfiltered context listener', async function () {
    const desktopAgent = await getAgent();
    const listener = await desktopAgent.addContextListener(null, function () {
      /* no-op */
    });
    expect(listener).to.be.an('object');
    expect(listener.unsubscribe).to.be.a('function');
    listener.unsubscribe();
  });

  it('BasicIL1: can create and unsubscribe to an intent listener', async function () {
    const desktopAgent = await getAgent();
    const listener = await desktopAgent.addIntentListener('TestIntent.Conformance', function () {
      /* no-op */
    });
    expect(listener).to.be.an('object');
    expect(listener.unsubscribe).to.be.a('function');
    listener.unsubscribe();
  });

  it('BasicGI1: can retrieve ImplementationMetadata via getInfo', async function () {
    const desktopAgent = await getAgent();
    const info = await desktopAgent.getInfo();
    expect(info).to.be.an('object');
    expect(info.fdc3Version).to.be.a('string');
  });

  it('BasicAC1: getOrCreateChannel returns a valid App Channel interface', async function () {
    const desktopAgent = await getAgent();
    const channelName = 'conformance-app-channel-' + Date.now();
    const channel = await desktopAgent.getOrCreateChannel(channelName);
    expect(channel).to.be.an('object');
    expect(channel.id).to.be.a('string');
    if (typeof channel.type !== 'undefined') {
      expect(channel.type).to.equal('app');
    }
    expect(channel.addContextListener).to.be.a('function');
    expect(channel.broadcast).to.be.a('function');
    if (typeof channel.getCurrentContext !== 'undefined') {
      expect(channel.getCurrentContext).to.be.a('function');
    }
  });

  it('BasicUC1: getUserChannels returns an array of Channel objects', async function () {
    const desktopAgent = await getAgent();
    const channels = await desktopAgent.getUserChannels();
    expect(Array.isArray(channels)).to.equal(true);
    if (channels.length > 0) {
      const c = channels[0];
      expect(c).to.be.an('object');
      expect(c.id).to.be.a('string');
    }
  });

  it('BasicJC1: can join and leave a user channel', async function () {
    const desktopAgent = await getAgent();
    const channels = await desktopAgent.getUserChannels();
    if (!channels || channels.length === 0) {
      return;
    }
    const targetId = channels[0].id;
    await desktopAgent.joinUserChannel(targetId);
    const current = await desktopAgent.getCurrentChannel();
    expect(current).to.not.equal(null);
    if (current && typeof current.id === 'string') {
      expect(current.id).to.equal(targetId);
    }
    await desktopAgent.leaveCurrentChannel();
    const after = await desktopAgent.getCurrentChannel();
    expect(after === null || typeof after === 'undefined').to.equal(true);
  });

  it('BasicRI1: raiseIntent returns a Promise', async function () {
    const desktopAgent = await getAgent();
    const ctx = { type: 'fdc3.contact', name: 'Conformance Tester' };
    const p = desktopAgent.raiseIntent('TestIntent.Conformance', ctx);
    expect(isPromise(p)).to.equal(true);
    (p as Promise<unknown>).catch(function () {
      /* swallow */
    });
  });

  it('BasicRI2: raiseIntentForContext returns a Promise', async function () {
    const desktopAgent = await getAgent();
    const ctx = { type: 'fdc3.contact', name: 'Conformance Tester' };
    const p = desktopAgent.raiseIntentForContext(ctx);
    expect(isPromise(p)).to.equal(true);
    (p as Promise<unknown>).catch(function () {
      /* swallow */
    });
  });
});
