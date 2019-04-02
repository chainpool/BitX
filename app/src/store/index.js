import { combineReducers } from 'redux';
import accounts from './reducers/account';
import newMnemonic from './reducers/mnemonic';
import balances from './reducers/balance';
import utxos from './reducers/utxo';
import pageTitle from './reducers/pageTitle';
import modal from './reducers/modal';

export default combineReducers({ accounts, newMnemonic, balances, utxos, pageTitle, modal });
