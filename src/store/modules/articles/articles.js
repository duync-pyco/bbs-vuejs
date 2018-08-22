import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const state = () => ({
  data: [],
  currentArticle: null,
  isLoading: false
});

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state
};
