import Storage from "@/services/storage/storage";

const getAll = async ({ commit }) => {
  const data = await Storage.getAll();
  commit("updateArticles", { data });
};

const addNewArticle = async (_, { article }) => {
  await Storage.create(article);
};

export default {
  getAll,
  addNewArticle
};
