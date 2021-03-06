import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('./components/HelloWorld.vue')
    },
    {
      path: '/indiancocopeat',
      name: 'Indiancocopeat',
      component: () => import('./components/Indiancocopeat.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('./components/Products.vue')
    },
  ]
})

