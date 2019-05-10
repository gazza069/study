import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Kouenji from '@/components/Kouenji'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/kouenji',
      name: 'Kouenji',
      component: Kouenji
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    },
  ]
})
