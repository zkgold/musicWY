<template>
	<div id="musciApp">
		<div class="wrap">
			<div class="box_left">
				<div class="left">
					<div class="img_left">
						<img :src="song.al.picUrl">
					</div>
					<div class="cont_left">
						<h2><span>单曲</span>{{song.name}}</h2>
						<!-- 可能没有这个值但是添加可能会显示错误 -->
						<h3 v-if="song.alia[0]">{{song.alia[0]}}</h3>
						<h5><span >歌手:</span>{{song.ar[0]['name']}}</h5>
						<h5><span>所属专辑:</span>{{song.al.name}}</h5>
						<div class="play_music">
							<button @click="play()">播放</button>
						</div>
						<div class="lyric">
							<p v-for="(word,id) in lyricMusic" :key="id">
							{{word}}
							</p>
						</div>
					</div>
					<comment class="comment" :id="idM" :type="type"></comment>
					
				</div>
			</div>
			<div class="box_right">
				<div class="right">nothing</div>
			</div>
		</div>
		<div class="footer">
			<video :src="musicUrl"></video>
			宇宙之大 我在其中
		</div>
	</div>
</template>
<script>
import {getSongDetails, lyric, musicUrl} from '../../api/loadFirstInterface.js'
import comment from '../../components/comments.vue'
export default {
	name: 'music',
	data: function() {
		return {
			song: {'al':{'name':'','picUrl': ''},alia:[[]],'ar':[{'name':''}]},
			lyricWithTime: '',
			lyricMusic: '',
			idM: null,
			musicUrl: '',
			type: 0,

		}
	},
	methods: {
		initLyric() {
			let words = this.lyricWithTime.split('\n')
			words = words.map(ele => {
				return ele.replace(/\[.*\]/,'')
			})
			this.lyricMusic = words
		},
		play() {
			this.$store.commit('setMusicUrl',this.musicUrl)
		}
	},
	components: {
		comment
	},
	created() {
		this.idM = this.$route.params.id
		getSongDetails(this.idM).then(res => {
			this.song = res.songs[0]
		})
		lyric(this.idM).then(res => {
			this.lyricWithTime = res.lrc.lyric
			this.initLyric()
			let next = res.tlyric.lyric
		})
		musicUrl(this.idM).then(res => {
			this.musicUrl = res.data[0]['url']
		})
	}
}
</script>
<style lang='scss' scoped>
#musicApp{
	min-width: 980px;
}
.wrap{
	width: 980px;
	margin: 0 auto;
	border-left: 1px solid #000;
	border-right: 1px solid #000;
	background-color: #fff;
	.box_left{
		float: left;
		overflow: hidden;
		width: 709px;
		height: 100%;
		border-right: 1px solid #000;
	}
	.box_right{
		float: right;
		overflow: hidden;
		width: 270px;
		height: 100%;
	}
	&::after{
		display: block;
		content: '';
		clear: both;
	} 
}
.left{
	padding: 20px;
	.img_left{
		display: inline-block;
		position: relative;
		width: 229px;
		height: 300px;
		vertical-align: top;
		img{
			position: absolute;
			top: 20px;
			left: 14px;
			width: 205px;
			height: 205px;
		}
	}
	.cont_left{
		display: inline-block;
		width: 420px;
		margin-left: 20px;
		h2, h3, h5 {
			margin: 10px 0;
		}
		.play_music{
			margin-bottom: 50px;
			button{
				width: 80px;
				height: 30px;
			}
		}
		.lyric{
			max-height: 400px;
			overflow: hidden;
		}
		p{
			font-size: 12px;
			margin: 4px 0;
		}
	}
	.comment{
		margin-top: 50px;
		display: block;
		padding: 0 20px;
	}
}
.footer{
	border-top: 1px solid #000;
	padding: 30px 0;
	text-align: center;
}
</style>