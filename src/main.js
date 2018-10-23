import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './router'
 
import Vuetify from 'vuetify'

 // index.js or main.js
import 'vuetify/dist/vuetify.min.css' 
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "@/assets/custom.css"
import "@mdi/font/css/materialdesignicons.min.css"


Vue.use(Vuetify)
Vue.use(VueRouter)


/****************************************/
/********** Router START here **********/
/**************************************/
const router = new VueRouter({
  routes: Routes
}); 

new Vue ({
  el: '#app',
  render: h => h(App),
  router: router
})

