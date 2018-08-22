import Vue from "vue";
import Notifications from "vue-notification";
import App from "./App";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

Vue.use(Notifications);

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
