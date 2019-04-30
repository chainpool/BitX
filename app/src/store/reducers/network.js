const network = (state = "testnet", action) => {
  if (action.type === "SET_NETWORK") {
    return action.network;
  }
  return state;
};

export default network;
