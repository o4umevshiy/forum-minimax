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
			}
		},
		computed : {
			screen : function () {
				return this.$store.state.screen
      }
		},
		methods : {
      changeItem( arr ){

        if( arr[0] === 'i' ){ // Если тема
          arr = arr.replace('i', '');
					this.$store.dispatch('changeItem', arr);
				}else if( arr === 'b4' ){ // Если очистить бокс
					this.$store.dispatch('clearBox');
				}else if( arr === 'b1' || arr === 'b2' ){ // Переключить экран
					this.$store.dispatch('changeScreen', arr[1]);
				}

        window.localStorage.message = '';
			}
		},
		mounted(){
	    setInterval( () => {
	      if( window.localStorage.message ){
			 		this.changeItem( window.localStorage.message );
				}
			}, 100);
		},
		components : {
	    Screen1,
			Screen2
		}
	}
</script>
