<template>
	<div id="app">
		<redNavgation></redNavgation>
		<div class="wrap">
			<div class="wrap_left">
				<div class="left_top">
					<h2>动态</h2>
					<button>1</button>
					<button>2</button>
				</div>
				<div v-for="(dynamic,id) in dynamics" :key="id">
					<dynamic :data="dynamic"></dynamic>
				</div>
			</div>
			<div class="wrap_right">

			</div>
		</div>
		<div class=footer>from WYmusic</div>
	</div>
</template>
<script>
import dynamic from '../../components/dynamic.vue'
import redNavgation from '../../components/redNavigation.vue'
export default {
	name: 'friendsMu',
	data: function() {
		return {
			ifSonger: false,
			ifVideo: false,
			idCreate:false,
			dynamics: ['a','a',,,,]
		}
	},
	components: {
		redNavgation, dynamic
	}
}
</script>
<style lang='scss' scoped>
#app{
	/*这里的border需要优化*/
	/*min-width: 980px;*/
}
.wrap{
	width: 980px;
	margin: auto;
	border-left: 1px solid #000;
	border-right: 1px solid #000;
	.wrap_left{
		float: left;
		overflow: hidden;
		padding: 0 30px;
		width: 619px;
		height: 100%;
		/*height: 800px;*/
		border-right: 1px solid #000;
	}
	.wrap_right{
		float: right;
		overflow: hidden;
		width: 300px;
		height: 100%;
		/*height: 1800px;*/
		/*border-right: 1px solid #000;*/
		/*border-left: 1px solid #000;*/
	}
	&::after{
		display: block;
		content: '';
		clear: both;
	}
}
.left_top{
	border-bottom: 2px solid #F00;
	button{
		display: inline-block;
	}

}
.footer{
	width: 100%;
	height: 150px;
	border-top: 1px solid #000;
	text-align: center;
	padding: 20px 0;
}
</style>