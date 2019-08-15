import Router from 'vue-router';
import Book from '@/components/Book.vue';
// const Home = resolve => require(/* webpackChunkName: "home" */'@/components/home.vue', resolve);
const Home = resolve => {
  require.ensure([], () => {
    resolve(require('@/components/home.vue'))
  }, 'home')
}
export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'Book',
    component: Book
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    redirect: '/home'
  }
  ]
})
