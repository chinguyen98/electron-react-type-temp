import { API_APP } from '../bridgeApiEntries';
import { IBridgeAppApi } from '../bridgeInterface';

declare global {
  interface Window {
    [API_APP]?: IBridgeAppApi;
  }
}

import './index.css';
import './index.tsx';

console.log('👋 This message is being logged by "renderer.js", included via webpack');
