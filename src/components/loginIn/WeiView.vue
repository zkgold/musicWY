<template>
	<div id="app_Wei">
		<div class="wrap">
			<div class="top">
				<div class="top_wrap">
					<div class="top_left">微信登录</div>
					<div class="top_right">授权登录</div>
				</div>
			</div>
			<div class="cont">
				<div class="cont_left">y</div>
				<div class="cont_right">y</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'WeiView',
	methods: {
	}
}	
</script>
<style lang='scss' scoped>
.wrap{
	width: 100%;
}
.top{
	width: 100%;
	height: 50px;
	background-color: #51b7ec;
	.top_wrap{
		width: 500px;
		height: 50px;
		margin: auto;
		line-height: 50px;
		font-size: 14px;
		color: #fff;
		.top_left{

		}
		.top_right{

		}

	}
}
.cont{
	width: 500px;
	margin: auto;
	.cont_left{
		background-color: red;
	}
	.cont_right{
		background-color: blue;
	}
}
.top_left, .cont_left {
	display: inline-block;
	width: 300px;
	height: 100%;
}
.top_right, .cont_right {
	display: inline-block;
	width: 200px;
	height: 100%;
}
</style>