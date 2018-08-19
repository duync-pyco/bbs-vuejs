<template>
  <ArticleForm :initArticle="this.article" @submit="this.handleSubmit"/>
</template>

<script>
import Storage from "@/services/storage/storage";
import ArticleForm from "@/components/article-form/article-form";

export default {
  name: "NewArticle",
  components: { ArticleForm },
  watch: {
    $route() {
      this.getArticle();
    }
  },
  methods: {
    handleSubmit(article) {
      Storage.update({
        ...article,
        updatedAt: new Date().toString()
      });
      this.$router.push("/articles");
    },
    getArticle() {
      this.id = parseInt(this.$router.currentRoute.params.id);
      this.article = Storage.getById(parseInt(this.id, 10));
    }
  },
  created() {
    this.getArticle();
  }
};
</script>
