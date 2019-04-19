const fetch = require("node-fetch");
const Router = require("koa-router");
const pick = require("lodash.pick");

const defaultEndpoint = "http://47.111.89.46:18332";
const defaultBitcoreEndpoint = "http://47.111.89.46:3000";

const endpoint = process.env.BTC_END_POINT || defaultEndpoint;
const bitcoreEndpoint = process.env.BITCORE_END_POINT || defaultBitcoreEndpoint;

const router = new Router();

router.get("/ping", async ctx => {
  ctx.body = "pong";
});

router.post("/txs", async ctx => {
  const { raw } = ctx.request.body;
  if (!raw) {
    ctx.status = 400;
    ctx.body = { error: "empty tx" };
    return;
  }
  const response = await submit(raw);
  const result = await response.json();
  if (response.ok) {
    ctx.status = 201;
    ctx.body = { tx: result.result };
  } else {
    ctx.status = 400;
    ctx.body = result.error;
  }
});

router.get("/testnet/:address/utxos", async ctx => {
  const { address } = ctx.params;

  const response = await fetch(
    `${bitcoreEndpoint}/api/BTC/testnet/address/${address}?unspent=true&limit=1000`
  );
  const rawUtxos = await response.json();

  ctx.body = rawUtxos.map(utxo =>
    pick(utxo, ["mintTxid", "mintIndex", "value", "script"])
  );
});

router.get("/testnet/:address/balance", async ctx => {
  const { address } = ctx.params;

  const response = await fetch(
    `${bitcoreEndpoint}/api/BTC/testnet/address/${address}/balance`
  );

  const balance = await response.json();
  ctx.body = balance;
});

module.exports = app => {
  app.use(router.routes()).use(router.allowedMethods({ throw: true }));
};

let id = 0;
async function submit(raw) {
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
      "Content-Length": `${body.length}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  };

  const response = await fetch(endpoint, request);
  return response;
}
