import { ipc } from "./ipc";
import { bitX } from "./bitX";
import { localSave } from "./index";
import { Patterns } from "./patterns";

export const bitJS = {
  generateMnemonic: () => {
    if (ipc) {
      return ipc.sendSync("GENERATE_MNEMONIC");
    } else {
      return bitX.generateMnemonic();
    }
  },
  generateAccount: payload => {
    if (ipc) {
      return JSON.parse(ipc.sendSync("GENERATE_ACCOUNT", payload));
    } else {
      return bitX.generateAccount(payload);
    }
  },

  decrypt: (...payload) => {
    if (ipc) {
      return ipc.sendSync("DECRYPT", payload);
    } else {
      return bitX.decrypt(...payload);
    }
  },
  saveAccount: accounts => {
    if (ipc) {
      ipc.send("SAVE_ACCOUNT", JSON.stringify(accounts));
    } else {
      localSave.set("accounts", accounts);
    }
  },
  getAccount: () => {
    if (ipc) {
      return JSON.parse(ipc.sendSync("GET_ACCOUNT"));
    } else {
      return localSave.get("accounts");
    }
  },
  sign: (...payload) => {
    if (ipc) {
      return ipc.sendSync("SIGN", payload);
    } else {
      return bitX.sign(...payload);
    }
  },
  isValidPassword: (...payload) => {
    if (ipc) {
      return ipc.sendSync("IS_VALID_PASSWORD", payload);
    } else {
      return Patterns.check("isValidPassword")(...payload);
    }
  },
  update: () => {
    if (ipc) {
      ipc.send("UPDATE");
    }
  },
  forceUpdate: () => {
    if (ipc) {
      ipc.send("FORCE_UPDATE");
    }
  }
};
if (ipc) {
  ipc.on("isForceUpdate", () => {
    const res = window.confirm("已下载最新版本，是否立即安装?");
    if (res) {
      bitJS.forceUpdate();
    }
  });
  ipc.on("autoUpdater", (e, arg) => {
    console.log(arg);
  });
}
