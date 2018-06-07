import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PostImg from './views/PostImg.vue'
import GetImg from './views/GetImg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/postimg',
      name: 'postimg',
      component: PostImg
    },
    {
      path: '/getimg',
      name: 'getimg',
      component: GetImg
    }
  ]
})
