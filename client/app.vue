<template>
	<div id="app">
		<div id="cover">
			<Header></Header>
      <p>{{fullName}}{{counter}}</p>
      <p>{{textPlus}}</p>
			<!-- <Todo></Todo> -->
      <router-link to="/app">app</router-link>
      <router-link to="/login">login</router-link>
      <!-- <router-link to="/login/exact">login exact</router-link> -->
      <transition name="fade">
          <router-view />
      </transition>

			<Footer></Footer>
      <!-- <router-view name="a"/> -->
		</div>
	</div>
</template>

<script>
	import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex' //eslint-disable-line
// import Todo from './views/todo/todo.vue'
export default{
  metaInfo: {
    title: 'cp \'s Todo App'
  },
	  components: {
	    Header,
	    Footer
	    // Todo
	  },
  mounted () {
    console.log('a/textPlus', this.textPlus)
    this.updateCountAsync({num: 5})
    this['b/testAction']()
    // let i = 1
    // setInterval(() => {
    //   this.updateCount({num: i++, num2: 5})
    // }, 1000)
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add', 'b/testAction']),
    ...mapMutations(['updateCount', 'a/updateText'])
  },
  computed: {
    ...mapState({
      counter: (state) => state.count,
      textA: state => state.a.text
      // textC: state => state.c.text
    }),
    ...mapGetters({
      fullName: 'fullName',
      textPlus: 'a/textPlus'
    })
  }
}
</script>


<style lang="stylus" scoped>
#app{
	position: absolute;
	left:0;
	right: 0;
	top:0;
	bottom:0;
}
#cover{
	position:absolute;
	left:0;
	top:0;
	right: 0;
	bottom:0;
	background-color: #999;
	opacity:.9;
	z-index:1;
}
</style>
