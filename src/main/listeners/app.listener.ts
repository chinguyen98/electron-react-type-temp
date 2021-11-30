import { ipcMain, app } from 'electron';
import CHANNELS from '../../channels';

const quitApp = (): void => {
  ipcMain.on(CHANNELS.APP.QUIT, (): void => {
    app.quit();
  });
};

const writeSomeThing = (): void => {
  ipcMain.handle(CHANNELS.APP.WRITE_ST, (_, something: string): void => {
    console.log(`This is something write from renderer: ${something}`);
  });
};

const appListener = (): void => {
  quitApp();
  writeSomeThing();
};

export default appListener;
