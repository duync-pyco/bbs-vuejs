<template>
  <div id="container">
    <ul id="articles-list">
      <li
        class="article-item"
        v-for="article in processedArticles" :key="article.id"
        @click.prevent="handleArticleClick(article.id)"
      >
        <ArticleItem v-bind="article"/>
      </li>
    </ul>
    <hr>
    <div id="footer-container">
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
      <div id="pagination-container">
        <Button class="pagination-button" @click="decreaseIndex()">Back</Button>
        <span id="pagination-index">Page {{ pageIndex }}</span>
        <Button class="pagination-button" @click="increaseIndex()">Next</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { GETTERS, ACTIONS } from "../../store/modules/articles/constants";
import ArticleItem from "@/components/article-item/article-item";
import Button from "@/elements/button/button";

export default {
  components: { ArticleItem, Button },
  data() {
    return {
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
    total() {
      return this.articles.length;
    },
    processedArticles() {
      return this.articles
        .sort((a, b) => b.id - a.id)
        .slice(this.start, this.end);
    },
    ...mapGetters({
      articles: GETTERS.DATA
    })
  },
  watch: {
    pageSize() {
      this.pageIndex = 1;
      this.$router.replace({ params: { pageSize: this.pageSize } });
    },
    pageIndex() {
      this.$router.replace({ params: { pageIndex: this.pageIndex } });
    },
    $route() {
      this.syncParams();
    }
  },
  methods: {
    handleArticleClick(id) {
      this.$router.push(`/article/${id}`);
    },
    syncParams() {
      const { params } = this.$router.currentRoute;

      if (params && params.pageSize && params.pageIndex) this.getParams();
      else this.updateParams();
    },
    getParams() {
      const { params } = this.$router.currentRoute;

      this.pageSize = parseInt(params.pageSize, 10);
      this.pageIndex = parseInt(params.pageIndex, 10);
    },
    updateParams() {
      this.$router.replace({
        params: {
          pageSize: this.pageSize,
          pageIndex: this.pageIndex
        }
      });
    },
    increaseIndex() {
      if (this.pageIndex * this.pageSize < this.total) ++this.pageIndex;
    },
    decreaseIndex() {
      if (this.pageIndex > 1) --this.pageIndex;
    },
    ...mapActions({
      getAll: ACTIONS.GET_ALL
    })
  },
  created() {
    this.getAll().then(() => {
      this.syncParams();
    });
  }
};
</script>

<style scoped>
@import "./articles.css";
</style>

