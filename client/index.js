import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import createRouter from './config/router'
import './assets/styles/global.styl'
import createStore from './store/store'
Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})

// store.watch((state) => state.count + 1, (newCounter) => {
//   console.log('new count watched', newCounter)
// })

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})
router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  // if (to.fullPath === '/app') {
  //   //replace记录历史记录
  //   next({path: '/login', replace: false})
  // } else {
  //   next()
  // }
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})

router.afterEach((to, from) => {
  console.log('after each invoked')
})
new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#root')
