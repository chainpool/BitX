import { fetchFromHttp } from "../utils";

// const testnetEndpoint = 'https://api.chainx.org/bitx/testnet';
const submitEndpoint = "https://api.chainx.org/bitx/txs";

export async function getBalance(addr, network = "testnet") {
  // TODO: 主网数据正在同步，暂时用blockcypher的API
  const endpoint = "https://chain.so/api/v2/get_address_balance/";
  return window
    .fetch(`${endpoint}${network === "mainnet" ? "btc" : "btctest"}/${addr}`)
    .then(response => response.json())
    .then(({ data }) => {
      const confirmed = data.confirmed_balance * Math.pow(10, 8);
      const unConfirmed = data.unconfirmed_balance * Math.pow(10, 8);
      return {
        balance: confirmed,
        confirmed: confirmed,
        unconfirmed: unConfirmed
      };
    });
}

export async function getUtxos(addr, network = "testnet") {
  // TODO: 主网数据正在同步，暂时用blockcypher的API
  const endpoint = "https://chain.so/api/v2/get_tx_unspent/";
  return window
    .fetch(`${endpoint}${network === "mainnet" ? "btc" : "btctest"}/${addr}`)
    .then(response => response.json())
    .then(({ data }) => {
      return (data.txs || []).map(tx => ({
        mintTxid: tx.txid,
        mintIndex: tx.output_no,
        value: parseInt(tx.value * Math.pow(10, 8))
      }));
    });
}

export async function broadcastTx(tx, network = "testnet") {
  const body = { raw: tx, network };
  return fetchFromHttp({
    url: submitEndpoint,
    method: "POST",
    body
  });
}
