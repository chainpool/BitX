import { fetchFromHttp } from "../utils";

const path = process.env.NODE_ENV === "production" ? "main" : "test3";

const endpoint = `https://api.blockcypher.com/v1/btc/test3`;

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

export async function getFee() {
  return fetchFromHttp({
    url: "https://api.blockcypher.com/v1/btc/test3",
    method: "GET"
  });
}

export async function broadcastTx(tx) {
  const body = { tx };
  return fetchFromHttp({
    url: endpoint + `/txs/push`,
    method: "POST",
    body
  });
}
