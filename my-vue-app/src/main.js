// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import LazyLoadDirective from "./directives/LazyLoadDirective";
import VueLazyload from "vue-lazyload";
import { VLazyImagePlugin } from "v-lazy-image";
// import axios from "axios";

Vue.config.productionTip = false;

Vue.directive("lazyload", LazyLoadDirective);
Vue.use(VLazyImagePlugin);
Vue.use(VueLazyload, {
  attempt: 1,
  preLoad: 1,
  // observer: true,
  // observerOptions: {
  //   rootMargin: "10px 20px 30px 40px",
  //   threshold: 1.0
  // },
  error: "./assets/img/error.png",
  loading: "./assets/img/1.gif",
  listenEvents: ["scroll", "wheel", "mousewheel"]
  // lazyComponent: true
});

/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   components: { App },
//   template: "<App/>"
// });
new Vue({
  render: h => h(App)
}).$mount("#app");
