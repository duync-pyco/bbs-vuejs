<template>
  <div id="container">
    <ul>
      <li id="article" v-for="article in articles" :key="article.id">
        <ArticleItem v-bind="article"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Storage from "@/services/storage/storage.js";
import ArticleItem from "@/components/article-item/article-item";

export default {
  data() {
    return {
      articles: []
    };
  },
  components: { ArticleItem },
  created() {
    this.articles = Storage.getAll();
  }
};
</script>

<style scoped>
@import "./articles.css";
</style>

