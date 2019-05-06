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

export const getAccountUtxos = (addr, network = "testnet") => {
  return () => {
    return getUtxos(addr, network);
  };
};

export const setGoBack = goBack => ({
  type: "SET_GO_BACK",
  goBack
});

export const setMenu = menu => ({
  type: "SET_MENU",
  menu
});

export const getAllAccountBalance = () => {
  return async function(dispatch, getState) {
    const { accounts } = getState();
    for (let account of accounts) {
      await updateBalance(account, dispatch);
    }
  };
};

async function updateBalance(account, dispatch) {
  return new Promise(resolve => {
    getBalance(account.address, account.network || "testnet").then(
      (res = {}) => {
        const findOne = {
          ...account,
          ...res,
          balanceShow: formatNumber.toBtcPrecision(res.confirmed)
        };
        dispatch(updateAccountBalance(findOne));

        setTimeout(resolve, 500);
      }
    );
  });
}

export const setNetwork = network => ({
  type: "SET_NETWORK",
  network
});
