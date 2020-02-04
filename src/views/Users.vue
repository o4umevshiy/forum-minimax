<template>
  <section>

		<transition name="fade" mode="out-in">
			<Screen1 v-if="screen === 1">
			</Screen1>
			<Screen2 v-if="screen === 2">
			</Screen2>
		</transition>

	</section>
</template>

<script>
	import Screen1 from '../components/Screen1'
	import Screen2 from '../components/Screen2'

	export default {
	  data(){
	    return{
				lastMess : ''
			}
		},
		computed : {
			screen : function () {
				return this.$store.state.screen
      }
		},
		methods : {
      changeItem(index){
        this.$store.dispatch('changeItem', index);
        window.localStorage.message = index;
			}
		},
		mounted(){
	    setInterval( () => {
				this.lastMess = window.localStorage.message
			}, 100);
		},
		components : {
	    Screen1,
			Screen2
		}
	}
</script>
