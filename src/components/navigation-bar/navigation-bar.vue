<template>
  <h1>{{ this.title }}</h1>
</template>

<script>
export default {
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

