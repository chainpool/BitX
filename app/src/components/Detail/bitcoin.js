import BigNumber from "bignumber.js";
import bitcoin from "bitcoinjs-lib";

export function enough(utxos, amount, fee) {
  const total = utxos.reduce((result, utxo) => result + utxo.value, 0);

  return total >= amount + fee;
}

function filterUnspentsByAmount(unspents, amount, fee) {
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
}

export function compose(
  utxos,
  changeAddress,
  targetAddress,
  amount,
  fee,
  opReturnHex,
  ecpair
) {
  const filteredUtxos = filterUnspentsByAmount(utxos, amount, fee);

  // const network =
  //   process.env.NODE_ENV === 'production' ? bitcoin.networks.bitcoin : bitcoin.networks.testnet;
  const network = bitcoin.networks.testnet;
  const txb = new bitcoin.TransactionBuilder(network);

  let sum = 0;
  console.log("1");
  for (let utxo of filteredUtxos) {
    txb.addInput(utxo.mintTxid, utxo.mintIndex);
    sum += utxo.value;
  }
  console.log("2");

  txb.addOutput(targetAddress, amount);
  const change = sum - amount - fee;
  if (change > 1000) {
    txb.addOutput(changeAddress, change);
  }
  console.log("3");

  if (opReturnHex) {
    const embed = bitcoin.payments.embed({
      data: [Buffer.from(opReturnHex, "hex")]
    });
    txb.addOutput(embed.output, 0);
  }

  console.log("4");
  filteredUtxos.forEach((utxo, index) => {
    txb.sign(index, ecpair);
  });
  console.log("5");

  const tx = txb.build();
  return tx.toHex();
}

export default compose;
