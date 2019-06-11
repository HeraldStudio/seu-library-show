import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// Vue.config.productionTip = false

Vue.use(iView)

router.afterEach(route => document.title = route.name)

const vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
