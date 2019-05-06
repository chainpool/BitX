const menu = (state = { show: false, cb: null }, action) => {
  if (action.type === "SET_MENU") {
    return action.menu;
  }
  return state;
};

export default menu;
