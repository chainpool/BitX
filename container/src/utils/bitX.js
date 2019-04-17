const bip39 = require("bip39");
const bip32 = require("bip32");
const bitcoin = require("bitcoinjs-lib");
const bip38 = require("bip38");
const BigNumber = require("bignumber.js");

const bitX = {
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
    return bip38.decrypt(encryptedKey, password, () => {}, {
      N: 128, // specified by BIP38
      r: 8,
      p: 8
    });
  },
  decryptPair: (encryptedKey, password) => {
    const result = bitX.decrypt(encryptedKey, password);
    return bitcoin.ECPair.fromPrivateKey(result.privateKey, {
      compressed: result.compressed,
      network: bitcoin.networks.testnet
    });
  },
  sign: (
    utxos,
    changeAddress,
    targetAddress,
    amount,
    fee,
    opReturnHex,
    ecpair
  ) => {
    const filterUnspentsByAmount = (unspents, amount, fee) => {
      const nonZeroUnspents = unspents.filter(
        utxo => new BigNumber(utxo.value) > 0
      );

      const result = [];
      let sum = 0;
      for (let utxo of nonZeroUnspents) {
        result.push(utxo);
        sum += utxo.value;
        if (sum >= amount + fee) {
          break;
        }
      }

      return sum >= amount + fee ? result : [];
    };
    try {
      const filteredUtxos = filterUnspentsByAmount(utxos, amount, fee);

      // const network =
      //   process.env.NODE_ENV === 'production' ? bitcoin.networks.bitcoin : bitcoin.networks.testnet;
      const network = bitcoin.networks.testnet;
      const txb = new bitcoin.TransactionBuilder(network);

      let sum = 0;
      for (let utxo of filteredUtxos) {
        txb.addInput(utxo.tx_hash, utxo.tx_output_n);
        sum += utxo.value;
      }

      txb.addOutput(targetAddress, amount);
      const change = sum - amount - fee;
      if (change > 1000) {
        txb.addOutput(changeAddress, change);
      }

      if (opReturnHex) {
        const embed = bitcoin.payments.embed({
          data: [Buffer.from(opReturnHex, "hex")]
        });
        txb.addOutput(embed.output, 0);
      }

      filteredUtxos.forEach((utxo, index) => {
        txb.sign(index, ecpair);
      });
      const tx = txb.build();
      return tx.toHex();
    } catch (err) {
      return {
        message: err.message
      };
    }
  }
};

exports.bitX = bitX;
