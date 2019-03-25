const balances = (state = [], action) => {
  if (action.type === 'ADD_BALANCE') {
    return [action.balance, ...state];
  }
  return state;
};

export default balances;
