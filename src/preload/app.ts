import { contextBridge, ipcRenderer } from 'electron';
import { API_APP } from '../bridgeApiEntries';
import { IBridgeAppApi } from '../bridgeInterface';
import CHANNELS from '../channels';

const quitApp = () => {
  ipcRenderer.send(CHANNELS.APP.QUIT);
};

const writeSomeThing = (something: string) => {
  ipcRenderer.invoke(CHANNELS.APP.WRITE_ST, something);
};

const appRenderer: IBridgeAppApi = {
  quitApp,
  writeSomeThing,
};

contextBridge.exposeInMainWorld(API_APP, {
  ...appRenderer,
});
