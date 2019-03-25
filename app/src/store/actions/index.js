import { getBalance } from '../../service';

export const addAccount = (account) => ({
  type: 'ADD_ACCOUNT',
  account,
});

const addBalance = (balance) => ({
  type: 'ADD_BALANCE',
  balance,
});

export const generateMnemonic = () => ({ type: 'GENERATE_MNEMONIC' });

export const removeMnemonic = () => ({ type: 'REMOVE_MNEMONIC' });

export const setBalance = (addr) => {
  return function(dispatch) {
    getBalance(addr).then((balance) => {
      dispatch(addBalance(balance));
    });
  };
};
