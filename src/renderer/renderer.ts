import { IBridgeAppApi } from '../bridgeInterface';

declare global {
  interface Window {
    appApi?: IBridgeAppApi;
  }
}

import './index.css';
import './index.tsx';

console.log('👋 This message is being logged by "renderer.js", included via webpack');
