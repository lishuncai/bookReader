import Book from '@/components/Book.vue';
// const Home = resolve => {
//   require.ensure([], () => {
//     resolve(require('@/components/home.vue'))
//   }, 'home')
// }
const Home = () => import('@/components/home.vue')

export default {
  book: {
    path: '/book',
    name: 'Book',
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
