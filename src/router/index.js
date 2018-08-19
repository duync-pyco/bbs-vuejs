import Vue from "vue";
import Router from "vue-router";
import NewArticle from "@/views/new-article/new-article";
import Articles from "@/views/articles/articles";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/new-article",
      name: "New Article",
      component: NewArticle
    },
    {
      path: "/articles",
      name: "Articles",
      component: Articles
    },
    {
      path: "*",
      redirect: "/new-article"
    }
  ]
});
