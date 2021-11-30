import { ipcRenderer } from 'electron';
import CHANNELS from '../channels';

const quitApp = () => {
  ipcRenderer.send(CHANNELS.APP.QUIT);
};

const writeSomeThing = (something: string) => {
  ipcRenderer.invoke(CHANNELS.APP.WRITE_ST, something);
};

const appRenderer = {
  quitApp,
  writeSomeThing,
};

export default appRenderer;
