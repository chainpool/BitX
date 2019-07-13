import { fetchFromHttp } from "../utils";

const submitEndpoint = "https://api.chainx.org/bitx/txs";

export async function getBalance(addr, network = "testnet") {
  const url = `https://api.chainx.org.cn/bitx/${network}/${addr}/balance`;
  return window.fetch(url).then(res => res.json());
}

export async function getUtxos(addr, network = "testnet") {
  const url = `https://api.chainx.org.cn/bitx/${network}/${addr}/utxos`;
  return window.fetch(url).then(res => res.json());
}

export async function broadcastTx(tx, network = "testnet") {
  const body = { raw: tx, network };
  return fetchFromHttp({
    url: submitEndpoint,
    method: "POST",
    body
  });
}
