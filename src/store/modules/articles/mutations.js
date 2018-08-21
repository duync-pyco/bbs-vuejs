const updateArticles = (state, { data }) => {
  state.data = [...data];
};

const updateCurrentArticle = (state, { article }) => {
  state.currentArticle = { ...article };
};

export default {
  updateArticles,
  updateCurrentArticle
};
