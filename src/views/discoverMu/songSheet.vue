<template>
	<div id="app">
		<div class="wrap">
			<div class="box">
				<div class="box_header">
					<h2>全部</h2>
					<button class="chseDivide" @click.stop="changeDivided()">选择分类</button>
					<div class="chse"><button :class="{bsg: hot}" @click="hotOrNew='hot';hot=true">热门</button><button :class="{bsg: !hot}" @click="hotOrNew = 'new';hot=false">最新</button></div>
					<div v-show="divided" class="box_divided">
						<div class="box_divided_top"><span>全部风格</span></div>
						<ul>
							<li v-for="(item,id) in category" :key="id">
								<ul>
									<li class="special_category">{{item}}</li>
									<li v-for="(list,index) in categories[id]" :key="index" @click="catCategory(list.name)" class="normal_category">
										{{list.name}}
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<ul>
					<li v-for="(item,id) in songSheets" :key="id" @click="toList(item.id)">
						<div><img :src="item.coverImgUrl"></div>
						<p><a href="#">{{item.name}}</a></p>
						<p class="box_author">by<a href="#">{{item.creator.nickname}}</a></p>
					</li>
				</ul>
			</div>
			<div class="box_page">
				<button class="buttonOut" @click="prevPage"><上一页</button>
				<a href="#" :class="{buttonIn: true,bcg: active[0]}" @click="toPage(1)">1</a>
				<span v-show="left">...</span>
				<a href="#" v-for="(item,id) in pages" :key="id" class="buttonIn" :class="{bcg: active[id+1]}" @click="toPage(item)">{{item}}</a>
				<span v-show="right">...</span>
				<a href="#" class="buttonIn" @click="toPage(maxPage)" :class="{bcg: active[8]}">{{maxPage}}</a>
				<button class="buttonOut" @click="nextPage">下一页></button>
			</div>
		</div>
		<div class="footer">
			i will not do this
		</div>
	</div>	
