export function isPromise(value: unknown): value is Promise<unknown> {
  return !!value && typeof (value as any).then === 'function';
}

export function waitFor(condition: () => boolean, timeout: number = 100) {
  return new Promise((resolve, reject) => {
    let valve = timeout;
    const interval = setInterval(() => {
      if (condition()) {
        clearInterval(interval);
        resolve(true);
      }
      valve--;
      if (valve <= 0) {
        clearInterval(interval);
        reject(new Error('Timeout waiting for condition'));
      }
    }, 100);
  });
}

export function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
