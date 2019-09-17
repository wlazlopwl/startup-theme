import Vue from 'vue'
import Router from 'vue-router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Home from '../views/Home.vue'


Vue.use(Vuetify)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
