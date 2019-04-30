import { localSave, bitJS } from "../../utils";

const accounts = (state = [], action) => {
  if (action.type === "ADD_ACCOUNT") {
    const result = [...state, action.account];
    const saveParts = result.map((item = {}) => ({
      name: item.name,
      address: item.address,
      encryptedKey: item.encryptedKey,
      network: item.network
    }));
    bitJS.saveAccount(saveParts);
    return result;
  } else if (action.type === "UPDATE_ACCOUNT_BALANCE") {
    return state.map(item => {
      if (item.address === action.account.address) {
        return action.account;
      }
      return item;
    });
  }

  const accountVersion = localSave.get("accountVersion");
  let localAccounts = [];
  if (!accountVersion) {
    localAccounts = [];
    localSave.remove("accounts");
    localSave.set("accountVersion", 1);
  } else {
    localAccounts = bitJS.getAccount();
  }

  return state.length ? state : localAccounts || [];
};

export default accounts;
