export const quitApp = () => {
  if (window.api) {
    window.api.quitApp();
  }
};
