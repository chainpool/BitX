import { localSave } from '../../utils';
const accounts = (state = [], action) => {
  if (action.type === 'ADD_ACCOUNT') {
    const result = [...state, action.account];
    localSave.set('accounts', result);
    return result;
  } else if (action.type === 'UPDATE_ACCOUNT_BALANCE') {
    return action.accounts;
  }

  const localAccounts = localSave.get('accounts');
  return localAccounts || state;
};

export default accounts;
