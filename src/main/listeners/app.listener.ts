import { ipcMain, app } from 'electron';
import CHANNELS from '../../channels';

const quitApp = () => {
  ipcMain.on(CHANNELS.APP.QUIT, () => {
    app.quit();
  });
};

const appListener = () => {
  quitApp();
};

export default appListener;
