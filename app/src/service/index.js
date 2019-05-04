import { fetchFromHttp } from "../utils";

// const testnetEndpoint = 'https://api.chainx.org/bitx/testnet';
const submitEndpoint = "https://api.chainx.org/bitx/txs";

export async function getBalance(addr, network = "testnet") {
  // TODO: 主网数据正在同步，暂时用blockcypher的API
  return window
    .fetch(
      `https://api.blockcypher.com/v1/btc/${
        network === "mainnet" ? "main" : "test3"
      }/addrs/${addr}/balance`
    )
    .then(response => response.json())
    .then(data => {
      return {
        balance: data.final_balance,
        confirmed: data.balance,
        unconfirmed: data.unconfirmed_balance
      };
    });
}

export async function getUtxos(addr, network = "testnet") {
  // TODO: 主网数据正在同步，暂时用blockcypher的API
  return window
    .fetch(
      `https://api.blockcypher.com/v1/btc/${
        network === "mainnet" ? "main" : "test3"
      }/addrs/${addr}?unspentOnly=true&confirmations=1`
    )
    .then(response => response.json())
    .then(data => {
      return (data.txrefs || []).map(tx => ({
        mintTxid: tx.tx_hash,
        mintIndex: tx.tx_output_n,
        value: tx.value
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
