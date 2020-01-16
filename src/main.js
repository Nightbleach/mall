import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-pro/css/all.css'
import ScrollLoader from 'vue-scroll-loader'

Vue.config.productionTip = false
Vue.use(ScrollLoader)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
