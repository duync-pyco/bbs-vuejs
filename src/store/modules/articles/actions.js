import Storage from "@/services/storage/storage";
import ArticleApi from "@/services/api/articles";

const getAll = async ({ commit }) => {
  const data = await ArticleApi.getAll();
  commit("updateArticles", { data });
  return data;
};

const getArticleById = async ({ commit }, { id }) => {
  try {
    const article = await ArticleApi.getById(id);
    commit("updateCurrentArticle", { article });
    return article;
  } catch (error) {
    commit("updateCurrentArticle", { article: null });
    return null;
  }
};

const addNewArticle = async (_, { article }) => {
  const newArticle = await ArticleApi.create(article);
  return newArticle;
};

const updateArticle = async ({ commit }, { article }) => {
  await ArticleApi.update(article);
  commit("updateCurrentArticle", { article });
};

const removeArticle = async (_, { id }) => {
  const deletedArticle = await ArticleApi.remove(id);
  return deletedArticle;
};

export default {
  getAll,
  addNewArticle,
  updateArticle,
  getArticleById,
  removeArticle
};
