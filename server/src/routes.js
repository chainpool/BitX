const fetch = require("node-fetch");
const Router = require("koa-router");
const pick = require("lodash.pick");

const defaultEndpoint = "http://115.29.163.193:18332";
const defaultBitcoreEndpoint = "http://115.29.163.193:3000";

const btcTestnetEndpoint = process.env.BTC_TESTNET_END_POINT || defaultEndpoint;
const btcMainnetEndpoint =
  process.env.BTC_MAINNET_END_POINT || "http://115.29.163.193:8332";
const bitcoreEndpoint = process.env.BITCORE_END_POINT || defaultBitcoreEndpoint;

const authorization = "Basic YXV0aDpiaXRjb2luLWIyZGQwNzc=";

const router = new Router();

router.get("/ping", async ctx => {
  ctx.body = "pong";
});

router.post("/txs", async ctx => {
  const { raw, network } = ctx.request.body;
  if (!raw) {
    ctx.status = 400;
    ctx.body = { error: "empty tx" };
    return;
  }
  const response = await submit(raw, network);
  const result = await response.json();
  if (response.ok) {
    ctx.status = 201;
    ctx.body = { tx: result.result };
  } else {
    ctx.status = 400;
    ctx.body = result.error;
  }
});

router.get("/mainnet/:address/utxos", async ctx => {
  const { address } = ctx.params;

  const response = await fetch(
    `${bitcoreEndpoint}/api/BTC/mainnet/address/${address}?unspent=true&limit=10000`
  );
  const rawUtxos = await response.json();
  const filteredUtxos = rawUtxos.filter(utxo => utxo.mintHeight > 0);

  ctx.body = filteredUtxos.map(utxo =>
    pick(utxo, ["mintTxid", "mintIndex", "value", "script"])
  );
});

router.get("/testnet/:address/utxos", async ctx => {
  const { address } = ctx.params;

  const response = await fetch(
    `${bitcoreEndpoint}/api/BTC/testnet/address/${address}?unspent=true&limit=10000`
  );
  const rawUtxos = await response.json();
  const filteredUtxos = rawUtxos.filter(utxo => utxo.mintHeight > 0);

  ctx.body = filteredUtxos.map(utxo =>
    pick(utxo, ["mintTxid", "mintIndex", "value", "script"])
  );
});

router.get("/mainnet/:address/balance", async ctx => {
  const { address } = ctx.params;

  const response = await fetch(
    `https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`
  );

  const balance = await response.json();
  ctx.body = balance;
});

router.get("/testnet/:address/balance", async ctx => {
  const { address } = ctx.params;

  const response = await fetch(
    `${bitcoreEndpoint}/api/BTC/testnet/address/${address}/balance`
  );

  const balance = await response.json();
  ctx.body = balance;
});

router.post("/testnet/balances", async ctx => {
  const { addrs = [] } = ctx.request.body;

  const result = [];
  for (let addr of addrs) {
    const response = await fetch(
      `${bitcoreEndpoint}/api/BTC/testnet/address/${addr}/balance`
    );

    const balance = await response.json();
    result.push({ address: addr, balance });
  }

  ctx.body = result;
});

router.post("/mainnet/balances", async ctx => {
  const { addrs = [] } = ctx.request.body;

  const result = [];
  for (let addr of addrs) {
    const response = await fetch(
      `${bitcoreEndpoint}/api/BTC/mainnet/address/${addr}/balance`
    );

    const balance = await response.json();
    result.push({ address: addr, balance });
  }

  ctx.body = result;
});

router.get("/testnet/block/tip", async ctx => {
  const response = await fetch(`${bitcoreEndpoint}/api/BTC/testnet/block/tip`);

  ctx.body = await response.json();
});

router.get("/mainnet/block/tip", async ctx => {
  const response = await fetch(`${bitcoreEndpoint}/api/BTC/mainnet/block/tip`);

  ctx.body = await response.json();
});

module.exports = app => {
  app.use(router.routes()).use(router.allowedMethods({ throw: true }));
};

let id = 0;

async function submit(raw, network) {
  const obj = {
    id: id++,
    jsonrpc: "2.0",
    method: "sendrawtransaction",
    params: [raw]
  };
  const body = JSON.stringify(obj);

  const request = {
    body,
    headers: {
      Accept: "application/json",
      Authorization: `${authorization}`,
      "Content-Length": `${body.length}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  };

  const response = await fetch(
    network === "mainnet" ? btcMainnetEndpoint : btcTestnetEndpoint,
    request
  );
  return response;
}
