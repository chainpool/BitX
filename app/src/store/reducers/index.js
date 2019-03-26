import { combineReducers } from 'redux';
import accounts from './account';
import newMnemonic from './mnemonic';
import balances from './balance';
import utxos from './utxo';

export default combineReducers({ accounts, newMnemonic, balances, utxos });
