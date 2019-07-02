import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Component} from 'vue-property-decorator'
import './assets/css/style.less'
import './assets/fonts/icon.css'
import storage from '@/global/storage.ts'
Vue.config.productionTip = false
Vue.prototype.$storage = storage

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);
router.beforeEach((to, from, next: () => void) => {
  if (from.meta.keepAlive) {
    const $content = document.querySelector('#content');
    const scrollTop = $content ? $content.scrollTop : 0;
    from.meta.scrollTop = scrollTop;
  }
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
