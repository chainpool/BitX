const accounts = (state = [], action) => {
  if (action.type === 'SET_ACCOUNTS') {
    return action.accounts;
  }
  return state;
};

export default accounts;
