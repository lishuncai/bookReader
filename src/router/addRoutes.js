import Book from '@/components/Book.vue';
const Home = resolve => {
  require.ensure([], () => {
    resolve(require('@/components/home.vue'))
  }, 'home')
}
export default {
  book: {
    path: '/book',
    name: 'book',
    component: Book,
    children: [
      {
        path: 'home/:title',
        name: 'home',
        component: Home,
        props: true
      }
    ]
  }
}
