<template>
  <ArticleForm @submit="this.handleSubmit"/>
</template>

<script>
import Storage from "@/services/storage/storage";
import ArticleForm from "@/components/article-form/article-form";

export default {
  name: "NewArticle",
  components: { ArticleForm },
  methods: {
    handleSubmit(article) {
      Storage.create(article);
      this.$router.push("/articles");
    }
  }
};
</script>
