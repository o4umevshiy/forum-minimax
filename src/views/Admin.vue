<template>
  <section class="admin">
		<div class="admin-nav">
			<span class="admin-nav-item btns"
						v-bind:class="{ 'last-action' : lastAction == 'btn1' }"
						v-on:click="actButton('btn1')">Экран 1</span>
			<span class="admin-nav-item btns"
						v-bind:class="{ 'last-action' : lastAction == 'btn2' }"
						v-on:click="actButton('btn2')">Экран 2</span>
			<span class="admin-nav-item btns"
						v-bind:class="{ 'last-action' : lastAction == 'btn3' }"
						v-on:click="actButton('btn3')">Отмена</span>
			<span class="admin-nav-item btns"
						v-bind:class="{ 'last-action' : lastAction == 'btn4' }"
						v-on:click="actButton('btn4')">Сл.Экз</span>
		</div>
		<div class="admin-list-item btns"
				 v-bind:class="{
				 		'admin-list-item__main' : index < 3,
				 		'admin-list-item__active' : item.status,
				 		'last-action' : lastAction === index
				 }"
				 v-on:click="actButton(index)"
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
    }
	},
	methods : {
    actButton : function (arr) {
			this.lastAction = arr;
    }
	}
}
</script>
