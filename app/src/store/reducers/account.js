const accounts = (state = [], action) => {
  if (action.type === 'ADD_ACCOUNT') {
    return [...state, action.account];
  }
  return [{ name: 'Alice', address: '1ANng9ANZnT7KUfxgtMNyiuhzFHY4j2gdG' }];
};

export default accounts;
