import bip39 from "bip39";
import bip32 from "bip32";
import bip38 from "bip38";
import dogecoin from "bitcore-lib-doge";
import { compose } from "../components/Detail/bitcoin";

export const bitX = {
  generateMnemonic: () => bip39.generateMnemonic(),
  generateAccount: ({ name, mnemonic, password, wif }, network) => {
    let account;
    const params = {
      N: 128, // specified by BIP38
      r: 8,
      p: 8
    };
    if (name && mnemonic && password) {
      const value = Buffer.from(mnemonic);
      const hash = dogecoin.crypto.Hash.sha256(value);
      const bn = dogecoin.crypto.BN.fromBuffer(hash);

      const keyPair = new dogecoin.PrivateKey(bn);

      const encryptedKey = bip38.encrypt(
        Buffer.from(keyPair.toString(), "hex"),
        false,
        password,
        null,
        params
      );
      account = {
        name,
        address: keyPair.toAddress().toString(),
        encryptedKey,
        network
      };
    } else if (name && wif && password) {
      let keyPair = dogecoin.PrivateKey.fromWIF(wif);
      const encryptedKey = bip38.encrypt(
        Buffer.from(keyPair.toString(), "hex"),
        false,
        password,
        null,
        params
      );
      account = {
        name,
        address: keyPair.toAddress().toString(),
        encryptedKey,
        network
      };
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
  getNetwork: network => {
    if (network === "testnet") {
      return dogecoin.Networks.testnet;
    } else {
      return dogecoin.Networks.mainnet;
    }
  },
  decryptPair: (encryptedKey, password, network) => {
    const result = bitX.decrypt(encryptedKey, password);
    let keyPair = new dogecoin.PrivateKey(
      result.privateKey.toString("hex"),
      bitX.getNetwork(network)
    );
    console.log(keyPair.toWIF());
    return keyPair;
  },
  sign: (
    utxos,
    changeAddress,
    targetAddress,
    amount,
    fee,
    opReturnHex,
    encryptedKey,
    password,
    network
  ) => {
    const ecpair = bitX.decryptPair(encryptedKey, password, network);
    return compose(
      utxos,
      changeAddress,
      targetAddress,
      amount,
      fee,
      opReturnHex,
      ecpair
    );
  }
};
