const modal = (state = { name: '', show: false }, action = {}) => {
  if (action.type === 'SET_Modal') {
    return {
      ...state,
      ...action.modal,
    };
  }
  return state;
};

export default modal;
