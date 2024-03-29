import { combineReducers } from "redux";
import accounts from "./reducers/account";
import newMnemonic from "./reducers/mnemonic";
import utxos from "./reducers/utxo";
import pageTitle from "./reducers/pageTitle";
import modal from "./reducers/modal";
import goBack from "./reducers/goBack";
import network from "./reducers/network";
import menu from "./reducers/menu";
import app from "./reducers/app";

export default combineReducers({
  accounts,
  network,
  newMnemonic,
  utxos,
  pageTitle,
  modal,
  goBack,
  menu,
  app
});
