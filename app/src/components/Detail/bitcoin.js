import bitcoin from "bitcoinjs-lib";
import coinSelect from "coinselect";

export function enough(
  utxos,
  changeAddress,
  targetAddress,
  amount,
  feeRate,
  opReturnHex
) {
  const normalizeUtxos = normalizeUtxoForSelect(utxos);
  const targets = [
    {
      address: targetAddress,
      value: amount
    }
  ];

  if (opReturnHex) {
    const embed = bitcoin.payments.embed({
      data: [Buffer.from(opReturnHex, "hex")]
    });

    targets.push({
      script: embed.output,
      value: 0
    });
  }

  let { inputs } = coinSelect(normalizeUtxos, targets, feeRate);

  return !!inputs;
}

function normalizeUtxoForSelect(utxos) {
  return utxos.map(utxo => {
    return {
      txId: utxo.tx_hash,
      vout: utxo.tx_output_n,
      ...utxo
    };
  });
}

export function compose(
  utxos,
  changeAddress,
  targetAddress,
  amount,
  feeRate,
  opReturnHex,
  ecpair
) {
  const normalizeUtxos = normalizeUtxoForSelect(utxos);
  const targets = [
    {
      address: targetAddress,
      value: amount
    }
  ];

  if (opReturnHex) {
    const embed = bitcoin.payments.embed({
      data: [Buffer.from(opReturnHex, "hex")]
    });

    targets.push({
      script: embed.output,
      value: 0
    });
  }

  let { inputs, outputs, fee } = coinSelect(normalizeUtxos, targets, feeRate);

  // the accumulated fee is always returned for analysis
  console.log(fee);

  // .inputs and .outputs will be undefined if no solution was found
  if (!inputs || !outputs) return;

  const network = bitcoin.networks.testnet;
  const txb = new bitcoin.TransactionBuilder(network);

  inputs.forEach(input => txb.addInput(input.txId, input.vout));
  outputs.forEach(output => {
    if (!output.address && !output.script) {
      output.address = changeAddress;
    }

    if (output.address) {
      txb.addOutput(output.address, output.value);
    } else if (output.script) {
      txb.addOutput(output.script, 0);
    }
  });

  inputs.forEach((input, index) => {
    txb.sign(index, ecpair);
  });

  const tx = txb.build();
  return tx.toHex();
}

export default compose;
