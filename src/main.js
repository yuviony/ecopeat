import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.use(require('vue-script2'))

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

