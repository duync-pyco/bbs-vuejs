<template>
  <div id="container">
    <ul>
      <li id="article" v-for="article in processedArticles" :key="article.id">
        <ArticleItem v-bind="article"/>
      </li>
    </ul>
    <hr>
    <div id="select-container">
      <span id="select-label">Articles per page</span>
      <select name="Articles per page" v-model="pageSize">
        <option
          v-for="(pageSizeOption, index) in pageSizeOptions"
          :key="index"
          :value=pageSizeOption
        >
          {{ pageSizeOption }} items
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import Storage from "@/services/storage/storage.js";
import ArticleItem from "@/components/article-item/article-item";

export default {
  data() {
    return {
      articles: [],
      pageSizeOptions: [1, 2, 3, 5, 8],
      pageSize: 2,
      pageIndex: 1
    };
  },
  computed: {
    start() {
      return (this.pageIndex - 1) * this.pageSize;
    },
    end() {
      return this.start + this.pageSize;
    },
    processedArticles() {
      return this.articles
        .sort((a, b) => a.id < b.id)
        .slice(this.start, this.end);
    }
  },
  watch: {
    pageSize() {
      this.$router.replace({ params: { pageSize: this.pageSize } });
    }
  },
  components: { ArticleItem },
  created() {
    this.articles = Storage.getAll();
    this.$router.replace({ params: { pageSize: this.pageSize } });
  }
};
</script>

<style scoped>
@import "./articles.css";
</style>

