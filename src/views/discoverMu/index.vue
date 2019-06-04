<template>
	<div id="app">
		<div class="wrap">
			<div class="navigation">
				<ul>
					<li @click="mark(0)"><router-link to="/discoverMu/command" class="link" :class="{color: ifColor[0]}">推荐</router-link></li>
					<li @click="mark(1)"><router-link to="/discoverMu/rank" class="link" :class="{color: ifColor[1]}">榜单</router-link></li>
					<li @click="mark(2)"><router-link to="/discoverMu/songSheet" class="link" :class="{color: ifColor[2]}">歌单</router-link></li>
					<li @clcick="mark(3)"><router-link to="#" class="link" :class="{color: ifColor[3]}">主播电台</router-link></li>
					<li @click="mark(4)"><router-link to="/discoverMu/songer" class="link" :class="{color: ifColor[4]}">歌手</router-link></li>
					<li @click="mark(5)"><router-link to="#" class="link" :class="{color: ifColor[5]}">新碟上架</router-link></li>
				</ul>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'discoverMu',
	data: function() {
		return {
			ifColor: [true,false,false,false,false,false]
		}
	},
	methods: {
		mark(id) {
			let mid = [false,false,false,false,false,false]
			mid[id] = true
			this.ifColor = mid
		}
	},

}
</script>
<style lang='scss' scoped>
#app{

}
.wrap{
	width: 100%;
	height: 34px;
	background-color: #a40011;
	.navigation {
		width: 1100px;
		height: 100%;
		margin: auto;
		ul{
			margin: 0;
			padding: 0;
			margin-left: 177px;
			width: 980px;
			list-style: none;
			li{
				float: left;
				height: 100%;
				/*width: 84px;*/
				overflow: hidden;
				.link{
					display: inline-block;
				    height: 20px;
				    text-align: center;
				    line-height: 20px;
				    padding: 0 13px;
				    margin: 7px 17px 0;
				    border-radius: 20px;
				    line-height: 21px;
				    font-size: 14px;
				    color: white;
				    text-decoration: none;
				    &:hover{
				    	background-color: red;
				    }
				}
			}
		}
	}
	&::after{
		clear: both;
		display: block;
		content: '';
	}
}
.color{
	background-color: red;
}
</style>