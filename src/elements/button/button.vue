<template>
  <button @click.prevent="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>


<style scoped>
@import "./button.css";
</style>


