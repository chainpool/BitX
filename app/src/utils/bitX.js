import bip39 from "bip39";
import bip32 from "bip32";
import bip38 from "bip38";
import bitcoin from "bitcoinjs-lib";
import { bitJS } from "./bitJS";
import { compose } from "../components/Detail/bitcoin";

export const bitX = {
  generateMnemonic: () => bip39.generateMnemonic(),
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
      const { address } = bitcoin.payments.p2pkh({
        pubkey: keyPair.publicKey,
        network: bitcoin.networks.testnet
      });
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
    return bip38.decrypt(encryptedKey, password, () => {}, {
      N: 128,
      r: 8,
      p: 8
    });
  },
  decryptPair: (encryptedKey, password) => {
    const result = bitJS.decrypt(encryptedKey, password);
    return bitcoin.ECPair.fromPrivateKey(result.privateKey, {
      compressed: result.compressed,
      network: bitcoin.networks.testnet
    });
  },
  sign: (...payload) => {
    return compose(...payload);
  }
};
