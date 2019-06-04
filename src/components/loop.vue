<template>
	<div id="app">
		<div class="wrap">
			<div class="wrapper" id="slideshow">
				<img  v-for="(item,id) in banners" :src="item.imageUrl" :class="{active: active[id]}" :key="id">
			</div>
			<div class="box_right"><img src="https://s2.music.126.net/style/web2/img/index/download.png"></div>
			</div>
		</div>
	</div>
</template>
<script>
import {banner} from '../api/loadFirstInterface.js'
export default {
	name: 'loop',
	props: ['picData'],
	data: function() {
		return {
			src: this.picData.src,
			len: '',
			banners: [],
			active: [true,false,false,false,false,false,false,false,false],
			current: 0,
			imgs: '',
		}
	},
	methods: {
		slideOn() {
			this.active = new Array(this.imgs.length).fill(1).map((ele,id) => id == this.current)
		},
		changeSlide() {
			this.current = this.current + 1; //自增1
		    if(this.current >= this.imgs.length) {
		    	this.current = 0;
		    }
		    this.slideOn();
		},
		slide() {			
			let slideshow = document.querySelector("#slideshow")
			this.imgs = slideshow.getElementsByTagName("img")
			var slideon=setInterval(this.changeSlide,4000);
		}
	},
	created() {
		banner().then((res) => {
			this.banners = res.banners
		})
	},
	mounted() {
		this.slide()	
	}
}
</script>
<style lang='scss' scoped>
#app{
	background-color: #242424;
	padding: 0;
	margin: 0;
}
.wrap{
	width: 980px;
	height: 336px;
	margin: auto;
	border: 1px solid black;
	border-top: none;
	.wrapper{
		float: left;
		width: 729px;
		height: 336px;
		position: relative;
		overflow: hidden;
		img{
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			opacity: 0;
			transition: opacity 2s linear;
		}
		.active{
			opacity: 1;
		}
	}
	.box_right{
		float: right;
		width: 251px;
		height: 336px;
		overflow: hidden;
	}
	&:after{
		clear: 'both';
		content: '';
		display: block;
	}
}

</style>