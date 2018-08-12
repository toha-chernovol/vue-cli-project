import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Axios from 'axios'
import NProgress from 'vue-nprogress'
import 'bootstrap/dist/css/bootstrap.css'

const http = Axios.create({
  baseURL: 'http://localhost:3000/'
})

http.defaults.headers.common['Authorization'] = 'Bearer xxxxxx'

Vue.prototype.$http = http

Vue.config.productionTip = false

Vue.use(NProgress)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
