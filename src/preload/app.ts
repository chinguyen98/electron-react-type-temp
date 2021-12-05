import { contextBridge, ipcRenderer, app } from 'electron';
import { API_APP } from '../bridgeApiEntries';
import { IBridgeAppApi } from '../bridgeInterface';
import CHANNELS from '../channels';

const quitApp = () => {
  ipcRenderer.send(CHANNELS.APP.QUIT);
};

const writeSomeThing = (something: string) => {
  ipcRenderer.invoke(CHANNELS.APP.WRITE_ST, something);
};

const asyncGetRandom = async (): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 3000);
  });
};

const getAppVersion = async (): Promise<string> => {
  return await ipcRenderer.invoke(CHANNELS.APP.GET_VERSION);
};

const appRenderer: IBridgeAppApi = {
  quitApp,
  writeSomeThing,
  asyncGetRandom,
  getAppVersion,
};

contextBridge.exposeInMainWorld(API_APP, {
  ...appRenderer,
});
