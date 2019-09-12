import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import ApiService from "./common/api.service";
import swal from 'sweetalert2'

ApiService.init();

Vue.prototype.$swal = swal;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  store.dispatch('checkAuth');

  if(to.name !== 'index' && !store.state.member.isAuth){
    next({name:'index'});
  }
  next();
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
