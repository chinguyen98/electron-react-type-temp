const CHANNELS = require('./../channels.ts');
const { ipcRenderer } = require('electron');

const quitApp = () => {
  ipcRenderer.send(CHANNELS.APP.QUIT);
};

module.exports = {
  quitApp,
};
