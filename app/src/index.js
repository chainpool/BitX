import React from "react";
import ReactDOM from "react-dom";
import initReactFastclick from "react-fastclick";
import "normalize.css";
import "./index.scss";
import App from "./routes/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store";
import "whatwg-fetch";
import thunk from "redux-thunk";
import dogecoin from "bitcore-lib-doge";

dogecoin.crypto.Signature.prototype.toBuffer = dogecoin.crypto.Signature.prototype.toDER = function() {
  var rnbuf = this.r.toArrayLike(Buffer);
  var snbuf = this.s.toArrayLike(Buffer);

  var rneg = rnbuf[0] & 0x80 ? true : false;
  var sneg = snbuf[0] & 0x80 ? true : false;

  var rbuf = rneg ? Buffer.concat([Buffer.from([0x00]), rnbuf]) : rnbuf;
  var sbuf = sneg ? Buffer.concat([Buffer.from([0x00]), snbuf]) : snbuf;

  var rlength = rbuf.length;
  var slength = sbuf.length;
  var length = 2 + rlength + 2 + slength;
  var rheader = 0x02;
  var sheader = 0x02;
  var header = 0x30;

  var der = Buffer.concat([
    Buffer.from([header, length, rheader, rlength]),
    rbuf,
    Buffer.from([sheader, slength]),
    sbuf
  ]);
  return der;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

initReactFastclick();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
