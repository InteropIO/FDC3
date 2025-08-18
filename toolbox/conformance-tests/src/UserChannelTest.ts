import { getAgent } from '@finos/fdc3';
import { waitFor, wait } from './utils';

const TEST_TIMEOUT_MS = 50000;

async function joinFirstNonGlobalUserChannel(agent: any): Promise<string> {
  const channels = await agent.getUserChannels();
  const target = channels.find((c: any) => c.id !== 'global');
  if (!target) throw new Error('No non-global user channel available');
  await agent.joinUserChannel(target.id);
  return target.id;
}

describe('User Channels', function () {
  describe('Basic Broadcast', function () {
    this.timeout(TEST_TIMEOUT_MS);

    it('UCBasicUsage1', async () => {
      let received = false;
      const agent = await getAgent();
      const untypedListener = await agent.addContextListener(null, (ctx: any) => {
        if (ctx?.type === 'fdc3.instrument' && ctx?.testName === 'UCBasicUsage1') {
          received = true;
        }
      });
      expect(untypedListener.unsubscribe).to.be.a('function');
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCBasicUsage1', channelId },
        { appId: 'app-b' }
      );
      await waitFor(() => received);
      untypedListener.unsubscribe();
    });

    it('UCBasicUsage2', async () => {
      let received = false;
      const agent = await getAgent();
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      const untypedListener = await agent.addContextListener(null, (ctx: any) => {
        if (ctx?.type === 'fdc3.instrument' && ctx?.testName === 'UCBasicUsage2') {
          received = true;
        }
      });
      expect(untypedListener.unsubscribe).to.be.a('function');
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCBasicUsage2', channelId },
        { appId: 'app-b' }
      );
      await waitFor(() => received);
      untypedListener.unsubscribe();
    });

    it('UCBasicUsage3', async () => {
      let received = false;
      const agent = await getAgent();
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCBasicUsage3', channelId },
        { appId: 'app-b' }
      );
      const untypedListener = await agent.addContextListener(null, (ctx: any) => {
        if (ctx?.type === 'fdc3.instrument' && ctx?.testName === 'UCBasicUsage3') {
          received = true;
        }
      });
      expect(untypedListener.unsubscribe).to.be.a('function');
      await waitFor(() => received);
      untypedListener.unsubscribe();
    });

    it('UCBasicUsage4', async () => {
      let received = false;
      const agent = await getAgent();
      const untypedListener = await agent.addContextListener(null, (ctx: any) => {
        if (ctx?.type === 'fdc3.instrument' && ctx?.testName === 'UCBasicUsage4') {
          received = true;
        }
      });
      expect(untypedListener.unsubscribe).to.be.a('function');
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCBasicUsage4', channelId },
        { appId: 'app-b' }
      );
      await waitFor(() => received);
      untypedListener.unsubscribe();
    });
  });

  describe('Filtered Broadcast', function () {
    this.timeout(TEST_TIMEOUT_MS);

    it('UCFilteredUsage1', async () => {
      const agent = await getAgent();
      let received = 0;
      // 1. Add a typed context listener
      const listener = await agent.addContextListener('fdc3.instrument', (ctx: any) => {
        received++;
        expect(ctx.type).to.equal('fdc3.instrument');
      });
      // 2. Join a user channel
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      // Send to app-b for steps 3 and 4
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsage1', channelId },
        { appId: 'app-b' }
      );
      // 5. Confirm that only 1 context was received
      await waitFor(() => received === 1);
      // Wait to make sure that no additional contexts have been received
      await wait(1000);
      expect(received).to.equal(1);
      listener.unsubscribe();
    });

    it('UCFilteredUsage2', async () => {
      // Steps: 2, 1, 3, 4, 5
      const agent = await getAgent();
      let received = 0;
      // 2. Join a user channel
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      // 1. Add a typed context listener
      const listener = await agent.addContextListener('fdc3.instrument', (ctx: any) => {
        received++;
        expect(ctx.type).to.equal('fdc3.instrument');
      });
      // Send to app-b for steps 3 and 4
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsage1', channelId },
        { appId: 'app-b' }
      );
      // 5. Confirm that only 1 context was received
      await waitFor(() => received === 1);
      // Wait to make sure that no additional contexts have been received
      await wait(1000);
      expect(received).to.equal(1);
      listener.unsubscribe();
    });

    it('UCFilteredUsage3', async () => {
      // Steps: 3, 4, 1, 2, 5
      const agent = await getAgent();
      const channels = await agent.getUserChannels();
      const target = channels.find((c: any) => c.id !== 'global');
      if (!target) {
        throw new Error('No non-global user channel available');
        return;
      }

      let received = 0;
      // Send to app-b for steps 3 and 4
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsage1', channelId: target.id },
        { appId: 'app-b' }
      );
      // 1. Add a typed context listener
      const listener = await agent.addContextListener('fdc3.instrument', (ctx: any) => {
        received++;
        expect(ctx.type).to.equal('fdc3.instrument');
      });
      // 2. Join a user channel
      await agent.joinUserChannel(target.id);
      // 5. Confirm that only 1 context was received
      await waitFor(() => received === 1);
      // Wait to make sure that no additional contexts have been received
      await wait(1000);
      expect(received).to.equal(1);
      listener.unsubscribe();
    });

    it('UCFilteredUsage4', async () => {
      // Steps: 3, 4, 2, 1, 5
      const agent = await getAgent();
      const channels = await agent.getUserChannels();
      const target = channels.find((c: any) => c.id !== 'global');
      if (!target) {
        throw new Error('No non-global user channel available');
        return;
      }

      let received = 0;
      // Send to app-b for steps 3 and 4
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsage1', channelId: target.id },
        { appId: 'app-b' }
      );
      // 2. Join a user channel
      await agent.joinUserChannel(target.id);
      // 1. Add a typed context listener
      const listener = await agent.addContextListener('fdc3.instrument', (ctx: any) => {
        received++;
        expect(ctx.type).to.equal('fdc3.instrument');
      });
      // 5. Confirm that only 1 context was received
      await waitFor(() => received === 1);
      // Wait to make sure that no additional contexts have been received
      await wait(1000);
      expect(received).to.equal(1);
      listener.unsubscribe();
    });
  });

  describe('Multiple listeners', function () {
    this.timeout(TEST_TIMEOUT_MS);

    it('UCFilteredUsage5', async () => {
      let instrumentReceived = false;
      let contactReceived = false;
      const agent = await getAgent();
      const instrumentListener = await agent.addContextListener('fdc3.instrument', (ctx: any) => {
        if (ctx?.testName === 'UCFilteredUsage5') instrumentReceived = true;
      });
      const contactListener = await agent.addContextListener('fdc3.contact', (ctx: any) => {
        if (ctx?.testName === 'UCFilteredUsage5') contactReceived = true;
      });
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsage5', channelId },
        { appId: 'app-b' }
      );
      await waitFor(() => instrumentReceived && contactReceived);
      instrumentListener.unsubscribe();
      contactListener.unsubscribe();
    });

    it('UCFilteredUsage6', async () => {
      let received = false;
      const agent = await getAgent();
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      const instrumentListener = await agent.addContextListener('fdc3.instrument', () => {
        received = true;
      });
      // Tell app-b to broadcast on a different channel id
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsage6', channelId },
        { appId: 'app-b' }
      );
      await new Promise(r => setTimeout(r, 500));
      instrumentListener.unsubscribe();
      expect(received).to.equal(false);
    });

    it('UCFilteredUsageChange', async () => {
      let received = false;
      const agent = await getAgent();
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      const instrumentListener = await agent.addContextListener('fdc3.instrument', () => {
        received = true;
      });
      // Switch this app to another channel after initial join
      const all = await agent.getUserChannels();
      const another = all.find((c: any) => c.id !== 'global' && c.id !== channelId);
      if (!another) {
        throw new Error('No non-global user channel available');
        return;
      }
      await agent.joinUserChannel(another.id);
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsageChange', channelId },
        { appId: 'app-b' }
      );
      await new Promise(r => setTimeout(r, 500));
      instrumentListener.unsubscribe();
      expect(received).to.equal(false);
    });

    it('UCFilteredUsageUnsubscribe', async () => {
      let received = false;
      const agent = await getAgent();
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      const instrumentListener = await agent.addContextListener('fdc3.instrument', () => {
        received = true;
      });
      instrumentListener.unsubscribe();
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsageUnsubscribe', channelId },
        { appId: 'app-b' }
      );
      await new Promise(r => setTimeout(r, 500));
      expect(received).to.equal(false);
    });

    it('UCFilteredUsageLeave', async () => {
      let received = false;
      const agent = await getAgent();
      const channelId = await joinFirstNonGlobalUserChannel(agent);
      await agent.leaveCurrentChannel();
      const instrumentListener = await agent.addContextListener('fdc3.instrument', () => {
        received = true;
      });
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsageLeave', channelId },
        { appId: 'app-b' }
      );
      await new Promise(r => setTimeout(r, 500));
      instrumentListener.unsubscribe();
      expect(received).to.equal(false);
    });

    it('UCFilteredUsageNoJoin', async () => {
      let received = false;
      const agent = await getAgent();
      const current = await agent.getCurrentChannel();
      expect(current === null || typeof current === 'undefined').to.equal(true);
      const instrumentListener = await agent.addContextListener('fdc3.instrument', () => {
        received = true;
      });
      // Provide a channelId but don't join
      const channels = await agent.getUserChannels();
      const target = channels.find((c: any) => c.id !== 'global');
      if (!target) {
        throw new Error('No non-global user channel available');
        return;
      }
      await agent.raiseIntent(
        'custom.instruction',
        { type: 'start-test', name: 'UCFilteredUsageNoJoin', channelId: target.id },
        { appId: 'app-b' }
      );
      await new Promise(r => setTimeout(r, 500));
      instrumentListener.unsubscribe();
      expect(received).to.equal(false);
    });
  });
});
