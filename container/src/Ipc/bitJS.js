const { bitX } = require("../utils/bitX");
const { Patterns } = require("../utils/patterns");
const generateMnemonic = event => (event.returnValue = bitX.generateMnemonic());

const generateAccount = async (event, arg) => {
  const result = await bitX.generateAccount(arg);
  event.returnValue = JSON.stringify(result);
};

const decrypt = (event, arg) => {
  const result = bitX.decrypt(...arg);
  event.returnValue = JSON.stringify(result);
};

const isValidPassword = (event, arg) =>
  (event.returnValue = Patterns.check("isValidPassword")(...arg));

module.exports = {
  generateMnemonic,
  generateAccount,
  decrypt,
  isValidPassword
};
