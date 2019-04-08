import bip39 from 'bip39';
import bip32 from 'bip32';
import bitcoin from 'bitcoinjs-lib';
import bip38 from 'bip38';
import store from 'store';
import { BigNumber } from 'bignumber.js';
import { default as queryString } from 'query-string';
import WAValidator from 'wallet-address-validator';
import device from 'current-device';
import uniqid from 'uniqid';

export const isEmpty = (value) => {
  return isNaN(value) || value === undefined || value === '';
};
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
    if (!isNaN(baseValue)) {
      return Number(inputValue) >= Number(baseValue) ? errMsg : '';
    }
    return errMsg;
  },
  smallerOrEqual: (inputValue, baseValue, errMsg = '余额不足') => {
    if (!isNaN(inputValue) && !isNaN(baseValue)) {
      return Number(inputValue) > Number(baseValue) ? errMsg : '';
    }
  },
  characterLength: (inputValue = '', minLength, maxLength) => {
    let result = inputValue.length >= minLength ? '' : `最少${minLength}个字符`;
    result = inputValue.length > maxLength ? `最多${maxLength}个字符` : result;
    return result;
  },
  isBTCAddress: (value, errMsg = '地址格式错误') => {
    return WAValidator.validate(value, 'BTC', 'test') ? '' : errMsg;
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
  isValidPassword: (encryptedKey, password, errMsg = '密码错误') => {
    try {
      bip38.decrypt(encryptedKey, password, () => {}, {
        N: 128, // specified by BIP38
        r: 8,
        p: 8,
      });
    } catch (e) {
      console.log(e);
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

export const formatNumber = {
  toPrecision: (value, precision = 0, multiplication = false) => {
    precision = Number(precision);
    if (isEmpty(value) || isEmpty(precision) || isNaN(value)) return '';
    if (multiplication)
      return new BigNumber(value).multipliedBy(Math.pow(10, precision)).toFixed(0);
    return new BigNumber(value).dividedBy(Math.pow(10, precision)).toFixed(precision);
  },
  toBtcPrecision: (value, multiplication = false) => {
    return formatNumber.toPrecision(value, 8, multiplication);
  },
};

export const setBlankSpace = (value, unit) => {
  if (isEmpty(value)) return unit;
  return `${value} ${unit}`;
};

export const parseQueryString = (payload) => {
  return queryString.parse(payload);
};

export const bitJS = {
  generateMnemonic: () => bip39.generateMnemonic(),
  hexToAscii: (str) => {
    if (!/^(0x)?[\da-fA-F]+$/.test(str)) {
      return '';
    }
    const hexString = str.startsWith('0x') ? str.substring(2) : str;
    if (hexString.length % 2 === 1) {
      return '';
    }

    let strOut = '';
    for (let x = 0; x < hexString.length; x += 2) {
      strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
    }
    return strOut;
  },
  generateAccount: ({ name, mnemonic, password, wif }) => {
    let account;
    const path = "m/44'/1'/0'/0/0";
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
    } else if (name && wif && password) {
      // TODO: 需要根据环境变量来切换network
      const keyPair = bitcoin.ECPair.fromWIF(wif, bitcoin.networks.testnet);
      const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
      const encryptedKey = bip38.encrypt(
        keyPair.privateKey,
        keyPair.compressed,
        password,
        console.log,
        params,
      );
      account = { name, address, encryptedKey };
    }
    return account;
  },

  decrypt: (encryptedKey, password) => {
    const result = bip38.decrypt(encryptedKey, password, () => {}, {
      N: 128, // specified by BIP38
      r: 8,
      p: 8,
    });

    console.log(result);
    return result;
  },
};

export const Device = {
  isMobile: () => device.mobile(),
  isDesktop: () => device.desktop(),
};

export const fetchFromHttp = ({
  url,
  method = 'POST',
  methodAlias,
  params = [],
  body,
  timeOut = 10000,
  ...rest
}) => {
  const id = uniqid();
  const message = body
    ? JSON.stringify(body)
    : JSON.stringify({ id, jsonrpc: '2.0', method: methodAlias, params });
  const request = () =>
    fetch(url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...(method.toUpperCase() === 'GET' ? {} : { body: message }),
      ...rest,
    })
      .then(async (res) => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          const result = await res.json();
          return Promise.reject({
            status: res.status,
            message: result,
          });
        }
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  if (timeOut) {
    return Promise.race([
      request(),
      new Promise((resovle, reject) => {
        setTimeout(() => {
          reject('请求超时');
        }, timeOut);
      }),
    ]);
  } else {
    return request();
  }
};
