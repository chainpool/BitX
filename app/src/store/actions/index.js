import { getBalance, getUtxos } from "../../service";
import { formatNumber } from "../../utils";

export const addAccount = account => ({
  type: "ADD_ACCOUNT",
  account
});

export const updateAccountBalance = accounts => ({
  type: "UPDATE_ACCOUNT_BALANCE",
  accounts
});

export const generateMnemonic = () => ({ type: "GENERATE_MNEMONIC" });

export const setPageTitle = pageTitle => ({
  type: "SET_PAGE_TITLE",
  pageTitle
});

export const setModal = ({ name, show, data }) => ({
  type: "SET_Modal",
  modal: { name, show, data }
});

export const getAccountUtxos = addr => {
  return () => {
    return getUtxos(addr);
  };
};

export const setGoBack = goBack => ({
  type: "SET_GO_BACK",
  goBack
});

export const getAllAccountBalance = () => {
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
              balanceShow: formatNumber.toBtcPrecision(findOne.balance)
            };
          });
          dispatch(updateAccountBalance(accountsWithBalance));
        });
      }, 1100 * i);
    }
  };
};
