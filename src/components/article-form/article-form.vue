<template>
  <div>
    <form>
      <input type="text" name="title" placeholder="title" autofocus required />
      <input type="text" name="author" placeholder="author" required />
      <input type="text" name="email" placeholder="email address" required />
      <textarea type="text" name="content" placeholder="content" cols="40" rows="5" required></textarea>
      <Button class="button-submit" :text="'Submit'">Post</Button>
    </form>
  </div>
</template>

<script>
import Button from "@/elements/button/button";
export default {
  components: { Button }
};
</script>


<style scoped>
@import "./article-form.css";
</style>

