<template>
  <section id="app">
		<transition name="fade" mode="out-in">
			<!-- Nav -->
			<div v-if="typeView === 0"
					 class="main-nav"
					 name="nav">
				<button class="main-nav_item"
						v-on:click="typeView = 1">Экран для зрителей</button>
				<button class="main-nav_item"
								v-on:click="typeView = 2">Экран для управления</button>
			</div>
			<!-- Users -->
			<Users v-if="typeView === 1"></Users>
			<!-- Admin -->
			<Admin v-if="typeView === 2"></Admin>
		</transition>
  </section>
</template>

<script>
	import Admin from '@/views/Admin'
	import Users from '@/views/Users'

	export default{
	  data(){
	    return{
	      typeView : 0 // 1 - Users, 2 - Admin
			}
		},
		created(){
	    if( window.location.pathname.replace('/', '') === 'admin' ){
	      this.typeView = 2;
			}else{
        this.typeView = 1;
			}
		},
		components: {
	    Admin,
			Users
		}
	}
</script>

<style src="@/assets/styles/main.less" lang="less">
</style>
