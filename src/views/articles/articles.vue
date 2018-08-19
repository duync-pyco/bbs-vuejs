<template>
  <div id="container">
    <ul>
      <li id="article" v-for="article in sortedArticles" :key="article.id">
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
  computed: {
    sortedArticles() {
      return this.articles.sort((a, b) => a.id < b.id);
    }
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

