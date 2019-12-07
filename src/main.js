import '@/assets/styles/reset.scss'
import '@/assets/styles/global.scss'
import '@babel/polyfill'
import Vue from 'vue'
import Router from 'vue-router'
import router from '@/router/index.js'
import store from '@/store/index.js'
import App from './app.vue'
Vue.use(Router)

/**
 * 动态插入节点导致的问题：webpack打包的js包无法置于body
 */
// const root = document.createElement('div')
// document.body.appendChild(root)

const root = document.getElementById('app');
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount(root)
