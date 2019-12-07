const Home = resolve => {
  require.ensure([], () => {
    resolve(require('@/components/home.vue'))
  }, 'home')
}

export default {
  home: {
    path: '/home/:Id',
    name: 'home',
    component: Home,
    props: true
  }
}
