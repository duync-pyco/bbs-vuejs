import { MUTATIONS } from "./constants";

const updateArticles = (state, { data }) => {
  state.data = data;
};

const updateCurrentArticle = (state, { article }) => {
  state.currentArticle = article;
};

export default {
  [MUTATIONS.UPDATE]: updateArticles,
  [MUTATIONS.UPDATE_CURRENT]: updateCurrentArticle
};
