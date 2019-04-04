const goBack = (state = '', action) => {
  if (action.type === 'SET_GO_BACK') {
    return action.goBack;
  }
  return state;
};

export default goBack;
