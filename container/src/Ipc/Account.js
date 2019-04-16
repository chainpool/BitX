const path = require("path");
const { writeFilePromise, readFilePromise } = require("../utils");

const filePath = path.join(process.cwd(), "userAccounts.json");

const saveAccount = async (event, arg) => {
  try {
    await writeFilePromise(filePath, arg);
  } catch (err) {
    // console.log(err)
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
