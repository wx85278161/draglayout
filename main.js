// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 原项目地址 https://github.com/ronliruonan/aya-draglayout

import Vue from 'vue'
import App from './App'
import router from './router'

import store from "./store";

import ElementUI from "element-ui";
Vue.use(ElementUI, { size: "small", zIndex: 3000 });

import "element-ui/lib/theme-chalk/index.css";



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
