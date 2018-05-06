import Vue from 'vue'
new Vue({
  el: '#root',
  template: `
  <div>
    <p> Name:{{getFullName}}</p>
    <p> Name:{{getName()}}</p>
    <p> Name:{{number}}</p>
    <p> obj.a:{{obj.a}}</p>
    <p>FullName:{{fullname}}</p>
    <p> Name: <input type="text" v-model="number"/></p>
    <p> firstName: <input type="text" v-model="firstName"/></p>
    <p> lastName: <input type="text" v-model="lastName"/></p>
    <p> obj: <input type="text" v-model="obj.a"/></p>
  </div>`,
  data: {
    firstName: 'jokcy',
    lastName: 'Lou',
    number: 0,
    fullname: '',
    obj: {
      a: 1
    }
  },
  computed: {
    getFullName () {
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    getName () {
      console.log('methods invoked')
      return `${this.firstName} ${this.lastName}`
    }
  },
  watch: {
    'obj.a': {
      handler (newName, oldName) {
        // this.fullname = newName + ' ' + this.lastName
        this.obj.a += 1
        console.log('obj.a change')
      },
      immediate: true
      // deep: true
    }
  }
  // mounted () {
  //   this.obj = {
  //     a: '345'
  //   }
  // }
})
