import bip39 from "bip39";
import bitcoin from "bitcoinjs-lib";
import bip38 from "bip38";
import WAValidator from "wallet-address-validator";

export const Patterns = {
  required: (value, errMsg = "必填") => {
    return !value && value !== 0 ? errMsg : "";
  },
  equal: (value1, value2, errMsg = "不相等") => {
    if (value1 && value2) {
      return value1 === value2 ? "" : errMsg;
    }
    return "";
  },
  strictEqual: (value1, value2, errMsg = "不相等") => {
    return value1 === value2 ? "" : errMsg;
  },
  smaller: (inputValue, baseValue, errMsg = "余额不足") => {
    if (!isNaN(baseValue)) {
      return Number(inputValue) >= Number(baseValue) ? errMsg : "";
    }
    return errMsg;
  },
  smallerOrEqual: (inputValue, baseValue, errMsg = "余额不足") => {
    if (!isNaN(inputValue) && !isNaN(baseValue)) {
      return Number(inputValue) > Number(baseValue) ? errMsg : "";
    }
  },
  characterLength: (inputValue = "", minLength, maxLength) => {
    let result = inputValue.length >= minLength ? "" : `最少${minLength}个字符`;
    result = inputValue.length > maxLength ? `最多${maxLength}个字符` : result;
    return result;
  },
  isBTCAddress: (value, errMsg = "地址格式错误") => {
    return WAValidator.validate(value, "BTC", "test") ? "" : errMsg;
  },
  isValidMnemonic: (value, errMsg = "助记词格式错误") => {
    return bip39.validateMnemonic(value) ? "" : errMsg;
  },
  isValidPrivateKey: (value, errMsg = "私钥格式错误") => {
    try {
      bitcoin.ECPair.fromWIF(value, bitcoin.networks.testnet);
      return "";
    } catch {
      return errMsg;
    }
  },
  isValidPassword: (encryptedKey, password, errMsg = "密码错误") => {
    try {
      bip38.decrypt(encryptedKey, password, () => {}, {
        N: 128, // specified by BIP38
        r: 8,
        p: 8
      });
    } catch (e) {
      console.log(e);
      console.log(e.actual, e.expected, e.actual === e.expected);
      return errMsg;
    }
  },
  check: value => {
    return (...params) => {
      if (!Patterns[value]) {
        return console.error("check对应的方法必须存在");
      }
      return Patterns[value](...params);
    };
  }
};
