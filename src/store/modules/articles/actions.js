import Storage from "@/services/storage/storage";

const getAll = async ({ commit }) => {
  const data = await Storage.getAll();
  commit("updateArticles", { data });
};

const addNewArticle = async (_, { article }) => {
  await Storage.create(article);
};

const updateArticle = async ({ commit }, { article }) => {
  const updatedArticle = await Storage.update(article);
  commit("updateCurrentArticle", { article: updatedArticle });
};

const getArticleById = async ({ commit }, { id }) => {
  const article = await Storage.getById(id);
  if (article) commit("updateCurrentArticle", { article });
  return article;
};

const removeArticle = async (_, { id }) => {
  await Storage.remove(id);
};

export default {
  getAll,
  addNewArticle,
  updateArticle,
  getArticleById,
  removeArticle
};
