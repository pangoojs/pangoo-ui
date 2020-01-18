import Vue from 'vue'
import PangooDesign from 'pangoo-design'
import 'pangoo-design/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(PangooDesign)

new Vue({
  render: h => h(App),
}).$mount('#app')
