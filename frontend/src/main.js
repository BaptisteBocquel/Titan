import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SimpleVueValidation from 'simple-vue-validator';

Vue.use(SimpleVueValidation);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
