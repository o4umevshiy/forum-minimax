<template>
  <section class="admin">
		<div class="admin-nav">
			<span class="admin-nav-item btns"
						v-bind:class="{ 'last-action' : lastAction == 'b1' }"
						v-on:click="actButton('b1')">Экран 1</span>
			<span class="admin-nav-item btns"
						v-bind:class="{ 'last-action' : lastAction == 'b2' }"
						v-on:click="actButton('b2')">Экран 2</span>
			<span class="admin-nav-item btns"
						v-bind:class="{ 'last-action' : lastAction == 'b3' }"
						v-on:click="actButton('b3')">Отмена</span>
			<span class="admin-nav-item btns"
						v-bind:class="{ 'last-action' : lastAction == 'b4' }"
						v-on:click="actButton('b4')">Сл.Экз</span>
		</div>
		<div class="admin-list-item btns"
				 v-bind:class="{
				 		'admin-list-item__main' : index < 3,
				 		'admin-list-item__active' : item.status,
				 		'last-action' : lastAction === index
				 }"
				 v-on:click="actButton( 'i' + index)"
				 v-for="(item, index) in list">
			<div class="table-number">
				{{item.index}}
			</div>
			<div class="table-text">
				{{item.name}}
			</div>
		</div>
  </section>
</template>

<script>
export default {
  data(){
    return{
			lastAction : ''
		}
	},
	computed : {
    list : function () {
      return this.$store.state.list
    },
    boxList : function () {
			return this.$store.state.boxList
    }
	},
	methods : {
    actButton : function (arr) {
			this.lastAction = arr;

      window.localStorage.message = arr;

      if( arr[0] === 'i' ){ // Если тема
        arr = arr.replace('i', '');
        this.$store.dispatch('changeItem', arr);
      }else if( arr === 'b4' ){ // Если очистить бокс
        this.$store.dispatch('clearBox');
      }
    }
	}
}
</script>
