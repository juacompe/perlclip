import Vue from 'vue'
import Router from 'vue-router'
import Counterstring from '@/components/Counterstring'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counterstring',
      component: Counterstring
    }
  ]
})
