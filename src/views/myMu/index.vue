<template>
	<div id="app">
		<redNavgation></redNavgation>
		<div class="wrap">
			<div class="wrap_left">
				<div class="left_box">
					<div class="box_s"></div>
					<div class="box_songer box_s"><div class="box_c">我的歌手()</div></div>
					<div class="box_video box_s"><div class="box_c">我的视频()</div></div>
					<div class="box_create box_s"><div class="box_c" @click="ifCreate = !ifCreate">创建的歌单()</div></div>
					<div v-show="ifCreate">
						<ul>
							<li v-for="(item,id) in createSongers" @click="getSongDetail(id)">
								<div>{{item.name}}</div>
								<div>{{item.number}}</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="wrap_right">
				<div class="right_top">
					<div class="top_box">
						<div class=box_pic><img src="#"></div>
						<div class="box_cont">
							
						</div>
					</div>
				</div>
				<div class="right_list">
					<songList :songList="musics"></songList>
				</div>
				<div class="right_commmit">
					<h3>评论</h3>
				</div>
			</div>
		</div>
		<div class=footer>from WYmusic</div>
	</div>
</template>
<script>
import redNavgation from '../../components/redNavigation.vue'
import songList from '../../components/songList.vue'
import {playlist, playlistDetail} from '../../api/userMessageInterface.js'
export default {
	name: 'muMu',
	data: function() {
		return {
			ifCreate:false,
			createSongers: [{name: 'myLove',number: 12},{name: 'download',number:3}],
			musics: [{id:1,cont:'no',time: '2m3s',songer:'zuc'}],
		}
	},
	methods: {
		getSongDetail(id) {
			let idN = this.createSongers[id]['id'];

			playlistDetail(idN).then(res => {
				let lists = [];
				res.privileges.map((ele) => {
					lists.push(ele.id)
				})
				console.log(lists)
			})
			this.musics = [{id:2,cont:'no',time: '2m3s',songer:'zuc'},{id:1,cont:'no',time: '2m3s',songer:'zuc'},{id:1,cont:'no',time: '2m3s',songer:'zuc'},{id:1,cont:'no',time: '2m3s',songer:'zuc'},{id:1,cont:'no',time: '2m3s',songer:'zuc'},{id:1,cont:'no',time: '2m3s',songer:'zuc'},{id:1,cont:'no',time: '2m3s',songer:'zuc'}]
			console.log(this.musics)
			//这里还需要得到lists的内容放到this.musics上

		}
	},
	components: {
		redNavgation, songList
	},
	created() {
		let uid = this.$store.state.uid;
		playlist(uid).then(res => {
			let cont = []
			// console.log(res.playList)
			res.playlist.map((ele) => {
				let name = {

				}
				name.imgUrl = ele.coverImgUrl
				name.number = ele.trackCount
				name.name = ele.name
				name.id = ele.id
				cont.push(name)
			})
			console.log(res)
			this.createSongers = cont
		})
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
.wrap_left{
	.left_box{
		.box_s{
			width: 100%;
			/*padding: 0 20px;*/
			height: 30px;
			line-height: 20px;
			cursor: pointer;
			user-select: none;
			.box_c{
				padding: 5px 40px;
			}
			&:hover{
				background-color: #aaa;
			}

		}
		ul{
			list-style: none;
			padding: 0;
			margin: 0;
			font-size: 10px;
			li{
				padding: 5px 40px;
				height: 40px;
				cursor: pointer;
				user-select: none;
			}
		}

	}
}
.right_top{
	width: 100%;
	height: 280px;
	.top_box{
		margin: 40px;
		.box_pic{
			border: 1px solid #fff;
			width: 210px;
			height: 210px;
			img{
				width: 206px;
				height: 206px;
				padding: 2px;	
			}
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