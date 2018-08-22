const updateArticles = (state, { data }) => {
  state.data = data;
};

const updateCurrentArticle = (state, { article }) => {
  state.currentArticle = article;
};

const updateLoading = (state, { isLoading }) => {
  state.isLoading = isLoading;
};

export default {
  updateArticles,
  updateCurrentArticle,
  updateLoading
};
