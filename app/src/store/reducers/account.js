import { localSave, bitJS } from "../../utils";

const accounts = (state = [], action) => {
  if (action.type === "ADD_ACCOUNT") {
    const result = [...state, action.account];
    const saveParts = result.map((item = {}) => ({
      name: item.name,
      address: item.address,
      encryptedKey: item.encryptedKey
    }));
    bitJS.saveAccount(saveParts);
    return result;
  } else if (action.type === "UPDATE_ACCOUNT_BALANCE") {
    return action.accounts;
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
