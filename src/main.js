import '@/assets/styles/reset.scss'
import '@/assets/styles/global.scss'
import '@babel/polyfill'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'

import router from '@/router/index.js'
import App from './app.vue'

Vue.use(ElementUI)
Vue.use(Router)
/**
 * 动态插入节点导致的问题：webpack打包的js包无法置于body
 */
// const root = document.createElement('div')
// document.body.appendChild(root)

const root = document.getElementById('app');
new Vue({
  render: (h) => h(App),
  router
}).$mount(root)
