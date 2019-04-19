import { getBalance, getUtxos } from "../../service";
import { formatNumber } from "../../utils";

export const addAccount = account => ({
  type: "ADD_ACCOUNT",
  account
});

export const updateAccountBalance = account => ({
  type: "UPDATE_ACCOUNT_BALANCE",
  account
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
  return function(dispatch, getState) {
    const { accounts } = getState();
    for (let i = 0; i < accounts.length; i++) {
      getBalance(accounts[i].address).then((res = {}) => {
        const findOne = {
          ...accounts[i],
          ...res,
          balanceShow: formatNumber.toBtcPrecision(res.balance)
        };
        dispatch(updateAccountBalance(findOne));
      });
    }
  };
};
