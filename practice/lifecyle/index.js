import Vue from 'vue'
const app = new Vue({
  // el: '#root',
  // template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate: function () {
    console.log(this.$el, 'beforeCreated')
  },
  created: function () {
    console.log(this.$el, 'created')
  },
  beforeMount: function () {
    console.log(this.$el, 'beforeMount')
  },
  mounted: function () {
    console.log(this.$el, 'mount')
  },
  beforeUpdate: function () {
    console.log(this.$el, 'beforeUpdate')
  },
  updated: function () {
    console.log(this, 'updated')
  },
  activated: function () {
    console.log(this, 'beforeUpdate')
  },
  deactivated: function () {
    console.log(this, 'beforeUpdate')
  },
  beforeDestroy: function () {
    console.log(this, 'beforeDestroy')
  },
  destroyed: function () {
    console.log(this, 'destroy')
  },
  render (h) {
    // throw new TypeError('eroor')
    console.log('render function ')
    return h('div', {}, 'this.text')
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 会向上冒泡，并且正式环境可以使用
  }
})
app.$mount('#root')
// setInterval(() => {
//   app.text += 1
// }, 1000)
// setTimeout(() => {
//   app.$destroy()
// }, 1000)
