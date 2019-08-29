import Router from 'vue-router';
import Book from '@/components/Book.vue';
import Login from '@/components/login.vue';
import notFound from '@/404.vue';
import store from '@/store/index.js';
import otherRoutes from './addRoutes';
import home from '@/components/home.vue';
// const Home = resolve => require(/* webpackChunkName: "home" */'@/components/home.vue', resolve);

const route = new Router({
  mode: 'history',
  base: '/',
  routes: [{
      path: '/',
      name: 'Book',
      component: Book,
      children: [

      ],
      beforeEnter: checkLogin,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/404',
      name: '404',
      component: notFound
    },
    {
      path: '*',
      component: notFound,
      beforeEnter: checkLogin
    }
  ]
})
// route.beforeEach((to, from, next) => {
//   console.log(from, to)
//   if (to.name === 'login') {
//     next()
//   }
//   console.log('dfdf')
//   if (store.state.logined) {
//     next()
//   } else {
//     const loginState = sessionStorage.getItem('logined');
//     if (loginState) {
//       store.commit('login', loginState)
//       route.addRoutes([otherRoutes.home])
//       next({
//         ...to,
//         replace: true
//       })
//     } else {
//       next('/login')
//       console.log('logined false')
//     }
//   }
// })

function checkLogin(to, from, next) {
  if (store.state.logined) {
    next()
  } else {
    const loginState = sessionStorage.getItem('logined');
    // 判断是登陆成功后刷新页面
    if (loginState) {
      // 恢复登陆状态， 重新添加动态路由
      store.commit('login', loginState)
      route.addRoutes([otherRoutes.home])
      // 路由不匹配时报404，前提是静态路由不能配置重定向
      route.addRoutes([{
        path: '*',
        redirect: '/404'
      }])
      // 解决动态路由刷新后不渲染问题， 同时静态路由不能有重定向， 否则失败
      next({
        ...to,
        replace: true
      })
    } else {
      next()
    }
  }
}
export default route;