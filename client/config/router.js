import Router from 'vue-router'

import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/'
    // linkActiveClass: 'active-link',
    // linkExactActiveClass: 'exact-active-link',
    // 页面滚动条回来时自动到原来位置
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    },
    fallback: true
    // parseQuery(query){

    // },
    // stringifyQuery(obj){

    // }
  })
}
