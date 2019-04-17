import bip39 from "bip39";
import bip32 from "bip32";
import bitcoin from "bitcoinjs-lib";
import bip38 from "bip38";

export const bitJS = {
  generateMnemonic: () => bip39.generateMnemonic(),
  hexToAscii: str => {
    if (!/^(0x)?[\da-fA-F]+$/.test(str)) {
      return "";
    }
    const hexString = str.startsWith("0x") ? str.substring(2) : str;
    if (hexString.length % 2 === 1) {
      return "";
    }

    let strOut = "";
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
      p: 8
    };
    if (name && mnemonic && password) {
      const seed = bip39.mnemonicToSeed(mnemonic);
      const root = bip32.fromSeed(seed);
      const child1 = root.derivePath(path);
      const p2pkh = bitcoin.payments.p2pkh({
        pubkey: child1.publicKey,
        network: bitcoin.networks.testnet
      });
      const encryptedKey = bip38.encrypt(
        child1.privateKey,
        true,
        password,
        null,
        params
      );
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
        params
      );
      account = { name, address, encryptedKey };
    }
    return account;
  },

  decrypt: (encryptedKey, password) => {
    const result = bip38.decrypt(encryptedKey, password, () => {}, {
      N: 128, // specified by BIP38
      r: 8,
      p: 8
    });

    console.log(result);
    return result;
  }
};
