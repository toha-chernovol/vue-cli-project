import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Index.vue'
import Users from './pages/Users.vue'
import EditUser from './pages/EditUser.vue'
import AddUser from './pages/AddUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/edit-user/:id',
      name: 'edit-user',
      component: EditUser
    },
    {
      path: '/add-user',
      name: 'add-user',
      component: AddUser
    }
  ]
})
