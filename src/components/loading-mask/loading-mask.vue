<template>
  <div id="loading-mask" v-if="isLoading">
    <div id="loading-ring"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import { GETTERS } from "../../store/modules/app/constants";

export default {
  computed: {
    ...mapGetters({
      isLoading: GETTERS.IS_LOADING
    })
  }
};
</script>

<style scoped>
@import "./loading-mask.css";
</style>
