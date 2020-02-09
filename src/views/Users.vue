<template>
  <section>

		<div class="audio-box">
			<VueAudio
					v-for="item in audio"
					:file="item"
					:key="item"
					ref="audio"></VueAudio>
		</div>

		<transition name="fade" mode="out-in">
			<Screen1 v-if="screen === 1">
			</Screen1>
			<Screen2 v-if="screen === 2">
			</Screen2>
		</transition>

	</section>
</template>

<script>
  import VueAudio from 'vue-audio'
	import Screen1 from '../components/Screen1'
	import Screen2 from '../components/Screen2'

	export default {
	  data(){
	    return{
	      audio: {
					theme1  : require('../assets/audio/theme1.wav'),
					theme2  : require('../assets/audio/theme2.wav'),
					theme3  : require('../assets/audio/theme3.wav'),
          all 		: require('../assets/audio/all.wav')
				}
			}
		},
		computed : {
			screen : function () {
				return this.$store.state.screen
      },
      boxList : function () {
        return this.$store.state.boxList
      }
		},
		methods : {
      changeItem( arr ){

        if( arr[0] === 'i' ){ // Если тема

          arr = arr.replace('i', '');
					this.$store.dispatch('changeItem', arr);

					if( arr === '0' ){
						this.$refs.audio[0].stop();
						this.$refs.audio[0].play();
					}else if( arr === '1'){
						this.$refs.audio[1].stop();
						this.$refs.audio[1].play();
					}else if( arr === '2'){
						this.$refs.audio[2].stop();
						this.$refs.audio[2].play();
					}else{
						this.$refs.audio[3].stop();
						this.$refs.audio[3].play();
					}
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
			Screen2,
      VueAudio
		}
	}
</script>
