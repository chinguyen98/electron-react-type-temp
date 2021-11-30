import { ipcRenderer } from 'electron';
import CHANNELS from '../channels';

const quitApp = () => {
  ipcRenderer.send(CHANNELS.APP.QUIT);
};

const appRenderer = {
  quitApp,
};

export default appRenderer;
