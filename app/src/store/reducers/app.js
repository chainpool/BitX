import { localSave } from "../../utils";

const appData = localSave.get("appData") || {};

const app = (state = appData, action) => {
  if (action.type === "SET_SEEN_WARNING") {
    const result = {
      ...state,
      seenWarning: action.seenWarning
    };
    localSave.set("appData", result);

    return result;
  }

  return state;
};

export default app;
