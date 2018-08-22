<template>
  <div>
    <ArticleForm
      v-if="!!article"
      :initArticle="article"
      @submit="handleSubmit"
    />
    <h3 v-else>Item not found</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import { GETTERS, ACTIONS } from "../../store/modules/articles/constants";
import ArticleForm from "@/components/article-form/article-form";

export default {
  name: "NewArticle",
  components: { ArticleForm },
  computed: {
    ...mapGetters({
      article: GETTERS.CURRENT_ARTICLE
    })
  },
  watch: {
    $route() {
      this.getArticle();
    }
  },
  methods: {
    handleSubmit(article) {
      this.updateArticle({
        article: {
          ...article,
          updatedAt: new Date().toString()
        }
      }).then(() => {
        this.$router.push("/articles");
      });
    },
    getArticle() {
      this.id = parseInt(this.$router.currentRoute.params.id);
      this.getArticleById({ id: this.id });
    },
    ...mapActions({
      getArticleById: ACTIONS.GET_BY_ID,
      updateArticle: ACTIONS.UPDATE
    })
  },
  created() {
    this.getArticle();
  }
};
</script>
