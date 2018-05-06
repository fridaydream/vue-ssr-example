import Vue from 'vue'
// var globalvar = '1231' //eslint-disable-line
new Vue({
  el: '#root',
  data: {
    isActive: true,
    arr: [1, 2, 3],
    html: '<span>3123</span',
    aa: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    }
  },
  template: `
    <div v-html="html" :id="aa" @click="handleClick" :class="[{active:isActive}]" :style="styles">

    </div>
  `,
  methods: {
    handleClick () {
      window.alert('clicked')
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }

})
