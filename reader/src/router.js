import Vue from 'vue'
import Router from 'vue-router'

import Ebook from '@/Ebook'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/ebook'
    },
    {
      path:'/ebook',
      component:Ebook
    }
  ]
})
