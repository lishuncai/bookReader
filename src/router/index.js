import Router from 'vue-router';
import Book from '@/components/Book.vue';
import Login from '@/components/login.vue';
import notFound from '@/404.vue';
// const Home = resolve => require(/* webpackChunkName: "home" */'@/components/home.vue', resolve);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
    path: '/',
    name: 'Book',
    component: Book
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/notFound',
    name: 'notFound',
    component: notFound
  },
  {
    path: '*',
    redirect: '/notFound'
  }]
})
