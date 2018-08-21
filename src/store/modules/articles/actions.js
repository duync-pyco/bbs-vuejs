import Storage from "@/services/storage/storage";

const getAll = async ({ commit }) => {
  const data = await Storage.getAll();
  commit("updateArticles", { data });
  return data;
};

const addNewArticle = async (_, { article }) => {
  const newArticle = await Storage.create(article);
  return newArticle;
};

const updateArticle = async ({ commit }, { article }) => {
  const updatedArticle = await Storage.update(article);
  commit("updateCurrentArticle", { article: updatedArticle });
  return updatedArticle;
};

const getArticleById = async ({ commit }, { id }) => {
  const article = await Storage.getById(id);
  commit("updateCurrentArticle", { article });
  return article;
};

const removeArticle = async (_, { id }) => {
  const deletedArticle = await Storage.remove(id);
  return deletedArticle;
};

export default {
  getAll,
  addNewArticle,
  updateArticle,
  getArticleById,
  removeArticle
};
