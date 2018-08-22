<template>
  <div id="loading-mask" v-if="isLoading">
    <div id="loading-ring"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isLoading: "articles/isLoading"
    })
  }
};
</script>

<style scoped>
@import "./loading-mask.css";
</style>
