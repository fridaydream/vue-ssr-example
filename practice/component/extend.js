import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
  <div>
  <input type="text" v-model="text" />
   this is component{{text}}
   <span v-show="active">see me if active</span>
   <span @click="handleChange">{{propOne}}</span>
  </div>`,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log('component mounted')
  },
  methods: {
    handleChange () {
      // this.onChange()
      this.$emit('change')
    }
  }
}

const parent = new Vue({
  name: 'parent'
})
const component2 = {
  parent: parent,
  extends: component,
  data () {
    return {
      text: 999,
      name: '123'
    }
  },
  mounted () {
    this.$parent.text = 'kkkk'
    console.log(this.$parent.$options.name)
  }
}

// Vue.component('CompOne', component)

// const CompVue = Vue.extend(component)
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'XXX'
//   },
//   data: {
//     text: 123
//   },
//   mounted () {
//     console.log('instance mounted')
//   }

// })

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    Comp: component2
  },
  data: {
    text: 'aaa'
  },
  mounted () {
    console.log(this.$parent.$options.name)
  },
  template: `
  <div>
    <span>{{text}}</span>
    <comp prop-one="1231"></comp>
  </div>
  `
})
