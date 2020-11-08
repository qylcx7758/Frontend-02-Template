import HelloWorld from "./HelloWorld.vue"
import Vue from "Vue"
Vue.config.productionTip = false;
new Vue({
    el: "#app",
    // template: "<HelloWorld/>",
    // components: { HelloWorld }
    //生产环境不能直接用template，而是要用render
    render:h=>h(HelloWorld)
  });
  