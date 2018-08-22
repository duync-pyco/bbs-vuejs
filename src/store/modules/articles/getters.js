import { GETTERS } from "./constants";

const data = state => state.data;
const currentArticle = state => state.currentArticle;

export default {
  [GETTERS.DATA]: data,
  [GETTERS.CURRENT_ARTICLE]: currentArticle
};
