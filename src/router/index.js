import Vue from 'vue'
import Router from 'vue-router'
//import Header from '@/components/Header'
//import Footer from '@/components/Footer'
import Cover from '@/components/Cover'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Collectlist from '@/components/Collectlist'
import Ranklist from '@/components/Ranklist'
import Myhome from '@/components/Myhome'
import Collect from '@/components/Collect'
import Author from '@/components/Author'
import Novel from '@/components/Novel'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cover',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/collectlist',
      name: 'Collectlist',
      component: Collectlist
    },
    {
      path: '/ranklist',
      name: 'Ranklist',
      component: Ranklist
    },
    {
      path: '/myhome',
      name: 'Myhome',
      component: Myhome
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    },
    {
      path: '/novel',
      name: 'Novel',
      component: Novel
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
