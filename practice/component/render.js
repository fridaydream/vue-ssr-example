import Vue from 'vue'

const component = {
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  props: ['props1'],
  render (createElement) {
    return createElement('div', {
      style: this.style
      // on: {
      //   click: () => {
      //     this.$emit('click')
      //   }
      // }
    }, [
      this.$slots.header,
      this.props1
    ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
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
  data () {
    return {
      value: '123'
    }
  },
  methods: {
    handleClick () {
      this.value = 'click'
    }
  },
  mounted () {
  },
  el: '#root',
  // template: `
  //   <comp-one ref="comp">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  // `,
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comp',
      props: {
        props1: '333'
      },
      // on: {
      //   click: this.handleClick
      // },
      nativeOn: {
        click: this.handleClick
      }
    }, [
      createElement('span', {
        ref: 'span',
        slot: 'header',
        domProps: {
          innerHTML: '<span>999</span>'
        }
      }, this.value)
    ])
  }
})
