<template>
	<div id='appC'>
		<div class="box_title">
			<div class="title1">
				<span>歌曲列表</span>
				<span class="box_count">{{trackCount}}首歌</span>
			</div>
			<div class="title2">
				<span>播放:</span>
				<span class="box_count">{{playCount}}次</span>
			</div>
		</div>
		<div class="box_table">
			<div class="table_title">
				<div class="table_id"></div>
				<div class="table_cont">
					<span>标题</span>
				</div>
				<div class="table_time">
					<span>时长</span>
				</div>
				<div class="table_songer">
					<span>歌手</span>
				</div>
			</div>
			<ul>
				<li v-for="(item,id) in tracksNext" :key="id" class="next">
					<div class="table_id">
						{{id}}
					</div>
					<div class="table_cont">
						<img :src="item.al.picUrl" v-show="id < 3">
						<span @click="toMusic(item.id)">{{item.name}}</span>
					</div>
					<div class="table_time">
						{{item.dt}}
					</div>
					<div class="table_songer">
						<span @click="toArtist(item.ar[0]['id'])">{{item.ar[0]['name']}}</span>
					</div>
				</li>
			</ul>
			
		</div>
	</div>
</template>
<script>
//track 歌曲信息数组  al.picUrl name(id)  time=dt六位数 ar.name(ar.id)
import {playlistDetail} from '../api/loadFirstInterface.js'
export default {
	name: 'songList',
	props: ['id'],
	data: function() {
		return {
			// musics: this.songList,
			tracksThree: [],
			tracksNext: [],
			playCount: 0,
			trackCount: 0,
			//这里的id初始为此id 因为前面的idV传入的时间太慢不能在created 或mounted之前得到值 怎么解决？
			// id: this.$store.state.rankId,
		}
	},
	computed: {
	},
	watch: {
		id : function() {
				if((typeof this.id == "string") || (typeof this.id == "number")) {
					playlistDetail(this.id).then(res => {
						this.playCount = res.playlist.playCount
						this.tracksNext = res.playlist.tracks
						this.trackCount = res.playlist.trackCount
					})
				}else if(typeof this.id == "object") {
					playlistDetail(this.id.id).then(res => {
						this.playCount = res.playlist.playCount
						this.tracksNext = res.playlist.tracks
						this.trackCount = res.playlist.trackCount
					})
				}else {}
			
		}
	},
	methods: {
		toMusic(id) {
			console.log(id)
			this.$router.push('/discoverMu/music/' + id)
		},
		toArtist(id) {
			if(id) {
				console.log(id)
			}
			console.log('getId?')
		}
	},
	components: {
		
	},
	created() {
		if((typeof this.id == "string") || (typeof this.id == "number")) {
			playlistDetail(this.id).then(res => {
				this.playCount = res.playlist.playCount
				this.tracksNext = res.playlist.tracks
				this.trackCount = res.playlist.trackCount
			})
		}
}
}
</script>
<style lang='scss' scoped>
#appC{
	width: 100%;
	min-width: 400px;
/*	background-color: #f5f5f5;*/
}
.box_title{
	width: 100%;
	height: 35px;
	line-height: 35px;
	font-size: 16px;
	overflow: hidden;
	border-bottom: 2px solid #ff0000;
	.title1{
		float: left;
		span{
			margin: 0 5px;
		}
	}
	.title2{
		float: right;
		span{
			margin: 0 5px;
		}
	}
	.box_count{
		font-size: 12px;
	}

}
.box_table{
	width: 100%;
	position: relative;
	background-color: #eee;
	.table_title{
		/*border: 1px solid #000111;*/
		border-bottom: 1px solid #BEBEBE;
		width: 100%;
		height: 39px;
		.table_id{
			position: absolute;
			top:0;
			left: 0;
			width: 77px;
			height: 40px;
			line-height: 39px;
			display: inline-block;
			border-right: 1px solid #BEBEBE;
			span{
				margin-left: 20px;
			}
		}
		.table_cont{
			position: absolute;
			top:0;
			left: 78px;
			width: 395px;
			height: 40px;
			line-height: 39px;
			display: inline-block;
			border-right: 1px solid #BEBEBE;
			span{
				margin-left: 20px;
			}
		}
		.table_time{
			position: absolute;
			top:0;
			left: 474px;
			width: 91px;
			height: 40px;
			line-height: 39px;
			display: inline-block;
			border-right: 1px solid #BEBEBE;
			span{
				margin-left: 10px;
			}
		}
		.table_songer{
			position: absolute;
			top:0;
			left: 566px;
			width: 93px;
			height: 39px;
			line-height: 39px;
			display: inline-block;
			span{
				margin-left: 10px;
			}
		}					

	}
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
		height: auto;
		.next {
			height: 30px;
			font-size: 12px;
			color: rgb(102, 102, 102);
			display: flex;
			&:nth-child(1), &:nth-child(2), &:nth-child(3){
				height: 70px;
				position: relative;
				.table_id{
					width: 58px;
					height: 100%;
					line-height: 70px;
					vertical-align: middle;
					margin: 0 0 0 20px;
					padding: 0;
					display: inline-block;
				}
				.table_cont{
					flex-grow: 1;
					height: 100%;
					line-height: 70px;
					margin: 0 0 0 20px;
					padding: 0;
					display: inline-block;
					img{
						width: 50px;
						height: 50px;
						margin: 10px 10px 20px 0;
					}
					span{
						line-height: 70px;
						vertical-align: top;
						&:hover{
							text-decoration: underline;
						}
					}
				}
				.table_time{
					width: 87px;
					height: 100%;
					line-height: 70px;
					vertical-align: middle;
					padding: 0;
					margin: 0 0 0 5px;
					display: inline-block;
				}
				.table_songer{
					width: 93px;
					height: 100%;
					line-height: 70px;
					vertical-align: middle;
					padding: 0;
					display: inline-block;
					span{
						display: inline-block;
						white-space: nowrap;
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						&:hover{
							text-decoration: underline;
						}
					}
				}
			}
			.table_id{
				width: 58px;
				height: 18px;
				padding: 6px 0;
				line-height: 18px;
				margin-left: 20px;
				display: inline-block;
			}
			.table_cont{
				flex-grow: 1;
				height: 18px;
				padding: 6px 0;
				line-height: 18px;
				margin-left: 20px;
				display: inline-block;
				span{
					&:hover{
						text-decoration: underline;
					}
				}
			}
			.table_time{
				width: 87px;
				height: 18px;
				padding: 6px 0;
				line-height: 18px;
				margin-left: 5px;
				display: inline-block;
			}
			.table_songer{
				/*这里需要多余省略*/
				width: 93px;
				height: 18px;
				padding: 6px 0;
				line-height: 18px;
				display: inline-block;
				span{
					display: inline-block;
					white-space: nowrap;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					&:hover{
						text-decoration: underline;
					}
				}
			}
			&:nth-child(odd){
				background-color: #f5f5f5;
			}
			&:nth-child(even){
				background-color: #fff;
			}

		}
	}
}
</style>