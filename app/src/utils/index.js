import bip39 from 'bip39';
import bip32 from 'bip32';
import bitcoin from 'bitcoinjs-lib';
import bip38 from 'bip38';
import store from 'store';

export const isNumber = (value) => typeof value === 'number';

export const isFunction = (fun) => typeof fun === 'function';

export const localSave = {
  get: (key) => {
    return store.get(key);
  },
  set: (key, value) => {
    store.set(key, value);
  },
  remove: (key) => {
    store.remove(key);
  },
  clearAll: () => {
    store.clearAll();
  },
};

export const Patterns = {
  required: (value, errMsg = '必填') => {
    return !value && value !== 0 ? errMsg : '';
  },
  equal: (value1, value2, errMsg = '不相等') => {
    if (value1 && value2) {
      return value1 === value2 ? '' : errMsg;
    }
    return '';
  },
  strictEqual: (value1, value2, errMsg = '不相等') => {
    return value1 === value2 ? '' : errMsg;
  },
  smaller: (inputValue, baseValue, errMsg = '余额不足') => {
    if (!isNaN(inputValue) && !isNaN(baseValue)) {
      return Number(inputValue) >= Number(baseValue) ? errMsg : '';
    }
  },
  smallerOrEqual: (inputValue, baseValue, errMsg = '余额不足') => {
    if (!isNaN(inputValue) && !isNaN(baseValue)) {
      return Number(inputValue) > Number(baseValue) ? errMsg : '';
    }
  },
  characterLength: (inputValue = '', minLength, maxLength) => {
    let result = '';
    result = inputValue.length >= minLength ? '' : `最少${minLength}个字符`;
    result = inputValue.length > maxLength ? `最多${maxLength}个字符` : result;
    return result;
  },
  isValidMnemonic: (value, errMsg = '助记词格式错误') => {
    return bip39.validateMnemonic(value) ? '' : errMsg;
  },
  isValidPrivateKey: (value, errMsg = '私钥格式错误') => {
    try {
      bitcoin.ECPair.fromWIF(value, bitcoin.networks.testnet);
      return '';
    } catch {
      return errMsg;
    }
  },
  check: (value) => {
    return (...params) => {
      if (!Patterns[value]) {
        return console.error('check对应的方法必须存在');
      }
      return Patterns[value](...params);
    };
  },
};

export const bitJS = {
  generateMnemonic: () => bip39.generateMnemonic(),
  generateAccount: ({ name, mnemonic, password, wif }) => {
    let account;
    const path = "m/0'/0/0";
    const params = {
      N: 128, // specified by BIP38
      r: 8,
      p: 8,
    };
    if (name && mnemonic && password) {
      const seed = bip39.mnemonicToSeed(mnemonic);
      const root = bip32.fromSeed(seed);
      const child1 = root.derivePath(path);
      const p2pkh = bitcoin.payments.p2pkh({
        pubkey: child1.publicKey,
        network: bitcoin.networks.testnet,
      });
      const encryptedKey = bip38.encrypt(child1.privateKey, true, password, null, params);
      account = { name, address: p2pkh.address, encryptedKey };
    } else if (wif) {
      const keyPair = bitcoin.ECPair.fromWIF(wif, bitcoin.networks.testnet);
      const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
      const encryptedKey = bip38.encrypt(keyPair.privateKey.buffer, true, password, null, params);
      account = { name, address, encryptedKey };
    }
    return account;
  },
};

// const words = bip39.generateMnemonic();
// console.log(words);
// console.log(
//   bitJS.generateAccount({
//     wif: 'cSXvChvzizEv4CkC1rQ94VEjjHWhRsUJaPxTZsUUMV97sncmTvQa',
//     passowrd: '123',
//   }),
// );
//const wif = 'cSXvChvzizEv4CkC1rQ94VEjjHWhRsUJaPxTZsUUMV97sncmTvQa';
//console.log(bitJS.generateAccount({ name: 'wei', password: '123456', wif }), '----账户');
//console.log(wif());
