import { fetchFromHttp } from "../utils";

const submitEndpoint = "https://api.chainx.org/bitx/txs";

export async function getBalance(addr, network = "testnet") {
  const url = `https://api.chainx.org.cn/bitx/${network}/${addr}/balance`;
  return window.fetch(url).then(res => res.json());
}

async function getTestnetUtxos(addr) {
  const url = `https://api.chainx.org.cn/bitx/testnet/${addr}/utxos`;
  return window.fetch(url).then(res => res.json());
}

export async function getUtxos(addr, network = "testnet") {
  if (network === "testnet") {
    return getTestnetUtxos(addr);
  }

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
