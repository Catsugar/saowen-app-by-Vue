import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)
export default new Router({
  routes: [
    {
      path: '/cover',
      name: 'Cover',
      component: resolve => require(['@/components/Cover.vue'], resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/Login.vue'], resolve)
    },
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/components/Index.vue'], resolve)
    },
    {
      path: '/collectlist',
      name: 'Collectlist',
      component: resolve => require(['@/components/Collectlist.vue'], resolve)
    },
    {
      path: '/ranklist',
      name: 'Ranklist',
      component: resolve => require(['@/components/Ranklist.vue'], resolve)
    },
    {
      path: '/myhome',
      name: 'Myhome',
      component: resolve => require(['@/components/User.vue'], resolve)
    },
    {
      path: '/user/:id',
      name: 'User',
      component: resolve => require(['@/components/User.vue'], resolve)
    },
    {
      path: '/collect/:id',
      name: 'Collect',
      component: resolve => require(['@/components/Collect.vue'], resolve)
    },
    {
      path: '/author/:id',
      name: 'Author',
      component: resolve => require(['@/components/Author.vue'], resolve)
    },
    {
      path: '/novel/:id',
      name: 'Novel',
      component: resolve => require(['@/components/Novel.vue'], resolve)
    },
    {
      path: '/search',
      name: 'Search',
      component: resolve => require(['@/components/Search.vue'], resolve)
    },
    {
      path: '/result/:id',
      name: 'Result',
      component: resolve => require(['@/components/Result.vue'], resolve)
    }
  ]
})
