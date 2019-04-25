const { autoUpdater } = require("electron-updater");

const checkUpdate = () => {
  console.log("hhhhhh");
  autoUpdater.on("update-downloaded", function() {
    autoUpdater.quitAndInstall();
  });
  autoUpdater.checkForUpdatesAndNotify();
};

module.exports = {
  checkUpdate
};
