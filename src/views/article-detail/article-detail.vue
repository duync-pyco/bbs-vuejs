<template>
  <div id="container">
    <div v-if="!!article">
      <ArticleItem
        id="article-item"
        v-bind="article"
      />
      <hr />
      <div id="footer">
        <Button @click="handleEditClick">Edit</Button>
        <Button @click="handleDeleteClick">Delete</Button>
      </div>
    </div>
    <h3 v-else>Item not found</h3>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { GETTERS, ACTIONS } from "../../store/modules/articles/constants";
import ArticleItem from "@/components/article-item/article-item";
import Button from "@/elements/button/button";

export default {
  components: { ArticleItem, Button },
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
    handleEditClick() {
      this.$router.push(`/edit-article/${this.id}`);
    },
    handleDeleteClick() {
      const confirmation = confirm("Are you sure?");
      if (confirmation === true) {
        this.removeArticle({ id: this.id }).then(() => {
          this.$router.push("/articles");
        });
      }
    },
    ...mapActions({
      getArticleById: ACTIONS.GET_BY_ID,
      updateArticle: ACTIONS.UPDATE,
      removeArticle: ACTIONS.REMOVE
    }),
    getArticle() {
      this.id = parseInt(this.$router.currentRoute.params.id);
      this.getArticleById({ id: this.id }).then(res => {
        if (res) {
          this.updateArticle({
            article: {
              ...this.article,
              views: this.article.views + 1
            }
          });
        }
      });
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

