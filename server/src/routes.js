const fetch = require("node-fetch");
const Router = require("koa-router");

const defaultEndpoint = "http://47.111.89.46:18332";

const endpoint = process.env.BTC_END_POINT || defaultEndpoint;

const router = new Router();

router.get("/ping", async ctx => {
  ctx.body = "pong";
});

router.post("/txs", async ctx => {
  console.log(ctx.params);
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
    ctx.body = result.result;
  } else {
    ctx.status = 400;
    ctx.body = result.error;
  }
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
