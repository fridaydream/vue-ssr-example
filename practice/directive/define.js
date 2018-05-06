import Vue from 'vue'

const component = {
  props: {
    active: {
      // type: Boolean,
      // required: true,
      // default: true,
      validator (value) {
        return typeof value === 'boolean'
      }
    },
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
  methods: {
    handleChange () {
      // this.onChange()
      this.$emit('change')
    }
  }
}

// Vue.component('CompOne', component)

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data: {
    prop1: 'text1'
  },
  mounted () {
  },
  methods: {
    onChange () {
      this.prop1 = 'text222'
    }
  },
  template: `
  <div>
    <comp-one :active='true' :prop-one="prop1" @change="onChange"></comp-one>
    <comp-one :active='false'></comp-one>
  </div>
  `
})
