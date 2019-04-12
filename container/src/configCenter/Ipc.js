const { ipcMain } = require("electron");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const { writeFilePromise, readFilePromise } = require("../utils");

const filePath = path.join(process.cwd(), "userAccounts.json");

ipcMain.on("SAVE_ACCOUNT", async (event, arg) => {
  try {
    await writeFilePromise(filePath, arg);
  } catch (err) {
    console.log(err);
  }
});

ipcMain.on("GET_ACCOUNT", async event => {
  try {
    const res = await readFilePromise(filePath);
    event.returnValue = res.toString();
  } catch (err) {
    console.log(err);
    event.returnValue = JSON.stringify([]);
  }
});

ipcMain.on("update", (event, arg) => {
  autoUpdater.on("update-downloaded", function() {
    autoUpdater.quitAndInstall();
  });

  autoUpdater.checkForUpdatesAndNotify();
});

module.exports = ipcMain;
