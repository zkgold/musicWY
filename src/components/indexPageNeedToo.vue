<template>
	<div id="picApp">
		<div class="wrap">
			<div class="wrap_left">
				<ul>
					<li><h3>云音乐飙升榜</h3></li>
					<li v-for="(item,id) in speed" :key="id">
						<span @click="toMusic(item.id)">{{id}}-{{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="wrap_mid">
				<ul>
					<li><h3>云音乐新歌榜</h3></li>
					<li v-for="(item,id) in newSong" :key="id">
						<span @click="toMusic(item.id)">{{id}}-{{item.name}}</span>
					</li>
				</ul>
			</div>
			<div class="wrap_right">
				<ul>
					<li><h3>云音乐原创歌曲榜</h3></li>
					<li v-for="(item,id) in create" :key="id">
						<span @click="toMusic(item.id)">{{id}}-{{item.name}}</span>
					</li>
				</ul>
			</div>
		</div>
		<!-- <table class="table_wrap">
			<tr class="table_title">
				<th>云音乐飙升榜</th>
				<th>云音乐新歌榜</th>
				<th>云音乐原创歌曲榜</th>
			</tr>
			<tr v-for="(item,id) in speed" :key="id" class="table_cont">
				<td>{{id}}-{{item.name}}</td>
				<td>{{id}}-{{newSong[id].name}}</td>
				<td>{{id}}-{{create[id].name}}</td>
			</tr>
			<tr>
				<td>查看全部</td>
				<td>查看全部</td>
				<td>查看全部</td>
			</tr>
		</table> -->
	</div>

</template>
<script>
import {idxTopList, getSongDetails} from '../api/loadFirstInterface.js'
export default {
	name: 'indexPageNeed',
	data: function() {
		return {
			speed: [],
			newSong: [],
			create: [],
		}
	},
	methods: {
		toMusic(id) {
			this.$router.push('/discoverMu/music/' + id)
			console.log(id)
		}
	},
	created() {
		idxTopList(0).then(res => {
			return (res.privileges.slice(0,10)).map((ele) => {
	 			return getSongDetails(ele.id).then(res => {
	 				let midName = [...this.newSong].concat(res.songs)
	 				this.newSong = midName
	 				return res

	 			})
	 		})
		})
		idxTopList(2).then(res => {
			return (res.privileges.slice(0,10)).map((ele) => {
	 			return getSongDetails(ele.id).then(res => {
	 				let midName = [...this.create].concat(res.songs)
	 				this.create = midName
	 				return res

	 			})
	 		})
		})
	 	idxTopList(3).then(res => {
	 		return (res.privileges.slice(0,10)).map((ele) => {
	 			return getSongDetails(ele.id).then(res => {
	 				let midName = [...this.speed].concat(res.songs)
	 				this.speed = midName
	 				return res

	 			})
	 		})
		})
	}
}
</script>
<style lang='scss' scoped>
.wrap{
	/*background-color: #eee;*/
	margin-top: 20px;
	width: 100%;
}
.wrap_left{
	border-left: 1px solid #BEBEBE;
}
.wrap_left, .wrap_mid, .wrap_right{
	background-color: #eee;
	display: inline-block;
	width: 33%;
	border-top: 1px solid #BEBEBE;
	border-bottom: 1px solid #BEBEBE;
	border-right: 1px solid #BEBEBE;
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
		font-size: 13px;
		li{
			height: 20px;
			line-height: 20px;
			padding: 0 10px;
			margin: 5px 0;
			span{
				display: inline-block;
				width: 200px;
				height: 20px;
				line-height: 20px;
				overflow: hidden;
				cursor: pointer;
			}
			h3{
				margin: 0 0 10px 0;
				padding: 0;
			}
			&:nth-child(even) {
				background-color: #fff;
			}
			&:nth-child(odd) {
				background-color: #eee;
			}
		}
	}

}
/*.table_wrap{
	border: 1px solid #BEBEBE;
	width: 100%;
	.table_title{
		width: 33%;
		height: 80px;
	}
	.table_cont{
		height: 30px;
		line-height: 30px;
		text-align: left;
		td{
			margin-left: 10px;
		}
	}
}*/
</style>