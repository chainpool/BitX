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

export const updateUtxos = (address, utxos) => ({
  type: "ADD_UTXO",
  address,
  utxos
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
  return async dispatch => {
    const res = await getUtxos(addr, network);
    dispatch(updateUtxos(addr, res));
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
      updateBalance(account, dispatch);
    }
  };
};

export const getAccountBalance = account => {
  return async function(dispatch) {
    await updateBalance(account, dispatch);
  };
};

async function updateBalance(account, dispatch) {
  getBalance(account.address, account.network || "testnet").then((res = {}) => {
    const findOne = {
      ...account,
      ...res,
      balanceShow: formatNumber.toBtcPrecision(res.balance)
    };
    dispatch(updateAccountBalance(findOne));
  });
}

export const setNetwork = network => ({
  type: "SET_NETWORK",
  network
});

export const setSeenWarning = () => ({
  type: "SET_SEEN_WARNING",
  seenWarning: true
});

export const deleteAccount = address => ({
  type: "DELETE_ACCOUNT",
  address
});
