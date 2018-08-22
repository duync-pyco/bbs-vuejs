import ArticleApi from "@/services/api/articles";

const wrapLoading = async (commit, fn) => {
  commit("updateLoading", { isLoading: true });
  const res = await fn();
  commit("updateLoading", { isLoading: false });
  return res;
};

const getAll = async ({ commit }) =>
  wrapLoading(commit, async () => {
    const data = await ArticleApi.getAll();
    commit("updateArticles", { data });
    return data;
  });

const getArticleById = async ({ commit }, { id }) =>
  wrapLoading(commit, async () => {
    try {
      const article = await ArticleApi.getById(id);
      commit("updateCurrentArticle", { article });
      return article;
    } catch (error) {
      commit("updateCurrentArticle", { article: null });
      return null;
    }
  });

const addNewArticle = async ({ commit }, { article }) =>
  wrapLoading(commit, async () => {
    const newArticle = await ArticleApi.create(article);
    return newArticle;
  });

const updateArticle = async ({ commit }, { article }) =>
  wrapLoading(commit, async () => {
    await ArticleApi.update(article);
    commit("updateCurrentArticle", { article });
  });

const removeArticle = async ({ commit }, { id }) =>
  wrapLoading(commit, async () => {
    const deletedArticle = await ArticleApi.remove(id);
    return deletedArticle;
  });

export default {
  getAll,
  addNewArticle,
  updateArticle,
  getArticleById,
  removeArticle
};
