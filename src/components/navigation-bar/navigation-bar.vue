<template>
  <div id="container">
    <router-link to="/articles">
      <Button class="navigation-button">Article List</Button>
    </router-link>
    <h1 id="title">{{ this.title }}</h1>
    <router-link to="/new-article">
      <Button class="navigation-button">New Article</Button>
    </router-link>
  </div>
</template>

<script>
import Button from "@/elements/button/button";

export default {
  components: { Button },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
@import "./navigation-bar.css";
</style>

