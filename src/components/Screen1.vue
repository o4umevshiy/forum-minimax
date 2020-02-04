<template>
	<section class="users">

		<div class="users-top">
			<div class="users-top_item">
				<img src="../assets/img/01.png">
			</div>
			<div class="users-top_item users-title">
				<div class="users-title_text">
					Мини-набор макси-знаний
				</div>
			</div>
			<div class="users-top_item">
				<img src="../assets/img/02.png">
			</div>
		</div>

		<div class="table table__first">
			<div class="table-item"
					 v-for="(item, index) in list"
					 v-if="index < 3">
				<div class="table-number">
					{{item.index}}
				</div>
				<div class="table-text">
					{{item.name}}
				</div>
			</div>
		</div>
		<div class="table">
			<div class="table-item"
					 v-for="(item, index) in list"
					 v-if="index >= 3"
					 v-bind:class="{ 'table-item__active' : item.status }">
				<div class="table-number">
					{{item.index}}
				</div>
				<div class="table-text">
					{{item.name}}
				</div>
			</div>
		</div>

	</section>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    methods : {
    },
    mounted(){
    },
    computed : {
      list : function () {
				return this.$store.state.list
      }
    }
  }
</script>
