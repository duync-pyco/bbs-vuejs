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
import Storage from "@/services/storage/storage";
import ArticleItem from "@/components/article-item/article-item";
import Button from "@/elements/button/button";

export default {
  components: { ArticleItem, Button },
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
      this.id = parseInt(this.$router.currentRoute.params.id);
      this.article = Storage.getById(parseInt(this.id, 10));
    },
    handleEditClick() {
      this.$router.push(`/edit-article/${this.id}`);
    },
    handleDeleteClick() {
      const confirmation = confirm("Are you sure?");
      if (confirmation === true) {
        Storage.remove(this.id);
        this.$router.push("/articles");
      }
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

