import { localSave } from '../../utils';
const accounts = (state = [], action) => {
  if (action.type === 'ADD_ACCOUNT') {
    const result = [...state, action.account];
    localSave.set('accounts', result);
    return result;
  }
  const localAccounts = localSave.get('accounts');
  return localAccounts || state;
};

export default accounts;
