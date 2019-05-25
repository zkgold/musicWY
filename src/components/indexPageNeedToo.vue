<template>
	<div class="picapp">
		<div class="wrap">
			<div class="wrap_left">
				<ul>
					<li><h3>云音乐飙升榜</h3></li>
					<li v-for="(item,id) in obj1" :key="id">
						<span>{{id}}-{{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="wrap_mid">
				<ul>
					<li><h3>云音乐新歌榜</h3></li>
					<li v-for="(item,id) in obj2" :key="id">
						<span>{{id}}-{{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="wrap_right">
				<ul>
					<li><h3>云音乐原创歌曲榜</h3></li>
					<li v-for="(item,id) in obj3" :key="id">
						<span>{{id}}-{{item.name}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'indexPageNeed',
	props: ['obj1','obj2','obj3'],
	data: function() {
		return {
		}
	},
}
</script>
<style lang='scss' scoped>
.wrap{
	background-color: #eee;
	margin-top: 20px;
}
.wrap_left, .wrap_mid, .wrap_right{
	display: inline-block;
	width: 33%;
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
		font-size: 13px;
		li{
			height: 20px;
			line-height: 20px;
			padding: 0 10px;
			span{
				display: inline-block;
				width: 200px;
				height: 20px;
				line-height: 20px;
				overflow: hidden;
			}
			h3{
				margin: 0 0 10px 0;
				padding: 0;
			}
		}
	}

}
</style>