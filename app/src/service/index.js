const path = process.env.NODE_ENV === 'production' ? 'main' : 'test3';

const endpoint = `https://api.blockcypher.com/v1/btc/${path}`;

export async function getBalance(addr) {
  return window.fetch(endpoint + `/addrs/${addr}/balance`).then((response) => {
    return response.json();
  });
}

export async function getUtxos(addr) {
  return window
    .fetch(endpoint + `/addrs/${addr}?unspentOnly=true&confirmations=6`)
    .then((res) => res.json())
    .then((res) => res.txrefs || []);
}