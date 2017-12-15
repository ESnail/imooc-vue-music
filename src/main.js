// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 延迟3秒点击
import fastclick from 'fastclick'
// 图片懒加载
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

/* eslint-disable no-unused-vars */

fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
