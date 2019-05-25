<template>
	<div id="app">
		<HeaderCom class="header"></HeaderCom>
		<router-view class="content"></router-view>
	</div>
</template>
<script>
import HeaderCom from '../components/HeaderCom.vue'
export default {
	name: 'index',
	data: function() {
		return {

		}
	},
	components: {
		HeaderCom
	}
}
</script>
<style style='scss' scoped>
#app{
	min-width: 1100px;
}
.header{
	width: 100%;
	height: auto;
}
.content{
	width: 100%;
/*	height: auto;*/
}
</style>