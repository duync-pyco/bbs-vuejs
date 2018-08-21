<template>
  <ArticleForm @submit="this.handleSubmit"/>
</template>

<script>
import { mapActions } from "vuex";
import Storage from "@/services/storage/storage";
import ArticleForm from "@/components/article-form/article-form";

export default {
  name: "NewArticle",
  components: { ArticleForm },
  methods: {
    handleSubmit(article) {
      this.addNewArticle({ article });
      this.$router.push("/articles");
    },
    ...mapActions({
      addNewArticle: "articles/addNewArticle"
    })
  }
};
</script>
