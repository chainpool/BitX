import { fetchFromHttp } from "../utils";

const testnetEndpoint = "https://api.chainx.org/bitx/testnet";
const mainnetEndpoint = "https://api.chainx.org/bitx/mainnet";
const submitEndpoint = "https://api.chainx.org/bitx/txs";

export async function getBalance(addr, network = "testnet") {
  const endpoint = network === "mainnet" ? mainnetEndpoint : testnetEndpoint;
  return window.fetch(endpoint + `/${addr}/balance`).then(response => {
    return response.json();
  });
}

export async function getUtxos(addr, network = "testnet") {
  const endpoint = network === "mainnet" ? mainnetEndpoint : testnetEndpoint;
  return window.fetch(endpoint + `/${addr}/utxos`).then(res => res.json());
}

export async function broadcastTx(tx, network = "testnet") {
  const body = { raw: tx, network };
  return fetchFromHttp({
    url: submitEndpoint,
    method: "POST",
    body
  });
}
