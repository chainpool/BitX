import BigNumber from "bignumber.js";
import dogecoin from "bitcore-lib-doge";
import { hexToAscii } from "../../utils/hex";

export function enough(utxos, amount, fee) {
  const total = utxos.reduce((result, utxo) => result + utxo.amount, 0);
  return total >= amount + fee;
}

function filterUnspentsByAmount(unspents, amount, fee) {
  const nonZeroUnspents = unspents.filter(
    utxo => new BigNumber(utxo.amount) > 0
  );

  const result = [];
  let sum = 0;
  for (let utxo of nonZeroUnspents) {
    result.push(utxo);
    sum += utxo.amount;
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
  opReturn,
  keypair
) {
  const filteredUtxos = filterUnspentsByAmount(utxos, amount, fee);

  const tx = new dogecoin.Transaction();
  const input_txs = [];
  // let total = 0;
  for (let utxo of filteredUtxos) {
    // total += utxo.amount;
    input_txs.push({
      txId: utxo.txid,
      outputIndex: utxo.vout,
      satoshis: utxo.amount,
      script: utxo.script
    });
  }

  console.log(input_txs);
  tx.from(input_txs);
  window.Buffer = Buffer;

  tx.fee(fee)
    .to(targetAddress, amount)
    .change(changeAddress)
    .addData(opReturn)
    .sign(keypair);

  console.log(tx.toJSON());
  console.log(tx.toString());
  return tx.toString();
}

export default compose;
