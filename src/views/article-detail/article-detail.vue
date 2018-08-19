<template>
  <div id="container">
    <ArticleItem
      id="article-item"
      v-if="!!article"
      v-bind="article"
    />
    <h3 v-else>Item not found</h3>
  </div>
</template>

<script>
import Storage from "@/services/storage/storage";
import ArticleItem from "@/components/article-item/article-item";

export default {
  components: { ArticleItem },
  data() {
    return {
      id: "",
      article: null
    };
  },
  watch: {
    $route() {
      this.getArticle();
    }
  },
  methods: {
    getArticle() {
      this.id = this.$router.currentRoute.params.id;
      this.article = Storage.getById(parseInt(this.id, 10));
    }
  },
  created() {
    this.getArticle();
  }
};
</script>

<style scoped>
@import "./article-detail.css";
</style>

