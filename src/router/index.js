import Vue from 'vue'
import Router from 'vue-router'
import Counterstring from '@/components/Counterstring'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counterstring',
      component: Counterstring
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
