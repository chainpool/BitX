const accounts = (state = [], action) => {
  if (action.type === 'ADD_ACCOUNT') {
    return [...state, action.account];
  }
  return state;
};

export default accounts;
