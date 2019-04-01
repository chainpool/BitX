const pageTitle = (state = [], action) => {
  if (action.type === 'SET_PAGE_TITLE') {
    return action.pageTitle;
  }
  return state;
};

export default pageTitle;
