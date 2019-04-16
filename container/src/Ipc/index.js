const { ipcMain } = require("electron");

const { saveAccount, getAccount } = require("./Account");
const { update } = require("./Update");

ipcMain.on("SAVE_ACCOUNT", saveAccount);

ipcMain.on("GET_ACCOUNT", getAccount);

ipcMain.on("update", update);

module.exports = ipcMain;
