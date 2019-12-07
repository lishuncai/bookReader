import Book from '@/components/Book.vue';
const Home = () => import('@/components/home.vue')
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
