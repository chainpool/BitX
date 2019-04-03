import bip39 from 'bip39';
import bip32 from 'bip32';
import bitcoin from 'bitcoinjs-lib';
import bip38 from 'bip38';
import wif from 'wif';
export const isNumber = (value) => typeof value === 'number';

export const isFunction = (fun) => typeof fun === 'function';

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
  generateAccoumt: ({ name, mnemonic, password, privateKey }) => {
    let account;
    const path = "m/0'/0/0";
    const params = {
      N: 128, // specified by BIP38
      r: 8,
      p: 8,
    };
    if (name && mnemonic && password) {
      const seed = bip39.mnemonicToSeed(mnemonic.join(' '));
      const root = bip32.fromSeed(seed);
      const child1 = root.derivePath(path);
      const p2pkh = bitcoin.payments.p2pkh({
        pubkey: child1.publicKey,
        network: bitcoin.networks.testnet,
      });
      const encryptedKey = bip38.encrypt(child1.privateKey, true, password, null, params);
      account = { name, address: p2pkh.address, encryptedKey };
    } else {
      const keyPair = bitcoin.ECPair.fromWIF(privateKey);
      const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
      const encryptedKey = bip38.encrypt(privateKey, true, password, null, params);
      account = { name, address, encryptedKey };
    }
    return account;
  },
};

const words = bip39.generateMnemonic().split(' ');

console.log(
  bitJS.generateAccoumt({ name: 'wei', mnemonic: words, password: '123456' }),
  '----账户',
);
//console.log(wif());
