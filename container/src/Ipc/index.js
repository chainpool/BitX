const { ipcMain } = require("electron");
const { saveAccount, getAccount } = require("./Account");
const {
  generateMnemonic,
  generateAccount,
  decrypt,
  sign,
  isValidPassword
} = require("./bitJS");
const { checkUpdate, forceUpdate } = require("./Update");

ipcMain.on("SAVE_ACCOUNT", saveAccount);

ipcMain.on("GET_ACCOUNT", getAccount);

ipcMain.on("GENERATE_MNEMONIC", generateMnemonic);

ipcMain.on("GENERATE_ACCOUNT", generateAccount);

ipcMain.on("DECRYPT", decrypt);

ipcMain.on("SIGN", sign);

ipcMain.on("IS_VALID_PASSWORD", isValidPassword);

ipcMain.on("UPDATE", checkUpdate);

ipcMain.on("FORCE_UPDATE", forceUpdate);

module.exports = ipcMain;
