const path = process.env.NODE_ENV === 'production' ? 'main' : 'test3';

const endpoint = `https://api.blockcypher.com/v1/btc/test3`;

export async function getBalance(addr) {
  return window.fetch(endpoint + `/addrs/${addr}/balance`).then((response) => {
    return response.json();
  });
}

export async function getUtxos(addr) {
  return window
    .fetch(endpoint + `/addrs/${addr}?unspentOnly=true&confirmations=1`)
    .then((res) => res.json())
    .then((res) => res.txrefs || []);
}

export async function broadcastTx(tx) {
  const body = JSON.stringify({ tx });
  return window
    .fetch(endpoint + `/txs/push`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Length': `${body.length}`,
        'Content-Type': 'application/json',
      },
      body,
    })
    .then(async (res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.json();
      } else {
        const result = await res.json();
        return Promise.reject({
          status: res.status,
          message: result,
        });
      }
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}
