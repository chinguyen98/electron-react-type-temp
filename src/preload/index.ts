import { contextBridge } from 'electron';
import appRenderer from './app';

contextBridge.exposeInMainWorld('api', {
  ...appRenderer,
});
