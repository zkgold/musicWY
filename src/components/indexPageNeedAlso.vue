<template>
	<div id="also_app">
		<div class="left" @click="left()"></div>
		<div class="content">
			<div id="also_content">
				<ul class="showFir">
					<li v-for="(item,id) in albums" :key="id" @click="toAlbum(item.id)">
						<img :src="item.picUrl">
						<span>{{item.name}}</span>
						<p>{{item.artists[0]['name']}}</p>
					</li>
				</ul>
				<ul class="showSec">
					<li v-for="(item,id) in albumsNext" :key="id" @click="toAlbum(item.id)">
						<img :src="item.picUrl">
						<span>{{item.name}}</span>
						<p>{{item.artists[0]['name']}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="right" @click="right()"></div>
	</div>
</template>
<script>
import {newestAlbum} from '../api/loadFirstInterface.js'
export default {
	name: 'indexPageNeedAlso',
	data: function() {
		return {
			show: true,
			albums: [],
			albumsNext: []
		}
	},
	methods: {
		left() {
			let mid = this.albums
			this.albums = this.albumsNext
			this.albumsNext = mid
		},
		right() {
			let mid = this.albums
			this.albums = this.albumsNext
			this.albumsNext = mid
		},
		toArtist() {

		},
		toAlbum(id) {
			console.log('album',id)
		}
	},
	created() {
		newestAlbum().then((res) => {
			console.log('albums',res.albums)
			this.albums = res.albums.slice(0,5)
			this.albumsNext = res.albums.slice(5,10)
		})
	}
}
</script>
<style lang='scss' scoped>
#also_app{
	font-size: 14px;
	width: 100%;
	height: 184px;
	border: 1px solid rgb(255, 255, 255);
	background-color: rgb(245, 245, 245);
	position: relative;
}
.left{
	position: absolute;
	left: 0;
	top: 40%;
	transform: translateY(-50%);
	width: 0;
	height: 0;
	border: 10px solid;
	border-color: transparent #BEBEBE transparent transparent;
	&:after{
		content: '';
		position: absolute;
		top: -10px;
		left: -6px;
		border: 10px solid;
		border-color: transparent rgb(245, 245, 245) transparent transparent;
	}

}
.right{
	position: absolute;
	right: 0;
	top: 40%;
	transform: translateY(-50%);
	width: 0;
	height: 0;
	border: 10px solid;
	border-color: transparent transparent transparent #BEBEBE;
	&:after{
		content: '';
		position: absolute;
		top: -10px;
		left: -14px;
		border: 10px solid;
		border-color: transparent transparent transparent rgb(245, 245, 245);
	}
}
.content{
	position: absolute;
	left: 30px;
	top: 0;
	width: calc(100% - 60px);
	height: 100%;
	overflow: hidden;
	ul{
		padding: 0;
		margin: 0;
		width: 100%;
		list-style: none;
		li{
			float: left;
			width: 20%;
			font-size: 12px;
			margin: 20px auto 0;
			img{
				width: 118px;
				height: 110px;
			}
			span{
				margin-left: 10px;
				cursor: pointer;
				&:hover{
					text-decoration: underline;
				}
			}
			p{
				margin: 0 0 0 10px;
				padding: 0;
			}
		}
	}
}
</style>