import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from 'axios';
import * as echarts from 'echarts'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = axios; 
Vue.prototype.$echarts = echarts

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