</template>
<script>
import {catlistPlaylist, topPlaylist, hotPlaylist, topPlaylistCat,highquality} from '../../api/loadFirstInterface.js'
export default {
	name: 'songSheet',
	data: function() {
		return {
			songSheets: [],
			hot: true,
			divided: false,
			all: '',
			category: [],
			categories: [],
			currentPage: 1,
			maxPage: 100,
			active: [true,false,false,false,false,false,false,false,false],
			hotOrNew: "hot",
		}
	},
	methods: {
		changeDivided() {
			this.divided = !this.divided
			document.addEventListener('click',this.clickCancel)
		},
		clickCancel() {
			this.divided = false
			document.removeEventListener('click',this.clickCancel)
		},
		toPage(id) {
			this.currentPage = id
			console.log(id)
		},
		prevPage() {
			this.currentPage > 1 ? this.currentPage -= 1 : null
		},
		nextPage() {
			this.currentPage < this.maxPage ? this.currentPage += 1 : null
		},
		catCategory(name) {
			topPlaylistCat(name,35,this.hotOrNew).then(res => {
				this.songSheets = res.playlists

			})
			this.changeDivided()
		},
		toList(id) {
			console.log('list',id)
		}
	},
	computed: {
		pages() {
			if(this.currentPage <= 5) {
				this.active = [false,false,false,false,false,false,false,false,false].map((ele,id) => id==this.currentPage - 1)
				return new Array(7).fill(2).map((ele,id) => ele+id)
			}else if(this.currentPage + 4 >= this.maxPage) {
				this.active = [false,false,false,false,false,false,false,false,false].map((ele,id) => 8 - id==this.maxPage-this.currentPage)
				return new Array(7).fill(this.maxPage-7).map((ele,id) => ele+id)
			}else {
				this.active = [false,false,false,false,true,false,false,false,false]
				return new Array(7).fill(this.currentPage-3).map((ele,id) => ele+id)
			}
		},
		left() {
			return this.currentPage >= 6
		},
		right() {
			return this.currentPage + 3 < this.maxPage
		}
	},
	created() {
		topPlaylist("全部",35).then(res => {
			this.songSheets = res.playlists
		})
		catlistPlaylist().then(res => {
			console.log(res)
			this.category = res.categories
			let re = [[],[],[],[],[]]
			res.sub.map((ele) => {
				re[ele.category].push(ele)
			})
			this.categories = re
			console.log(this.categories)
		})
	}
}
</script>
<style lang='scss' scoped>
#app{
	background-color: #f5f5f5;
	font-size: 14px;
}
.wrap{
	width: 980px;
	margin: auto;
	border-left: 1px solid #000;
	border-right: 1px solid #000;
	background-color: #fff;
	.box{
		/*width: 100%;*/
		padding: 40px;
		.box_header{
			width: 100%;
			height: 42px;
			border-bottom: 2px solid #ff0000;
			position: relative;
			margin-bottom: 20px;
			h2{
				font-size: 25px;
				font-weight: normal;
			}
			.chseDivide{
				position: absolute;
				left: 60px;
				top: 0;
				width: 90px;
				height: 33px;
				color: rgb(51, 51, 51);
				/*border-radius: 5px;*/
				outline: none;
			}
			.chse{
				position: absolute;
				right: 0;
				top: 0;
				button{
					width: 46px;
					height: 29px;
					outline: none;
					border: none;
				}
				.bsg{
					background-color: #ff0000;
				}
			}
			.box_divided{
				position: absolute;
				top: 55px;
				left: 0;
				width: 600px;
				min-height: 50px;
				border: 1px solid #BEBEBE;
				background-color: #fff;
				font-size: 14px;
				.box_divided_top{
					width: 100%;
					height: 60px;
					border-bottom: 1px solid #BEBEBE;
					span{
						margin-left: 20px;
						width: 100%;
						height: 60px;
						line-height: 60px;
						padding: 5 15px;
						background-color: #eee;
						border: 1px solid #BEBEBE;
					}
				}
				ul{
					padding: 0;
					margin: 0;
					list-style: none;
					border-radius: 5px;
					li{
						padding: 0;
						line-height: 30px;
						height: auto;
						width: 100%;
						ul{
							padding: 0;
							margin: 0;
							list-style: none;
							.special_category{
								font-weight: bold;

							}
							li{
								float: left;
								width: auto;
								height: 15px;
								margin: 0 18px 5px 0;
								line-height: 15px;
								position: relative;
								cursor: pointer;
								&:hover{
									text-decoration: underline;
								}
								&:after{
									position: absolute;
									left: calc(100% + 8px);
									top: 0;
									content: '|';
									color: #BEBEBE;
								}
							}
						}
					}
				}
			}
		}
		ul{
			list-style: none;
			overflow: hidden;
			padding: 0;
			margin: 0;
			margin-left: -50px;
			li{
				float: left;
				width: 140px;
				height: 180px;
				padding: 0 0 30px 50px;
				margin-bottom: 15px;
				img{
					width: 140px;
					height: 140px;
				}
				p{
					margin: 0;
				}
				.box_author{
					font-size: 14px;
					color: #666;
				}
				&::after{
					content: '';
					display: block;
					clear: both;
				}
			}
		}
	}
	.box_page{
		margin: 20px auto 0;
		padding-bottom: 20px;
		width: 545px;
		.buttonIn{
			font-size: 12px;
			margin: 0 5px;
			text-decoration: none;
			padding: 3px 8px;
			border: 1px solid #BEBEBE;
			vertical-align: middle;
			background-color: #fff;
			border-radius: 2px;
			&:hover{
				border-color: #000;
			}
		}
		.buttonOut{
			width: 72px;
			height: 26px;
			vertical-align: middle;
		}
		.bcg{
			background-color: #ff0000 !important;
		}
	}
}
.footer{
	width: 100%;
	height: 149px;
	padding: 30px 0;
	border-top: 1px solid #000;
	text-align: center; 
}
</style>