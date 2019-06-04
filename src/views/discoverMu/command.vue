<template>
	<div id="app">
		<div><loop class="loopPic" :picData="picData"></loop></div>
		
		<div class="wrap">
			<div class="wrap_left">
				<div class="content_box">

					<!-- 这里几个相似 -->
					<div class="content hot">
						<div class="hot_head">
							<a href="#" class="hot_super">热门推荐</a>
							<div>
								<ul>
									<li>华语</li>
									<li>流行</li>
									<li>摇滚</li>
									<li>民谣</li>
									<li>电子</li>
								</ul>
								
							</div>
							<div class="hot_more"  @click="$router.push('/discoverMu/songSheet')">更多</div>
						</div>
						<indexPageNeed :obj="part1"></indexPageNeed>
					</div>
					<div v-show="login">
						login?
					</div>
					<div class="content per">
						<div class="per_head">
							<a href="#" class="per_super">新碟上架</a>
							<div class="per_more"  @click="$router.push('#')">更多</div>
						</div>
						<indexPageAlso></indexPageAlso>
					</div>
					<div class="content rank">
						<div class="rank_head">
							<a href="#" class="rank_super">榜单</a>
							<div class="rank_more" @click="$router.push('/discoverMu/rank')">更多</div>
						</div>
						<indexPageNeedToo></indexPageNeedToo>
					</div>
				</div>
			</div>
			<div class="wrap_right">
				<div class="user">
					<div v-if="login" class="user_box">
						<span>你已登录</span>
					</div>
					<div else class="user_not_box">
						<span>登录此网易云音乐，享受不到一点乐趣，并且不知道能不能同步到手机</span>
						<button @click="loginClick()">用户登录</button>
					</div>
				</div>
				<div class="songer">
					<div class="songer_head">
						<span class="songer_head_left">热门歌手</span>
						<span class="songer_head_right" @click="toPageSonger()">查看全部</span>
					</div>
					<ul>
						<li v-for="(item,id) in artists" :key="id">
							<img :src="item.picUrl" class="artist_img">
							<span class="artist_name" @click="toArtist(item.id)">{{item.name}}</span>
						</li>
					</ul>
				</div>
				<div class="anchor">
					<div class="anchor_head">
						<span class="anchor_head_left">主播</span>
						<span class="anchor_head_right">查看全部</span>
					</div>
					<ul>
						<li v-for="(item,id) in djRadios" :key="id">
							<img :src="item.picUrl" class="dj_img">
							<span class="dj_name">{{item.name}}</span>
							<span class="dj_category">{{item.category}}</span>
						</li>
					</ul>
				</div>
				<div class="blank"></div>
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
import indexPageAlso from '../../components/indexPageNeedAlso.vue'
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
			login: false,
			djRadios: [],
			artists: [],

		}
	},
	methods: {
		toArtist(id) {
			console.log(id)
		},
		loginClick() {
			let login = document.querySelector(".iNeedClick")
			login.click()
		},
		toPageSonger() {
			this.$router.push('/discoverMu/songer')
		}
	},
	components: {
		loop, indexPageNeed, indexPageAlso, indexPageNeedToo
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
			this.part2 = res.albums.map((ele) => {
				let names = {}
				names['name'] = ele['name']
				names['id'] = ele.id
				names['author'] = ele['artist']['name']
				names['pic'] = ele.blurPicUrl
				return names
			}).slice(0,4)
		})
		request.artistTopList().then(res => {
			this.artists = res.list.artists.slice(0,5)
			console.log(this.artists)
		})
		request.recommendDj().then(res => {
			this.djRadios = res.djRadios.slice(0,5)
			console.log(this.djRadios)
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
	.wrap_left{
		float: left;
		width: 100%;
		margin-right: -253px;
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
	.wrap_right{
		float: right;
		width: 250px;
		min-height: 100px;
		overflow: hidden;
		border-left: 1px solid #000000;
		/*border-bottom: 1px solid #000000;*/
		.user{
			width: 100%;
			height: 165px;
			border-bottom: 1px solid #000000;
			.user_not_box{
				width: 200px;
				height: 115px;
				padding: 25px;
				background-color: #eee;
				span{
					font-size: 12px;
				}
				button{
					display: block;
					width: 80px;
					height: 30px;
					background-color: #ff0000;
					border: 1px solid #000;
					margin: 30px auto 0;
				}
			}
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
					cursor: pointer;
					&:hover{
						text-decoration: underline;
					}
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
					.artist_img{
						width: 50px;
						height: 50px;
						margin: 6px;
					}
					.artist_name{
						/*display: inline-block;*/
						vertical-align: top;
						line-height: 62px;
						margin-left: 20px;
						cursor: pointer;
						&:hover{
							text-decoration: underline;
						}
					}
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
					cursor: pointer;
					&:hover{
						text-decoration: underline;
					}
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
					font-size: 14px;
					position: relative;
					.dj_img{
						width: 50px;
						height: 50px;
						margin: 6px;
					}
					.dj_name{
						/*display: inline-block;*/
						/*vertical-align: top;*/
						position: absolute;
						top: 0;
						left: 62px;
						width: 100px;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						line-height: 31px;
						margin-left: 20px;
					}
					.dj_category{
						position: absolute;
						top: 31px;
						left: 62px;
						width: 100px;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						line-height: 31px;
						margin-left: 20px;
					}
				}
			}
		}
	}
	/*这里不想写了 实际上应该重新写左右两边的布局 参照myMu的index*/
	.blank{
		height: 136px;
		width: 100%;
	}
	&::after{
		display: block;
		content: '';
		clear: both;
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
			cursor: pointer;
			&:hover{
				text-decoration: underline;
			}
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
			cursor: pointer;
			&:hover{
				text-decoration: underline;
			}
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
			cursor: pointer;
			&:hover{
				text-decoration: underline;
			}
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
			cursor: pointer;
			&:hover{
				text-decoration: underline;
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