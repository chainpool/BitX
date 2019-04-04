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
  const makePart = (accounts) => {
    const list = accounts;
    const a = Math.floor(list.length / 3);
    const b = list.length % 3;
    let arrays = [];
    for (let i = 0; i < a; i++) {
      const start = i * 3;
      const end = start + 3;
      arrays.push(list.slice(start, end));
    }
    if (b) {
      arrays.push(list.slice(-b));
    }
    return arrays;
  };
  const requestResults = [];
  return function(dispatch, getState) {
    const { accounts } = getState();
    for (let i = 0; i < accounts.length; i++) {
      setTimeout(() => {
        getBalance(accounts[i].address).then((res = []) => {
          if (res.length) {
            requestResults.push(...res);
          } else {
            requestResults.push(res);
          }
          const accountsWithBalance = accounts.map((item = {}, index) => {
            const findOne = requestResults[index] || {};
            return {
              ...item,
              ...(findOne ? findOne : {}),
              balanceShow: formatNumber.toBtcPrecision(findOne.balance),
            };
          });
          dispatch(updateAccountBalance(accountsWithBalance));
        });
      }, 1100 * i);
    }

    //  const parts = makePart(accounts);
    // for (let i = 0; i < parts.length; i++) {
    //   setTimeout(() => {
    //     const addressAll = parts[i].map((item) => item.address).join(';');
    //     getBalance(addressAll).then((res = []) => {
    //       if (res.length) {
    //         requestResults.push(...res);
    //       } else {
    //         requestResults.push(res);
    //       }
    //       console.log(requestResults, '---requestResults');
    //       const accountsWithBalance = accounts.map((item = {}, index) => {
    //         const findOne = requestResults[index] || {};
    //         return {
    //           ...item,
    //           ...(findOne ? findOne : {}),
    //           balanceShow: formatNumber.toBtcPrecision(findOne.balance),
    //         };
    //       });
    //       dispatch(updateAccountBalance(accountsWithBalance));
    //     });
    //   }, 1100 * i);
    // }
  };
};
