const fs = require("fs");
const util = require("util");
const child_process = require("child_process");
const { app } = require("electron");

exports.accessPromise = util.promisify(fs.access);
exports.mkdirPromise = util.promisify(fs.mkdir);
exports.writeFilePromise = util.promisify(fs.writeFile);
exports.readFilePromise = util.promisify(fs.readFile);

exports.execPromise = (command, options = {}) => {
  return new Promise(function(resolve, reject) {
    child_process.exec(command, options, (error, stdout) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(stdout.trim());
    });
  });
};

exports.streamPromise = (input, output) => {
  let ended = false;
  function end() {
    if (!ended) {
      ended = true;
      output.close && output.close();
      input.close && input.close();
      return true;
    }
  }

  return new Promise((resolve, reject) => {
    function niceEnding() {
      if (end()) resolve();
    }

    function errorEnding(error) {
      if (end()) reject(error);
    }

    input.pipe(output);
    input.on("error", errorEnding);

    output.on("finish", niceEnding);
    output.on("end", niceEnding);
    output.on("error", errorEnding);
  });
};

exports.bitXDataPath = () => {
  let bitXDataPath;
  switch (process.platform) {
    case "win32":
      bitXDataPath = `${app.getPath("appData")}/BitX`;
      break;
    case "darwin":
      bitXDataPath = `${app.getPath("home")}/Library/Application Support/BitX`;
      break;
    case "linux":
      bitXDataPath = `${app.getPath("home")}/.bitX`;
  }
  return bitXDataPath;
};
