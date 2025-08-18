import { Context, getAgent } from '@finos/fdc3';

const log = document.getElementById('log')!;

(async () => {
  const agent = await getAgent();
  const testChannel = await agent.getOrCreateChannel('test-channel');
  const otherChannel = await agent.getOrCreateChannel('second-channel');

  const testTasks: Record<string, (payload?: Context) => Promise<void>> = {
    BasicAB1: async () => {
      await testChannel.broadcast({ type: 'custom.test-response', testName: 'BasicAB1' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: BasicAB1';
    },
    BasicAB2: async () => {
      await testChannel.broadcast({ type: 'custom.test-response', testName: 'BasicAB2' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: BasicAB2';
    },
    ACFilteredContext1: async () => {
      await testChannel.broadcast({ type: 'fdc3.instrument', id: { ticker: 'AAPL' }, testName: 'ACFilteredContext1' });
      await testChannel.broadcast({ type: 'fdc3.contact', name: 'Alice', testName: 'ACFilteredContext1' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: ACFilteredContext1';
    },
    ACFilteredContext2: async () => {
      await testChannel.broadcast({ type: 'fdc3.instrument', id: { ticker: 'AAPL' }, testName: 'ACFilteredContext2' });
      await testChannel.broadcast({ type: 'fdc3.contact', name: 'Alice', testName: 'ACFilteredContext2' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: ACFilteredContext2';
    },
    ACFilteredContext3: async () => {
      await otherChannel.broadcast({ type: 'fdc3.instrument', id: { ticker: 'AAPL' }, testName: 'ACFilteredContext3' });
      await otherChannel.broadcast({ type: 'fdc3.contact', name: 'Alice', testName: 'ACFilteredContext3' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: ACFilteredContext3';
    },
    ACFilteredContext4: async () => {
      await testChannel.broadcast({ type: 'fdc3.instrument', id: { ticker: 'AAPL' }, testName: 'ACFilteredContext4' });
      await testChannel.broadcast({ type: 'fdc3.contact', name: 'Alice', testName: 'ACFilteredContext4' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: ACFilteredContext4';
    },
    ACUnsubscribe: async () => {
      await testChannel.broadcast({ type: 'fdc3.instrument', id: { ticker: 'AAPL' }, testName: 'ACUnsubscribe' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: ACUnsubscribe';
    },
    ACContextHistoryTyped: async () => {
      await testChannel.broadcast({
        type: 'fdc3.instrument',
        id: { ticker: 'AAPL' },
        testName: 'ACContextHistoryTyped',
      });
      await testChannel.broadcast({ type: 'fdc3.contact', name: 'Alice', testName: 'ACContextHistoryTyped' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: ACContextHistoryTyped';
    },
    ACContextHistoryMultiple: async () => {
      await testChannel.broadcast({
        type: 'fdc3.instrument',
        id: { ticker: 'AAPL' },
        testName: 'ACContextHistoryMultiple',
      });
      await testChannel.broadcast({ type: 'fdc3.contact', name: 'Alice', testName: 'ACContextHistoryMultiple' });
      await testChannel.broadcast({
        type: 'fdc3.instrument',
        id: { ticker: 'MSFT' },
        testName: 'ACContextHistoryMultiple',
      });
      await testChannel.broadcast({ type: 'fdc3.contact', name: 'Bob', testName: 'ACContextHistoryMultiple' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: ACContextHistoryMultiple';
    },
    ACContextHistoryLast: async () => {
      await testChannel.broadcast({
        type: 'fdc3.instrument',
        id: { ticker: 'AAPL' },
        testName: 'ACContextHistoryLast',
      });
      await testChannel.broadcast({ type: 'fdc3.contact', name: 'Yvonne', testName: 'ACContextHistoryLast' });
      await testChannel.broadcast({ type: 'fdc3.contact', name: 'Zoe', testName: 'ACContextHistoryLast' });
      log.appendChild(document.createElement('div')).textContent = 'Starting: ACContextHistoryLast';
    },
    ACMultipleOverlappingListeners: async () => {
      await testChannel.broadcast({
        type: 'fdc3.instrument',
        id: { ticker: 'IBM' },
        testName: 'ACMultipleOverlappingListeners',
      });
      log.appendChild(document.createElement('div')).textContent = 'Starting: ACMultipleOverlappingListeners';
    },
    // User Channel tests (payload contains channelId to broadcast on)
    UCBasicUsage1: async payload => {
      if (payload?.channelId) {
        // 3. Join the channel
        await agent.joinUserChannel(payload.channelId);
        // 4. Broadcast
        await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCB1' }, testName: 'UCBasicUsage1' });
        log.appendChild(document.createElement('div')).textContent = 'Starting: UCBasicUsage1';
      }
    },
    UCBasicUsage2: async payload => {
      if (payload?.channelId) {
        // 3. Join the channel
        await agent.joinUserChannel(payload.channelId);
        // 4. Broadcast
        await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCB2' }, testName: 'UCBasicUsage2' });
        log.appendChild(document.createElement('div')).textContent = 'Starting: UCBasicUsage2';
      }
    },
    UCBasicUsage3: async payload => {
      if (payload?.channelId) {
        // 3. Join the channel
        await agent.joinUserChannel(payload.channelId);
        // 4. Broadcast
        await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCB3' }, testName: 'UCBasicUsage3' });
        log.appendChild(document.createElement('div')).textContent = 'Starting: UCBasicUsage3';
      }
    },
    UCBasicUsage4: async payload => {
      if (payload?.channelId) {
        // 3. Join the channel
        await agent.joinUserChannel(payload.channelId);
        // 4. Broadcast
        await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCB4' }, testName: 'UCBasicUsage4' });
        log.appendChild(document.createElement('div')).textContent = 'Starting: UCBasicUsage4';
      }
    },
    UCFilteredUsage1: async payload => {
      await agent.broadcast({ type: 'fdc3.contact', name: 'NoListen', testName: 'UCFilteredUsage1' });
      await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCF1' }, testName: 'UCFilteredUsage1' });
    },
    UCFilteredUsage2: async payload => {
      await agent.broadcast({ type: 'fdc3.contact', name: 'NoListen', testName: 'UCFilteredUsage2' });
      await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCF2' }, testName: 'UCFilteredUsage2' });
    },
    UCFilteredUsage3: async payload => {
      await agent.broadcast({ type: 'fdc3.contact', name: 'NoListen', testName: 'UCFilteredUsage3' });
      await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCF3' }, testName: 'UCFilteredUsage3' });
    },
    UCFilteredUsage4: async payload => {
      await agent.broadcast({ type: 'fdc3.contact', name: 'NoListen', testName: 'UCFilteredUsage4' });
      await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCF4' }, testName: 'UCFilteredUsage4' });
    },
    UCFilteredUsage5: async payload => {
      await agent.broadcast({ type: 'fdc3.contact', name: 'YesListen', testName: 'UCFilteredUsage5' });
      await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCF5' }, testName: 'UCFilteredUsage5' });
    },
    UCFilteredUsage6: async payload => {
      // join a different channel from payload.channelId and then broadcast
      const channels = await agent.getUserChannels();
      const different = channels.find((c: any) => c.id !== 'global' && c.id !== payload?.channelId);
      if (different) {
        await agent.joinUserChannel(different.id);
      }
      await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCF6' }, testName: 'UCFilteredUsage6' });
    },
    UCFilteredUsageChange: async payload => {
      // B stays on original; A will move away
      await agent.broadcast({
        type: 'fdc3.instrument',
        id: { ticker: 'UCFChange' },
        testName: 'UCFilteredUsageChange',
      });
    },
    UCFilteredUsageUnsubscribe: async payload => {
      await agent.broadcast({
        type: 'fdc3.instrument',
        id: { ticker: 'UCFUnsub' },
        testName: 'UCFilteredUsageUnsubscribe',
      });
    },
    UCFilteredUsageLeave: async payload => {
      await agent.broadcast({ type: 'fdc3.instrument', id: { ticker: 'UCFLeave' }, testName: 'UCFilteredUsageLeave' });
    },
    UCFilteredUsageNoJoin: async payload => {
      // A never joins; just broadcast
      await agent.broadcast({
        type: 'fdc3.instrument',
        id: { ticker: 'UCFNoJoin' },
        testName: 'UCFilteredUsageNoJoin',
      });
    },
  };
  ``;
  await agent.addIntentListener('custom.instruction', async intent => {
    await testTasks[intent.name as keyof typeof testTasks]?.(intent);
    log.appendChild(document.createElement('div')).textContent = JSON.stringify(intent);
    log.appendChild(document.createElement('div')).textContent = 'Done';
    // window.close();
  });

  log.appendChild(document.createElement('div')).textContent = 'Listening to test-channel';
  await agent.raiseIntent('custom.health', { type: 'custom.opened' });
})();
