import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('formattedId', (value,decimals =2)=> {
  if (!value) return 0
  return value.toFixed(decimals)
})

Vue.mixin({
  methods: {
  globalAlert(msg){
    alert(msg)
  }
},
data(){
  return {
    usuario: '',
    contrasenia: ''
  }
}
})

new Vue({
  render: h => h(App),
}).$mount('#app')
