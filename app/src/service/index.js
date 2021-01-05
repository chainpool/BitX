import { fetchFromHttp } from "../utils";

const submitEndpoint = "http://127.0.0.1:4001/txs";

export async function getBalance(addr, network = "testnet") {
  const net = network === "testnet" ? "test3" : "main";
  const url = `https://api.blockcypher.com/v1/btc/${net}/addrs/${addr}/balance`;
  return window.fetch(url).then(res => res.json());
}

export async function getUtxos(addr, network = "testnet") {
  const net = network === "testnet" ? "test3" : "main";

  const url = `https://api.blockcypher.com/v1/btc/${net}/addrs/${addr}?unspentOnly=true&confirmations=1&limit=800`;
  const res = await fetch(url);
  const response = await res.json();
  if (response.error) {
    console.error(`api error: ${response.error}`);
    throw new Error(response.error);
  }
  return (response.txrefs || []).map(utxo => ({
    txid: utxo.tx_hash,
    vout: utxo.tx_output_n,
    amount: utxo.value
  }));
}

export async function broadcastTx(tx, network = "testnet") {
  const body = { raw: tx, network };

  return fetchFromHttp({
    url: submitEndpoint,
    method: "POST",
    body
  });
}
