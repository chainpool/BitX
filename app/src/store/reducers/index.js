import { combineReducers } from 'redux';
import accounts from './account';
import newMnemonic from './mnemonic';
import balances from './balance';

export default combineReducers({ accounts, newMnemonic, balances });
