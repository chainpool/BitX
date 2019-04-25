const { autoUpdater } = require("electron-updater");

const forceUpdate = () => {
  autoUpdater.quitAndInstall();
};

const checkUpdate = event => {
  event.sender.send("autoUpdater", "接到update命令");
  autoUpdater.on("checking-for-update", function() {
    event.sender.send("autoUpdater", "checking-for-update");
    console.log("checking-for-update");
  });
  autoUpdater.on("update-available", function(info) {
    event.sender.send("autoUpdater", "update-available" + JSON.stringify(info));
    console.log("update--available", info);
  });
  autoUpdater.on("update-not-available", function(info) {
    event.sender.send(
      "autoUpdater",
      "update-not-available" + JSON.stringify(info)
    );
    console.log("update-not-available", info);
  });
  autoUpdater.on("download-progress", function(info) {
    event.sender.send(
      "autoUpdater",
      "download-progress" + JSON.stringify(info)
    );
    console.log(info);
  });
  autoUpdater.on("update-downloaded", function() {
    event.sender.send("isForceUpdate");
  });

  autoUpdater.on("error", function(error) {
    event.sender.send("autoUpdater", "error" + error);
  });

  autoUpdater.checkForUpdatesAndNotify();
};

module.exports = {
  checkUpdate,
  forceUpdate
};
