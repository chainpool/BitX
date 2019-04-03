import { localSave } from '../../utils';
const accounts = (state = [], action) => {
  if (action.type === 'ADD_ACCOUNT') {
    const result = [...state, action.account];
    localSave.set('accounts', result);
    return result;
  }
  const local = localSave.get('accounts');
  return local || state;
};

export default accounts;
