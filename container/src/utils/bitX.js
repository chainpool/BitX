const bip39 = require("bip39");
const bip32 = require("bip32");
const bitcoin = require("bitcoinjs-lib");
const bip38 = require("bip38-fix");
const BigNumber = require("bignumber.js");

function getNetworkKey(network) {
  if (network === bitcoin.networks.bitcoin) {
    return "mainnet";
  } else if (network === bitcoin.networks.testnet) {
    return "testnet";
  } else {
    return "";
  }
}

const bitX = {
  generateMnemonic: () => bip39.generateMnemonic(),
  generateAccount: async ({
    name,
    mnemonic,
    password,
    wif,
    network: networkType
  }) => {
    const network =
      networkType === "mainnet"
        ? bitcoin.networks.bitcoin
        : bitcoin.networks.testnet;

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
      const seed = await bip39.mnemonicToSeed(mnemonic);
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
      const keyPair = bitcoin.ECPair.fromWIF(wif, network);
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
      N: 128, // specified by BIP38
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
    network
  ) => {
    network =
      network === "mainnet"
        ? bitcoin.networks.bitcoin
        : bitcoin.networks.testnet;
    const ecpair = bitX.decryptPair(encryptedKey, password, network);

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

      const txb = new bitcoin.TransactionBuilder(network);

      let sum = 0;
      for (let utxo of filteredUtxos) {
        txb.addInput(utxo.mintTxid, utxo.mintIndex);
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

bitX.generateAccount({
  name: "wei",
  password: "12345678",
  mnemonic:
    "civil tilt issue music tomorrow outer journey iron post zoo control relax\n"
});

exports.bitX = bitX;
