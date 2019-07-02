import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home, meta: { keepAlive: true, scrollTop: 0 }},
    { path: '/share',name: 'share',component: () => import('./views/Share.vue')},
    { path: '/list',name: 'list',component: () => import('./views/List.vue')},
    { path: '/message',name: 'message',component: () => import('./views/message.vue')},
    { path: '/car',name: 'car',component: () => import('./views/car.vue')},
    { path: '/mine',name: 'mine',component: () => import('./views/mine.vue')},
    { path: '/shopDeatil',name: 'shopDeatil',component: () => import('./views/shopDeatil.vue')}
  ]
})
