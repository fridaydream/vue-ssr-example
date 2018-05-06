// import Vue from 'vue'

// const app = new Vue({
//   // el: '#root',
//   template: '<div ref="div">this is {{text}} {{obj.a}}</div>',
//   data: {
//     text: 0,
//     obj: {}
//   }
// })
// app.$mount('#root')
// // let i = 0
// setInterval(() => {
//   app.text += 1
//   app.text += 1
//   app.text += 1
//   app.text += 1
//   app.text += 1
//   // app.$data.text += 1
//   // app.obj.a = i++
//   // app.$set(app.obj, 'a', i++)
//   // app.$forceUpdate()
// }, 1000)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)
// const unwatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText}:${oldText}`)
// })
// unwatch()
// app.$once('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })

// setInterval(() => {
//   app.$emit('test', 1, 2)
// }, 1000)
//
import './component/render'
