import Vue from 'vue'
new Vue({
  el: '#root',
  template: `
    <div>
      <div v-if="active">Text:{{text}}</div>
      <div v-else>else content</div>
      <div v-html="html">Text:{{text}}</div>
      <div ><input type="text" v-model="text" /></div>
      <ul>
        <li v-for="(item,index) in arr" :key="item">{{item}}</li>
      </ul>
      <ul>
        <li v-for="(val,key,index) in obj" :key="index">{{val}}:{{key}}:{{index}}</li>
      </ul>
      <div>
        <input type="checkbox" v-for="item in newObj" :value="item.id" v-model="arr"/>
      </div>
      <div>
        <input type="radio"  value="one" v-model="arr1"/>
        <input type="radio"  value="two" v-model="arr1"/>
      </div>
    </div>

  `,
  data: {
    text: 0,
    active: true,
    newObj: [{id: 10001, value: 'kkkkk'}, {id: 10002, value: 'jjjj'}, {id: 10003, value: 'bbbb'}],
    arr: [],
    obj: {
      a: '1231',
      b: '234',
      c: 'llll'
    },
    arr1: '',
    picked: '',
    html: '<span>this is html</span>'
  }
})
