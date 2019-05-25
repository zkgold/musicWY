<template>
	<div class="app">
		<redNavgation></redNavgation>
		<div class="wrap">
			请登录
		</div>
		<div class="footer">
			not from here
		</div>
	</div>
</template>
<script>
import redNavgation from '../../components/redNavigation.vue'
export default {
	name: 'not',
	components: {
		redNavgation
	}
}
</script>
<style lang='scss' scoped>
#app{
	overflow-y: scroll;
}
.wrap{
	border-left: 1px solid #000;
	border-right: 1px solid #000;
	width: 980px;
	margin: 0 auto;
	min-height: 600px;
	background-color: #fff;
	font-size: 25px;
	text-align: center;
	color: #497daa;
}
.footer{
	height: 80px;
	text-align: center;
	border-top: 1px solid #000;
	padding-top: 30px;
}
</style>