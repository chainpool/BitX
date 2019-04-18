const { ipcMain } = require("electron");
const { saveAccount, getAccount } = require("./Account");
const { update } = require("./Update");
const {
  generateMnemonic,
  generateAccount,
  decrypt,
  sign,
  isValidPassword
} = require("./bitJS");

ipcMain.on("SAVE_ACCOUNT", saveAccount);

ipcMain.on("GET_ACCOUNT", getAccount);

ipcMain.on("UPDATE", update);

ipcMain.on("GENERATE_MNEMONIC", generateMnemonic);

ipcMain.on("GENERATE_ACCOUNT", generateAccount);

ipcMain.on("DECRYPT", decrypt);

ipcMain.on("SIGN", sign);

ipcMain.on("IS_VALID_PASSWORD", isValidPassword);

module.exports = ipcMain;
