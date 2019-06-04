<template>
	<div id="playFrame_app" v-show="mouseOver">
		<div class="wrap">
			<div class='box'>
				<div class='box_left'><span>上一首</span></button></div>
				<video :src="musicUrl" controls="controls" class="video">不支持video标签</video>
				<div class="right"></div>
			</div>
		</div>
	</div>
</template>
<script>
import {musicUrl} from '../../api/loadFirstInterface.js'
export default {
	name: 'playFrame',
	data: function() {
		return {
			mouseOver: false,
			viewHeight: '',
		}
	},
	methods: {
		mouseover(e) {
			if(this.viewHeight - e.screenY <= 100) {
				this.mouseOver = true
				document.removeEventListener('mousemove',this.mousemove)
				document.addEventListener('mousemove',this.mouseout)

			}
		},
		mouseout(e) {
			if(this.viewHeight - e.screenY > 100) {
				this.mouseOver = false
				document.removeEventListener('mousemove',this.mouseout)
				document.addEventListener('mousemove',this.mousemove)

			}
		}
	},
	computed: {
		musicUrl() {
			console.log('getMusicUrl',this.$store.state.musicUrl)
			return this.$store.state.musicUrl
		}
	},
	mounted() {
		this.viewHeight = window.screen.height
		document.addEventListener('mousemove', this.mouseover)

	},
	created() {
		musicUrl(167679).then(res => {
			this.$store.commit('setMusicUrl',res.data[0]['url'])
			return res
		})
	}
}
</script>
<style lang='scss' scoped>
#playFrame_app{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
}
.wrap{
	width: 100%;
	height: 100%;
	background-color: #242424;
	.box{
		position: relative;
		width: 980px;
		margin: 0 auto;
		height: 100%;
		.box_left{
			/*display: inline-block;*/
			position: absolute;
			top: 0;
			left: 0;
			width: 150px;
			height: 50px;
			line-height: 50px;
			text-align: center;
			color: #fff;
		}
		.video{
			position: absolute;
			top: 0;
			left: 150px;
			width: 600px;
			margin: 15px 0;
			height: 20px;
			outline: none;

		}
	}
}
</style>