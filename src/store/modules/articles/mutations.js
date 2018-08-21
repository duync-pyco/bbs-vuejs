const updateArticles = (state, { data }) => {
  state.data = [...data];
};

export default {
  updateArticles
};
