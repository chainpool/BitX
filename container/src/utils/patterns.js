const bip38 = require("bip38-fix");

const Patterns = {
  isValidPassword: (encryptedKey, password, errMsg = "密码错误") => {
    try {
      bip38.decrypt(encryptedKey, password, () => {}, {
        N: 128,
        r: 8,
        p: 8
      });
    } catch (e) {
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

exports.Patterns = Patterns;
