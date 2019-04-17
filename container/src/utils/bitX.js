const bip39 = require("bip39");
const bip32 = require("bip32");
const bitcoin = require("bitcoinjs-lib");
const bip38 = require("bip38");

exports.bitX = {
  generateMnemonic: () => bip39.generateMnemonic(),
  generateAccount: async ({ name, mnemonic, password, wif }) => {
    let account;
    const path = "m/44'/1'/0'/0/0";
    const params = {
      N: 128, // specified by BIP38
      r: 8,
      p: 8
    };
    if (name && mnemonic && password) {
      const seed = await bip39.mnemonicToSeed(mnemonic);
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
    return result;
  }
};
