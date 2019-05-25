<template>
	<div id="app">
		<div class="wrap">
			<div class="wrap_left">
				<div class="wrap_box">
					<h2>云音乐特色榜</h2>
					<ul>
						<li>
							<div>
								<div class="pic1"><img class="pic215" src="http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40"></div>
								<p class="top1"><a href="">云音乐飙升榜</a></p>
								<p class="bottom1">每日更新</p>
							</div>
						</li>
						<li>
							<div>
								<div class="pic1"><img class="pic215" src="http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="loading"></div>
								<p class="top1"><a href="">云音乐飙升榜</a></p>
								<p class="bottom1">每日更新</p>
							</div>
						</li>

					</ul>
					<h2>全球媒体榜</h2>
					<ul>
						<li v-for="(item,id) in global" v-bind:key='id'>
							<div class="pic1">
								<img src="http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40" alt="O" class="pic215">
								<p class="top1"><a href="item.href">{{item.name}}</a></p>
								<p class="bottom1">{{item.next}}</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="wrap_right">
				<div class="right_top">
					<div class="top_box">
						<div class="top_fir"><img src="http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150"></div>
						<div class="top_name">
								<div class="name1">
									<span>云音乐飙升榜</span>
								</div>
								<div class="name2">
									更新时间 每天
								</div>
								<div class="name3">
									<button class="top_play top_but">播放</button>
									<button class="top_collection top_but">1776002</button>
									<button class="top_send top_but">转发</button>
									<button class='top_down top_but'>下载</button>
									<button class="top_command top_but">评论</button>
								</div>
								
							<!-- </div> -->
						</div>
					</div>
				</div>
				<div class="right_bottom">
					<div class="right_box">
						<songList :songList="musics"></songList>
						<h2 class="right_command">评论 <span>共2222条</span></h2>
						<div></div>
						<h2 class="command_intere">精彩评论</h2>
						<div></div>
						<h2 class='command_new'>最新评论</h2>
						<div>
							<ul>
								<li v-for="(item,id) in newCommand" :key="id">{{item}}</li>
							</ul>
						</div>
						<div class="right_page"></div>
					</div>

				</div>
			</div>
		</div>
		<div class="footer">
			<p>want help from me</p>
			<p>it is impossible</p>
		</div>
	</div>
</template>
<script>
import songList from '../../components/songList.vue'
export default {
	name: 'command',
	data: function() {
		return {
			musicCloud: [],
			global: [{src: 'http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40',href:'#',name: 'zk',next:'zk'},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
			musics: [{id:1,cont:'no',time: '2m3s',songer:'zuc'}],
			newCommand:[]
		}
	},
	methods:{
		// 这里产生了一个问题 刷新时会导致discoverMu的index的导航默认推荐  假想可以用vuex解决
	},
	components: {
		songList
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
		width: 238px;
		height: 100%;
		/*height: 800px;*/
		/*border-right: 1px solid #000;*/
	}
	.wrap_right{
		float: right;
		overflow: hidden;
		width: 739px;
		height: 100%;
		/*height: 1800px;*/
		/*border-right: 1px solid #000;*/
		border-left: 1px solid #000;
	}
	&::after{
		display: block;
		content: '';
		clear: both;
	}
}
.wrap_box{
	margin-top: 20px;
	display: block;
	h2{
		margin: 0;
		padding: 0 10px 12px 15px;
    	font-size: 14px;
    	color: #000;
    	margin-top: 20px;
	}
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
		width: 100%;
		li{
			/*width: 220px;
			height: 42px;
			padding: 20px;*/
			padding: 10px 0;
			font-size: 14px;
			div{
				padding-left: 40px;
				height: 40px;
				vertical-align: center;
				position: relative;

				.pic1{
					position: absolute;
					left: 0;
					top: 0;
					width: 40px;
					height: 40px;
				}
				.top1{
					position: absolute;
					left: 90px;
					top: 3px;
					margin: 0;
					padding: 0;
					height: 15px;
					line-height: 15px;
					a{
						text-decoration: none;
						color: #000;
					}
				}
				.bottom1{
					position: absolute;
					left: 90px;
					bottom: 3px;
					margin: 0;
					padding: 0;
					height: 15px;
					line-height: 15px;
				}
			}
			&:hover{
				background-color: #e6e6e6;
			}
		}
	}
}

.right_top{
	width: 100%;
	height: 238px;
	.top_box{
		margin: 40px;
		position: relative;
		background-color: red;
		.top_fir{
			position: absolute;
			left: 0;
			top: 0;
			border: 1px solid #ccc;
			width: 150px;
			height: 150px;
			padding: 3px;
			img{
				width: 150px;
				height: 150px;
			}
		}
		.top_name{
			width: 470px;
			height: 114px;
			position: absolute;
			top: 10px;
			left: 189px;
			/*width: 90%;*/
			/*border: 1px solid black;*/
			/*float: right;*/
			/*overflow: hidden;*/
			.name1{
				position: absolute;
				top: 10px;
				display: inline-block;
				height: 20px;
				font-size: 20px;
			}
			.name2{
				position: absolute;
				top: 55px;
				display: inline-block;
				height: 20px;
				font-size: 12px;
			}
			.name3{
				position: absolute;
				top: 90px;
				display: inline-block;
				height: 20px;
				.top_but{
					width: 80px;
					height: 30px;
					margin-right: 10px;
					outline: none;
					cursor: pointer;
				}
			}
		}
	}
}
.right_bottom{
	width: 100%;
	background-color: #fff;
	.right_box{
		padding: 0 40px;
	}
}
.right_command, .command_intere, .command_new{
	font-size: 15px;
	span{
		font-size: 12px !important;
	}
}
.right_command{
	border-bottom: 2px solid #ff0000;
}
.command_intere{
	border-bottom: 1px solid #000;
}
.command_new{
	border-bottom: 1px solid #000;
}
.footer{
	width: 100%;
	text-align: center;
	padding: 20px;
	border-top: 1px solid black;
}
</style>