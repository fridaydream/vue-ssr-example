import Vue from 'vue'

const ChildComponent = {
  template: `
    <div>child component</div>
  `,
  inject: ['yeye', 'value'],
  mounted () {
    console.log(this.yeye)
    console.log(this.value)
  }
}
const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  // template: `
  // <div :style="style">
  // <div class="header">
  // <slot name="header"></slot>
  // </div>
  // <div class="body">
  // <slot name="body"></slot>
  // </div>

  // </div>`,
  template: `
    <div :style="style">
      <slot value="value" name="aa"></slot>
    </div>
  `,
  data () {
    return {
      style: {
        width: '100px',
        height: '100px',
        border: '1px solid #aaa'
      },
      value: 'component-value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    return {
      yeye: this,
      value: this.value
    }
  },
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value)
    console.log(this.$refs.span)
  },
  el: '#root',
  template: `
  <div>
    <comp-one ref="comp">
      <span slot-scope="props" ref="span">{{props.value}}</span>
    </comp-one>
  </div>
  `
})
