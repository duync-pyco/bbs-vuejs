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
import { mapGetters, mapActions, mapMutations } from "vuex";

import Storage from "@/services/storage/storage";
import ArticleItem from "@/components/article-item/article-item";
import Button from "@/elements/button/button";

export default {
  components: { ArticleItem, Button },
  data() {
    return {
      id: 0
    };
  },
  computed: {
    ...mapGetters({
      article: "articles/currentArticle"
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
        Storage.remove(this.id);
        this.$router.push("/articles");
      }
    },
    ...mapActions({
      getArticleById: "articles/getArticleById",
      updateArticle: "articles/updateArticle"
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

