const path = require("path");
const mkdirp = require("mkdirp");
const { writeFilePromise, readFilePromise, bitXDataPath } = require("../utils");

const filePath = path.join(bitXDataPath(), "userAccounts.json");

const saveAccount = async (event, arg) => {
  try {
    mkdirp.sync(bitXDataPath());
    await writeFilePromise(filePath, arg);
  } catch (err) {
    console.log(err, "userAccounts.json写入报错");
  }
};

const getAccount = async event => {
  try {
    const res = await readFilePromise(filePath);
    event.returnValue = res.toString();
  } catch (err) {
    event.returnValue = JSON.stringify([]);
  }
};

module.exports = {
  saveAccount,
  getAccount
};
