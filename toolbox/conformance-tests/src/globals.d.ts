import type { ExpectStatic } from 'chai';

declare global {
  const expect: ExpectStatic;

  interface Window {
    expect: ExpectStatic;
  }
}

export {};
