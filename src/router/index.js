import Router from 'vue-router';
import Book from '@/components/Book.vue';
import Home from '@/components/home.vue';
export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Book',
      component: Book,
      beforeEnter: (to, from, next) => {
        console.log(to, from);
        next();
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log(to, from);
        next();
      }
    }
  ]
})
