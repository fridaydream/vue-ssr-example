import Vue from 'vue'

const component = {
  template: `
  <div  :style="style">
  </div>`,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
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
  el: '#root',
  template: `
  <div>
    <comp-one>
      <span>
      this is content
      </span>
    </comp-one>
  </div>
  `
})
