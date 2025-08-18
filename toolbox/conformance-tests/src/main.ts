import './BasicTest';
import './AppChannelTest';
import './UserChannelTest';

declare global {
  interface Window {
    mocha: any;
  }
}

window.mocha?.run?.();
