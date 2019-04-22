const { autoUpdater } = require("electron-updater");

const checkUpdate = () => {
  autoUpdater.on("update-downloaded", function() {
    autoUpdater.quitAndInstall();
  });
  autoUpdater.checkForUpdatesAndNotify();
};

module.exports = {
  checkUpdate
};
