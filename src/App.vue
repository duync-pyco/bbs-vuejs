<template>
  <div id="app">
    <NavigationBar :title="$router.currentRoute.name"/>
    <hr />
    <div class="bbsapp">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/navigation-bar/navigation-bar";

export default {
  name: "App",
  components: { NavigationBar }
};
</script>

<style>
@import "./App.css";
</style>
