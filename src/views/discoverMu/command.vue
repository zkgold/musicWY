<template>
	<div id="app">
		<loop class="loopPic" :picData="picData"></loop>
		<div class="wrap">
			<div class="wrap_left">
				<div class="content_box">

					<!-- 这里几个相似 -->
					<div class="content hot">
						<div class="hot_head">
							<a href="#" class="hot_super">hot</a>
							<div>
								<ul>
									<li>华语</li>
									<li>流行</li>
									<li>摇滚</li>
									<li>民谣</li>
									<li>电子</li>
								</ul>
								
							</div>
							<div class="hot_more">more</div>
						</div>
						<indexPageNeed :obj="part1"></indexPageNeed>
					</div>
					<div class="content per">
						<div class="per_head">
							<a href="#" class="per_super">per</a>
							<div class="per_more">more</div>
						</div>
						<indexPageNeed :obj="part2"></indexPageNeed>
					</div>
					<!-- <div class="content new">
						<div class="new_head">
							<a href="#" class="new_super">new</a>
							<div class="new_more">more</div>
						</div>
					</div> -->
					<div class="content rank">
						<div class="rank_head">
							<a href="#" class="rank_super">new</a>
							<div class="rank_more">more</div>
						</div>
						<indexPageNeedToo :obj1="part31" :obj2="part32" :obj3="part33"></indexPageNeedToo>
					</div>
				</div>
			</div>
			<div class="wrap_right">
				<div class="user">
					
				</div>
				<div class="songer">
					<div class="songer_head">
						<span class="songer_head_left">入驻歌手</span>
						<span class="songer_head_right">more</span>
					</div>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<div class="anchor">
					<div class="anchor_head">
						<span class="anchor_head_left">主播</span>
						<span class="anchor_head_right">more</span>
					</div>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
		<div class='footer'>
			<p>made in czk</p>
			<p>宇宙之大 我在其中</p>
		</div>
	</div>
