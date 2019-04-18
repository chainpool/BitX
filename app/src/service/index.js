import { fetchFromHttp } from "../utils";

const endpoint = `https://api.blockcypher.com/v1/btc/test3`;
const submitEndpoint = "https://api.chainx.org/bitx/txs";

export async function getBalance(addr) {
  return window.fetch(endpoint + `/addrs/${addr}/balance`).then(response => {
    return response.json();
  });
}

export async function getUtxos(addr) {
  return window
    .fetch(endpoint + `/addrs/${addr}?unspentOnly=true&confirmations=1`)
    .then(res => res.json())
    .then(res => res.txrefs || []);
}

export async function broadcastTx(tx) {
  const body = { raw: tx };
  return fetchFromHttp({
    url: submitEndpoint,
    method: "POST",
    body
  });
}
