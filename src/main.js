import Vue from "vue";
import App from "./App.vue";

// Added JQuery and bootstrap dependencies
import JQuery from "jquery";
import "popper.js";
import "bootstrap";

// Making JQuery's '$' and 'JQuery' a global variable
window.$ = window.JQuery = JQuery;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