</template>
<script>
import loop from '../../components/loop.vue'
import indexPageNeed from '../../components/indexPageNeed.vue'
import indexPageNeedToo from '../../components/indexPageNeedToo.vue'
import * as request from '../../api/loadFirstInterface.js'
export default {
	name: 'command',
	data: function() {
		return {
			picData: {
				src: ['http://p1.music.126.net/-Opio-feQpw7IAJ34ETmsw==/109951163989462273.jpg']
			},
			part1: [],
			part2: [],
			part31: [],
			part32: [],
			part33: [],
		}
	},
	components: {
		loop, indexPageNeed, indexPageNeedToo
	},
	created() {
		request.personalized().then(res => {
			this.part1 = res.result.map((ele) => {
				let names = {}
				names['name'] = ele['name']
				names['id'] = ele.id
				names['pic'] = ele.picUrl
				return names
			}).slice(0,8)
		})
		request.newestAlbum().then(res => {
			console.log('------')
			this.part2 = res.albums.map((ele) => {
				let names = {}
				names['name'] = ele['name']
				names['id'] = ele.id
				names['author'] = ele['artist']['name']
				names['pic'] = ele.blurPicUrl
				return names
			}).slice(0,4)
		})
		request.idxTopList(0).then(res => {
			res.privileges.slice(0,10).map((ele) => {
				return request.getSongDetails(ele.id).then(res => {
					let names = {}
					names.name = res.songs[0]['name']
					names.id = res.songs[0]['id']
					names.author = res['songs'][0]['ar'][0]['name']
					let midName = new Array().concat([...this.part32]).concat(names)
					this.part32 = midName
					return names
				})
			})
		})
		request.idxTopList(2).then(res => {
			res.privileges.slice(0,10).map((ele) => {
				return request.getSongDetails(ele.id).then(res => {
					let names = {}
					names.name = res.songs[0]['name']
					names.id = res.songs[0]['id']
					names.author = res['songs'][0]['ar'][0]['name']
					let midName = new Array().concat([...this.part33]).concat(names)
					this.part33 = midName
					return names
				})
				return ele.id
			})
		})
	 	request.idxTopList(3).then(res => {
			res.privileges.slice(0,10).map((ele) => {
				return request.getSongDetails(ele.id).then(res => {
					let names = {}
					names.name = res.songs[0]['name']
					names.id = res.songs[0]['id']
					names.author = res['songs'][0]['ar'][0]['name']
					let midName = new Array().concat([...this.part31]).concat(names)
					this.part31 = midName
					return names
				})
			})
		})
	}
}
</script>
<style lang='scss' scoped>
#app{
	/*这里的border需要优化*/
	min-width: 980px;
}
.loopPic{
	width: 100%;
	height: 337px;
/*	margin: auto;*/
	/*border: 1px solid black;*/
	/*border-top: none;*/
}
.wrap{
	width: 980px;
	min-height: 10px;
	margin: auto;
	background-color: #ffffff;
	border-left: 1px solid black;
	border-right: 1px solid black;
	&::after{
		display: block;
		content: '';
		clear: both;
	}
}
.wrap_left{
	float: left;
	width: 100%;
	margin-right: -251px;
	min-height: 10px;
	height: auto;
	overflow: hidden;
	.content_box{
		width: 729px;
		height: auto;
		.content{
			width: 709px;
			display: block;
			margin: 10px;
			margin-bottom: 15px;
			min-height: 40px;
		}
	}
}
.hot{
	&::after{
		display: block;
		clear: both;
		content: '';
	}
	.hot_head{
		width: 100%;
		height: 35px;
		border-bottom: 2px solid #C10D0C;
		.hot_super{
			float: left;
			font-size: 20px;
			line-height: 33px;
			text-decoration: none;
			overflow: hidden;
		}
		ul{
			list-style: none;
			margin: 0;
			padding: 0;
			li{
				height: 33px;
				line-height: 33px;
				text-align: center;
				max-width: 80px;
				float: left;
				overflow: hidden;
			}
		}
		.hot_more{
			float: right;
			line-height: 33px;
			margin-right: 20px;
			overflow: hidden;
		}

	}
	ul{
		list-style: none;
		margin: 10px 0;
		padding: 0;
		li{
			width: 25%;
			height: 234px;
			float: left;
			overflow: hidden;
			img{
				float: left;
				overflow: hidden;
				display: block;
			}
		}
	}
}
.per{
	&::after{
		display: block;
		clear: both;
		content: '';
	}
	.per_head{
		width: 100%;
		height: 35px;
		border-bottom: 2px solid #C10D0C;
		.per_super{
			float: left;
			font-size: 20px;
			line-height: 33px;
			text-decoration: none;
			overflow: hidden;
		}
		.per_more{
			float: right;
			line-height: 33px;
			margin-right: 20px;
			overflow: hidden;
		}

	}
	ul{
		list-style: none;
		margin: 10px 0;
		padding: 0;
		li{
			width: 25%;
			height: 234px;
			float: left;
			overflow: hidden;
			img{
				float: left;
				overflow: hidden;
			}
		}
	}
}
.new{
	&::after{
		display: block;
		clear: both;
		content: '';
	}
	.new_head{
		width: 100%;
		height: 35px;
		border-bottom: 2px solid #C10D0C;
		.new_super{
			float: left;
			font-size: 20px;
			line-height: 33px;
			text-decoration: none;
			margin-left: 20px;
			overflow: hidden;
		}
		.new_more{
			float: right;
			line-height: 33px;
			margin-right: 20px;
			overflow: hidden;
		}

	}
}
.rank{
	&::after{
		display: block;
		clear: both;
		content: '';
	}
	.rank_head{
		width: 100%;
		height: 35px;
		border-bottom: 2px solid #C10D0C;
		.rank_super{
			float: left;
			font-size: 20px;
			line-height: 33px;
			text-decoration: none;
			margin-left: 20px;
			overflow: hidden;
		}
		.rank_more{
			float: right;
			line-height: 33px;
			margin-right: 20px;
			overflow: hidden;
		}

	}
}
.wrap_right{
	float: right;
	width: 250px;
	min-height: 100px;
	overflow: hidden;
	border-left: 1px solid #000000;
	border-bottom: 1px solid #000000;
	.user{
		width: 100%;
		height: 165px;
		border-bottom: 1px solid #000000;
	}
	.songer{
		width: auto;
		padding: 10px;
		height: auto;
		font-size: 14px;
		&::after{
			display: block;
			content: '';
			clear: both;
		}
		.songer_head{
			width: 100%;
			height: 24px;
			border-bottom: 1px solid #000000;
			.songer_head_left{
				float: left;
				overflow: hidden;
				line-height: 24px;
			}
			.songer_head_right{
				float: right;
				overflow: hidden;
				line-height: 24px;
			}

		}
		ul{
			list-style: none;
			margin: 0;
			padding: 0;
			width: 100%;
			li{
				width: 100%;
				height: 62px;
				background-color: #f5f5f5;
				margin: 10px 0;
			}
		}
	}
	.anchor{
		width: auto;
		padding: 10px;
		height: auto;
		font-size: 14px;
		&::after{
			display: block;
			content: '';
			clear: both;
		}
		.anchor_head{
			width: 100%;
			height: 24px;
			border-bottom: 1px solid #000000;
			.anchor_head_left{
				float: left;
				overflow: hidden;
				line-height: 24px;
			}
			.anchor_head_right{
				float: right;
				overflow: hidden;
				line-height: 24px;
			}

		}
		ul{
			list-style: none;
			margin: 0;
			padding: 0;
			width: 100%;
			li{
				width: 100%;
				height: 62px;
				background-color: #f5f5f5;
				margin: 10px 0;
			}
		}
	}
}
.footer{
	border-top: 1px solid #000000;
	width: 100%;
	height: auto;
	padding: 20px 0;
	text-align: center;
}
</style>