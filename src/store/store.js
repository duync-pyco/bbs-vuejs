import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app/app";
import articles from "./modules/articles/articles";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    articles
  }
});
