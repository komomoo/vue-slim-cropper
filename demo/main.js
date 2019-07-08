import Vue from 'vue'
import App from './App'
import Loading from 'vue-slim-loading'
// import SlimCropper from '../dist/vue-slim-cropper.esm.min.js' // prod
import SlimCropper from '../src' // dev

Vue.use(Loading)
Vue.use(SlimCropper)

Vue.config.productionTip = true

new Vue({
  render: h => h(App),
}).$mount('#app')
