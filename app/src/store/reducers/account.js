import { localSave, bitJS } from "../../utils";

let initialAccounts = bitJS.getAccount();
if (!initialAccounts || !Array.isArray(initialAccounts)) {
  initialAccounts = [];
}

const accountVersion = localSave.get("accountVersion");
if (typeof accountVersion === "undefined") {
  localSave.set("accountVersion", 1);
}

function saveAccounts(rawAccounts) {
  const saveParts = rawAccounts.map((item = {}) => ({
    name: item.name,
    address: item.address,
    encryptedKey: item.encryptedKey,
    network: item.network
  }));

  bitJS.saveAccount(saveParts);
}

const accounts = (state = initialAccounts, action) => {
  if (action.type === "ADD_ACCOUNT") {
    const result = [...state, action.account];
    saveAccounts(result);
    return result;
  } else if (action.type === "DELETE_ACCOUNT") {
    const index = state.findIndex(
      account => account.address === action.address
    );
    if (index < 0) {
      return state;
    }

    state.splice(index, 1);
    saveAccounts(state);
    return state;
  } else if (action.type === "UPDATE_ACCOUNT_BALANCE") {
    return state.map(item => {
      if (item.address === action.account.address) {
        return action.account;
      }
      return item;
    });
  }

  return state;
};

export default accounts;
