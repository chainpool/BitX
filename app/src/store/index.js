import { combineReducers } from "redux";
import accounts from "./reducers/account";
import newMnemonic from "./reducers/mnemonic";
import utxos from "./reducers/utxo";
import pageTitle from "./reducers/pageTitle";
import modal from "./reducers/modal";
import goBack from "./reducers/goBack";

export default combineReducers({
  accounts,
  newMnemonic,
  utxos,
  pageTitle,
  modal,
  goBack
});
