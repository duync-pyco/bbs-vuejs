<template>
  <div id="app">
    <LoadingMask />
    <notifications group="app"/>
    <NavigationBar :title="$router.currentRoute.name"/>
    <hr />
    <div id="app-container">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/navigation-bar/navigation-bar";
import LoadingMask from "@/components/loading-mask/loading-mask";

export default {
  name: "App",
  components: { NavigationBar, LoadingMask }
};
</script>

<style>
@import "./App.css";
</style>
