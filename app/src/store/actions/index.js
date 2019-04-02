import { getBalance, getUtxos } from '../../service';

export const addAccount = (account) => ({
  type: 'ADD_ACCOUNT',
  account,
});

const addBalance = (balance) => ({
  type: 'ADD_BALANCE',
  balance,
});

const addUtxos = (utxos, address) => ({
  type: 'ADD_UTXO',
  utxos,
  address,
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

export const setUtxos = (addr) => {
  return function(dispatch) {
    getUtxos(addr).then((utxos) => {
      dispatch(addUtxos(utxos, addr));
    });
  };
};

export const setPageTitle = (pageTitle) => ({
  type: 'SET_PAGE_TITLE',
  pageTitle,
});

export const setModal = ({ name, show, data }) => ({
  type: 'SET_Modal',
  modal: { name, show, data },
});
