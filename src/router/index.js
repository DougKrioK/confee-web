import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import routes from './routes'
import beforeEach from './beforeEach'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

router.beforeEach(beforeEach)
export default router
