import { combineReducers } from 'redux';
import accounts from './account';
import newMnemonic from './mnemonic';

export default combineReducers({ accounts, newMnemonic });
