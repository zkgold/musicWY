<template>
	<div id="app">
		<redNavgation></redNavgation>
		<div class="wrap">
			<div class="wrap_left">
				<div class="left_box">
					<div class="box_songer box_s" v-show="userInfo.artistCount"><div class="box_c">我的歌手({{userInfo.artistCount}})</div></div>
					<div class="box_video box_s" v-show="userInfo.mvCount"><div class="box_c">我的视频({{userInfo.mvCount}})</div></div>
					<div class="box_dj box_s" v-show="userInfo.djRadioCount"><div class="box_c">我的电台({{userInfo.djRadioCount}})</div></div>
					<div class="box_program box_s" v-show="userInfo.programCount"><div class="box_c">我的program({{userInfo.programCount}})</div></div>
					<div class="box_create box_s" v-show="userInfo.createdPlaylistCount">
						<div class="box_c" @click="ifCreatePl = !ifCreatePl">创建的歌单({{userInfo.createdPlaylistCount}})
						</div>
					</div>
					<div v-show="ifCreatePl" class="box_create_s">
						<ul>
							<li v-for="(item,id) in createSongers" @click="toList(item)">
								<img :src="item.coverImgUrl">
								<span class="bcs_top">{{item.name}}</span>
								<span class="bcs_bottom">{{item.trackCount}}首</span>
							</li>
						</ul>
					</div>
					<div class="box_program box_s" v-show="userInfo.subPlaylistCount"><div class="box_c" @click="ifCreateSub = !ifCreateSub">收藏的歌单({{userInfo.subPlaylistCount}})</div></div>
					<div v-show="ifCreateSub" class="box_create_s">
						<ul>
							<li v-for="(item,id) in subscribedSongers" @click="toList(item)">
								<img :src="item.coverImgUrl">
								<span class="bcs_top">{{item.name}}</span>
								<span class="bcs_bottom">{{item.trackCount}}首</span>
							</li>
						</ul>
					</div>
					
				</div>
			</div>
			<div class="wrap_right">
				<div v-if="!ifCreateUl">
					<div class="right_top">
						<div class="top_box">
							<div class=box_pic><img :src="dataDiv.coverImgUrl"></div>
							<div class="box_cont">
								<div class="name1">
									<span>{{dataDiv.name}}</span>
								</div>
								<div class="name2">
									<img :src="dataDiv.creator.avatarUrl" style="border-radius: 50%" width="40px" height="40px">
									<span>{{dataDiv.creator.nickname}}-{{dataDiv.updateTime}}</span>
								</div>
								<div class="name3">
									<button class="top_play top_but" @click="playList()">播放</button>
									<button class="top_collection top_but">{{dataDiv.subscribedCount}}</button>
									<button class="top_send top_but">转发</button>
									<button class='top_down top_but'>下载</button>
									<button class="top_command top_but">评论</button>
								</div>
							</div>
						</div>
					</div>
					<div>
						<songList :id="id"></songList>
						<comment :id="id" :type="type"></comment>
						
					</div>
				</div>
				<div v-else>
					<h2>{{dataUl}}</h2>
					<ul>
						<li v-for="(item,id) in dataUl"></li>
					</ul>
				</div>
			</div>
		</div>
		<div class=footer>from WYmusic</div>
	</div>
</template>
<script>
import redNavgation from '../../components/redNavigation.vue'
import songList from '../../components/songList.vue'
import comment from '../../components/comments.vue'
import * as request from '../../api/userMessageInterface.js'
export default {
	name: 'muMu',
	data: function() {
		return {
			ifCreatePl:false,
			ifCreateSub: false,
			ifCreateUl: false,
			userInfo: '',
			createSongers: [],
			subscribedSongers: [],
			dataDiv: {'creator': {},},
			dataUl: [1,2],
			id: '',
			type: 2,
		}
	},
	methods: {
		toList(obj) {
			if(this.dataDiv == obj) {

			}else {
				console.log('obj',obj.id)
				this.id = obj.id
				this.dataDiv = obj			
			}
		},
		playList() {
			confirm("暂不支持列表播放 请点击单个音乐")
		}
	},
	components: {
		redNavgation, songList, comment
	},
	created() {
		let uid = this.$store.state.uid;
		if(uid) {
			request.subcount().then(res => {
				console.log('subcount',res)
				this.userInfo = res
			})
			request.playlist(uid).then(res => {
				let cont = []
				let subc = []
				res.playlist.map((ele) => {
					ele.subscribed ? subc.push(ele) : cont.push(ele)
				})
				console.log('playlist',res)
				this.createSongers = cont
				this.id = this.createSongers[0]['id']
				this.dataDiv = this.createSongers[0]
				this.subscribedSongers = subc
			})
		}
	}
}
</script>
<style lang='scss' scoped>
#app{
	/*这里的border需要优化*/
	min-width: 980px;
	/*这里的min-width会被内部的组件songList内的同名css名字继承*/
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
.wrap_left{
	.left_box{
		margin-top: 50px;
		.box_s{
			width: 100%;
			/*padding: 0 20px;*/
			font-size: 15px;
			line-height: 15px;
			cursor: pointer;
			user-select: none;
			.box_c{
				height: 15px;
				padding: 7.5px 40px;
			}
			&:hover{
				background-color: #aaa;
			}

		}
		.box_create_s{
			ul{
				list-style: none;
				padding: 0;
				margin: 0;
				font-size: 10px;
				li{
					height: 54px;
					cursor: pointer;
					user-select: none;
					position: relative;
					img{
						width: 40px;
						height: 40px;
						margin: 7px 40px;
					}
					.bcs_top{
						position: absolute;
						top: 9px;
						left: 100px;
						height: 15px;
						line-height: 15px;
					}
					.bcs_bottom{
						position: absolute;
						top: 30px;
						left: 100px;
						height: 15px;
						line-height: 15px;
						color: #BEBEBE;
					}
				}
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
		height: auto;
		/*background-color: red;*/
		.box_pic{
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
			&:after{
				clear: both;
				display: block;
				content: '';
			}
		}
		.box_cont{
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
				height: 40px;
				font-size: 12px;
				img{
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}
				span{
					vertical-align: top;
					line-height: 40px;
					margin-left: 10px;
				}
			}
			.name3{
				position: absolute;
				top: 110px;
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
			&:after{
				clear: both;
				display: block;
				content: '';
			}
		}
		&:after{
			clear: both;
			display: block;
			content: '';
		}
	}
}
.right_list{
	width: 739px;
}
.footer{
	width: 100%;
	height: 150px;
	border-top: 1px solid #000;
	text-align: center;
	padding: 20px 0;
}
</style>