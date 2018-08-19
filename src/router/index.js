import Vue from "vue";
import Router from "vue-router";
import NewArticle from "@/views/new-article/new-article";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/new-article",
      name: "New Article",
      component: NewArticle
    },
    {
      path: "*",
      redirect: "/new-article"
    }
  ]
});
