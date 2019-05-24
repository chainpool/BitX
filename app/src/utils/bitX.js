import bip39 from "bip39";
import bip32 from "bip32";
import bip38 from "bip38";
import bitcoin from "bitcoinjs-lib";
import { compose } from "../components/Detail/bitcoin";

function getNetworkKey(network) {
  if (network === bitcoin.networks.bitcoin) {
    return "mainnet";
  } else if (network === bitcoin.networks.testnet) {
    return "testnet";
  } else {
    return "";
  }
}

export const bitX = {
  generateMnemonic: () => bip39.generateMnemonic(),
  generateAccount: (
    { name, mnemonic, password, wif },
    network = bitcoin.networks.testnet
  ) => {
    let account;
    let path = "m/44'/1'/0'/0/0";
    if (network === bitcoin.networks.bitcoin) {
      path = "m/44'/0'/0'/0/0";
    }
    const params = {
      N: 128, // specified by BIP38
      r: 8,
      p: 8
    };
    if (name && mnemonic && password) {
      const seed = bip39.mnemonicToSeed(mnemonic);
      const root = bip32.fromSeed(seed, network);
      const child1 = root.derivePath(path);
      const p2pkh = bitcoin.payments.p2pkh({
        pubkey: child1.publicKey,
        network
      });
      const encryptedKey = bip38.encrypt(
        child1.privateKey,
        true,
        password,
        null,
        params
      );
      account = {
        name,
        address: p2pkh.address,
        encryptedKey,
        network: getNetworkKey(network)
      };
    } else if (name && wif && password) {
      let keyPair;
      if (/^(0x)?[\da-zA-Z]{64}$/.test(wif)) {
        keyPair = bitcoin.ECPair.fromPrivateKey(Buffer.from(wif, "hex"), {
          network
        });
      } else {
        keyPair = bitcoin.ECPair.fromWIF(wif, network);
      }
      const { address } = bitcoin.payments.p2pkh({
        pubkey: keyPair.publicKey,
        network
      });
      const encryptedKey = bip38.encrypt(
        keyPair.privateKey,
        keyPair.compressed,
        password,
        null,
        params
      );
      account = {
        name,
        address,
        encryptedKey,
        network: getNetworkKey(network)
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
  decryptPair: (encryptedKey, password, network = bitcoin.networks.testnet) => {
    const result = bitX.decrypt(encryptedKey, password);
    return bitcoin.ECPair.fromPrivateKey(result.privateKey, {
      compressed: result.compressed,
      network
    });
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
    network = "mainnet"
  ) => {
    const ecpair = bitX.decryptPair(encryptedKey, password, network);
    return compose(
      utxos,
      changeAddress,
      targetAddress,
      amount,
      fee,
      opReturnHex,
      ecpair,
      network === "mainnet"
        ? bitcoin.networks.bitcoin
        : bitcoin.networks.testnet
    );
  }
};
