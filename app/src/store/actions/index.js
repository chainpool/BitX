import { getBalance, getUtxos } from '../../service';
import { formatNumber } from '../../utils';

export const addAccount = (account) => ({
  type: 'ADD_ACCOUNT',
  account,
});

export const updateAccountBalance = (accounts) => ({
  type: 'UPDATE_ACCOUNT_BALANCE',
  accounts,
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

export const getAccountBalance = (addr) => {
  return () => {
    return getBalance(addr);
  };
};

export const getAccountUtxos = (addr) => {
  return () => {
    return getUtxos(addr);
  };
};

export const setGoBack = (goBack) => ({
  type: 'SET_GO_BACK',
  goBack,
});

export const getAllAccountBalance = () => {
  return function(dispatch, getState) {
    const { accounts } = getState();
    const addressAll = accounts.map((item) => item.address).join(';');
    getBalance(addressAll).then((res = []) => {
      const accountsWithBalance = accounts.map((item = {}, index) => {
        const findOne = res[index];
        return {
          ...item,
          ...(findOne ? findOne : {}),
          balanceShow: formatNumber.toBtcPrecision(findOne.balance),
        };
      });
      dispatch(updateAccountBalance(accountsWithBalance));
    });
  };
};
