<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" }
  }
};
</script>

<style scoped>
@import "./button.css";
</style>


