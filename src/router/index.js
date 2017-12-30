import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import routes from './routes'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
