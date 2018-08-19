import Vue from "vue";
import Router from "vue-router";
import NewArticle from "@/views/new-article/new-article";
import Articles from "@/views/articles/articles";
import ArticleDetail from "@/views/article-detail/article-detail";
import EditArticle from "@/views/edit-article/edit-article";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/new-article",
      name: "New Article",
      component: NewArticle
    },
    {
      path: "/articles/:pageSize?/:pageIndex?",
      name: "Articles",
      component: Articles
    },
    {
      path: "/article/:id",
      name: "Article Detail",
      component: ArticleDetail
    },
    {
      path: "/edit-article/:id",
      name: "Edit Article",
      component: EditArticle
    },
    {
      path: "*",
      redirect: "/new-article"
    }
  ]
});
