<template>
	<section class="screen2"
		       v-bind:class="{ 'active' : numberItem !== 0 }">

		<div class="users-top">
			<div class="users-top_item">
			</div>
			<div class="users-top_item users-title">
				<div class="users-title_text">
					ОТКРЫВАЕМ ЧЕРНЫЙ ЯЩИК
				</div>
			</div>
			<div class="users-top_item">
			</div>
		</div>

		<img src="../assets/img/03.png"
				 class="black-box small"
				 v-on:click="numberItem++">

		<div class="box-list">
			<transition-group name="fade" mode="out-in">
				<div class="box-item"
					 v-for="(item, index) in boxList"
					 v-if="index < numberItem"
					 v-bind:key="index">
				<div class="box-index">
					{{list[item].index}}
				</div>
				<div>
					<div class="box-name">
						{{list[item].name}}
					</div>
					<div class="box-text">
						{{list[item].text}}
					</div>
				</div>
			</div>
			</transition-group>
		</div>

	</section>
</template>

<script>
  export default {
    data(){
      return{
        numberItem : 0
      }
    },
    methods : {
    },
    mounted(){
    },
    computed : {
      list : function () {
				return this.$store.state.list;
      },
      boxList : function () {
				return this.$store.state.boxList;
      }
    }
  }
</script>
