import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import Actions from './views/Actions'
import Portfolio from './views/Portfolio'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/actions', component: Actions },
  { path: '/portfolio', component: Portfolio }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
