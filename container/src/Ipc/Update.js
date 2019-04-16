const autoUpdater = require("electron-updater");

const update = () => {
  autoUpdater.on("update-downloaded", function() {
    autoUpdater.quitAndInstall();
  });

  autoUpdater.checkForUpdatesAndNotify();
};

module.exports = {
  update
};
