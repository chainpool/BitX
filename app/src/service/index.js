const endpoint = "https://chain.so";
const networkType = "DOGETEST";
// headers: {
//   "Content-Type": "application/json",
//   Authorization: "Basic YXV0aDpkb2dlY29pbi0xYzJzNGQ="
// },
export async function getBalance(addr) {
  const res = await window.fetch(
    `${endpoint}/api/v2/get_address_balance/${networkType}/${addr}/1`
  );
  const data = (await res.json()).data;
  console.log("data: ", data);
  return {
    balance: Number(data.confirmed_balance) * 100000000
  };
}

export async function getUtxos(addr) {
  if (!addr) {
    return;
  }
  const res = await fetch(
    `${endpoint}/api/v2/get_tx_unspent/${networkType}/${addr}`
  );
  const response = await res.json();
  if (response.status === "fail") {
    console.error(`api error: ${response.data}`);
    throw new Error(response.data);
  }
  console.dir(response.data);
  return (response.data.txs || []).map(utxo => ({
    txid: utxo.txid,
    vout: utxo.output_no,
    script: utxo.script_hex,
    amount: Math.floor(Number(utxo.value) * 100000000)
  }));
}

export async function broadcastTx(tx) {
  const res = await fetch("https://xbridge.spiderx.pro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic YXV0aDpkb2dlY29pbi0xYzJzNGQ="
    },
    body: JSON.stringify({
      jsonrpc: "1.0",
      method: "sendrawtransaction",
      params: [tx]
    })
  });
  return res.json();
}
