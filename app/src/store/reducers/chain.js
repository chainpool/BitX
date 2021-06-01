const chain = (state = "bitcoin", action) => {
  if (action.type === "SET_CHAIN") {
    return action.chain;
  }
  return state;
};

export default chain;
