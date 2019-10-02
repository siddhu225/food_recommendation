import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import signup from '@/components/signup'
import forgot_password from '@/components/forgotpassword'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/forgot/password',
      name: 'forgot_password',
      component: forgot_password
    }
  ]
})