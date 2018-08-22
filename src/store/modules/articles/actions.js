import ArticleApi from "@/services/api/articles";
import { ACTIONS, MUTATIONS } from "./constants";
import { MUTATIONS as APP_MUTATIONS } from "../app/constants";

const wrapLoading = async (commit, fn) => {
  commit(APP_MUTATIONS.UPDATE_LOADING, { isLoading: true });
  const res = await fn();
  commit(APP_MUTATIONS.UPDATE_LOADING, { isLoading: false });
  return res;
};

const getAll = async ({ commit }) =>
  wrapLoading(commit, async () => {
    const data = await ArticleApi.getAll();
    commit(MUTATIONS.UPDATE, { data });
    return data;
  });

const getArticleById = async ({ commit }, { id }) =>
  wrapLoading(commit, async () => {
    try {
      const article = await ArticleApi.getById(id);
      commit(MUTATIONS.UPDATE_CURRENT, { article });
      return article;
    } catch (error) {
      commit(MUTATIONS.UPDATE_CURRENT, { article: null });
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
    commit(MUTATIONS.UPDATE_CURRENT, { article });
  });

const removeArticle = async ({ commit }, { id }) =>
  wrapLoading(commit, async () => {
    const deletedArticle = await ArticleApi.remove(id);
    return deletedArticle;
  });

export default {
  [ACTIONS.GET_ALL]: getAll,
  [ACTIONS.ADD]: addNewArticle,
  [ACTIONS.UPDATE]: updateArticle,
  [ACTIONS.GET_BY_ID]: getArticleById,
  [ACTIONS.REMOVE]: removeArticle
};
