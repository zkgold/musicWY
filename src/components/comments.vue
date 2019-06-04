<template>
	<div id="comment_app">
		<span class="titleFir">
			评论
			<span class="titleFir_r">共{{total}}条评论</span></span>
		<div class="self_comment"></div>
		<span class="titleSec">精彩评论</span>
		<div class="splendid_comment">
			<div v-for="(item,id) in hotComments" :key="id">
				<div class="splendid_left"><img :src="item.user.avatarUrl"></div>
				<div class="splendid_right">
					<div class="right_top">
						<span class="content_name">{{item.user.nickname}}:</span> <span>{{item.content}}</span>
					</div>
					<div class="right_bottom">
						{{item.time}}
						<div class="right_bottom_right">赞({{item.likedCount}})/回复</div>
					</div>
				</div>
			</div>
		</div>
		<span class="titleThr">最新评论</span>
		<div class="newest_comment">
			<div v-for="(item,id) in comments" :key="id">
				<div class="splendid_left"><img :src="item.user.avatarUrl"></div>
				<div class="splendid_right">
					<div class="right_top">
						<span class="content_name">{{item.user.nickname}}:</span> 
						<span>
							{{item.content}}
						</span>
						<div class="content_replied" v-for="list in item.beReplied"v-show="item.ifReplied != []">
							<span class="replied_name">{{list.user.nickname}}</span>
							<span class="replied_content">{{list.content}}</span>
							<!-- {{item.beReplied}}} -->
						</div>
					</div>
					<div class="right_bottom">
						{{item.time}}
						<div class="right_bottom_right">赞({{item.likedCount}})/回复</div>
					</div>
				</div>
			</div>
		</div>
		<div class="comment_page">
			<button class="buttonOut" @click="prevPage"><上一页</button>
			<a href="#" :class="{buttonIn: true,bcg: active[0]}" @click="toPage(1)">1</a>
			<span v-show="left">...</span>
			<a href="#" v-for="(item,id) in pages" :key="id" class="buttonIn" :class="{bcg: active[id+1]}" @click="toPage(item)">{{item}}</a>
			<span v-show="right">...</span>
			<a href="#" class="buttonIn" @click="toPage(maxPage)" :class="{bcg: active[8]}">{{maxPage}}</a>
			<button class="buttonOut" @click="nextPage">下一页></button>
		</div>
	</div>
</template>
<script>
// res.hotComments是主要内容 map 精彩评论
// user.nickname  user.userId  content  commentId user.avatarUrl likedCount time beReplied->ifReplied
// res.comments是最新评论   属性beReplied回复某个人
import {music, playlist} from '../api/getComment.js'
export default {
	name: 'comment',
	props: ['id','type'],
	data: function() {
		return {
			currentPage: 1,
			maxPage: 100,
			active: [true,false,false,false,false,false,false,false,false],
			hotComments: [],
			comments: [],
			total: '',

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
		},
		//这里写idC的目的是为了能在id改变的时候重新请求评论
		idC() {
			console.log('commentCount')
			// 这里的id未定义 如何解决这种问题？
			try{
				if(this.id) {
					this.type == 0 ? this.initMusic() : null
					this.type == 2 ? this.initList() : null				
				}
			}catch (e) {
				console.log(e)
			}
			return this.id 
		}
	},
	methods: {
		getDateFromTime(time) {
			new Date(time)
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
		initMusic() {
			if((typeof this.id == "string") || (typeof this.id == "number")) {
				music(this.id).then(res => {
					this.hotComments = res.hotComments
					this.comments = res.comments
					this.total = res.total
				})
			}else if(typeof id == "object") {
				music(this.id.id).then(res => {
					this.hotComments = res.hotComments
					this.comments = res.comments
					this.total = res.total
				})
			}else {
			}
		},
		initList() {
			console.log('?',this.id)
			if((typeof this.id == "string") || (typeof this.id == "number")) {
				playlist(this.id).then(res => {
					this.hotComments = res.hotComments
					this.comments = res.comments
					this.total = res.total
				})
			}else if( id == null) {console.log('null')}
			else if(typeof id == "object") {
				playlist(this.id.id).then(res => {
					this.hotComments = res.hotComments
					this.comments = res.comments
					this.total = res.total
				})
			}else {
			}
		}
	},
	created() {
		//这里是判断传入的是对象还是数字或字符从而进行请求
		if(this.id && ((typeof this.id == "string") || (typeof this.id == "number"))) {
			this.type == 0 ? this.initMusic() : null
			this.type == 2 ? this.initList() : null
		}
		// console.log('idGet',this.id)
	}

}
</script>
<style lang='scss' scoped>
#comment_app{
	font-size: 14px;
	min-width: 600px;
}
.titleFir{
	display: inline-block;
	margin-bottom: 10px;
	width: 100%;
	border-bottom: 2px solid #FF2D2D;
	font-size: 18px;
	height: 30px;
	line-height: 30px;
	.titleFir_r{
		display: inline-block;
		margin-left: 15px;
		font-size: 14px;
	}
}
.titleSec, .titleThr{
	width: 100%;
	display: inline-block;
	margin-bottom: 10px;
	border-bottom: 1px solid #BEBEBE;
	height: 15px;
	line-height: 15px;	
}
.self_comment{

}
.splendid_comment, .newest_comment{
	width: 100%;
	.splendid_left{
		display: inline-block;
		width: 50px;
		height: 50px;
		margin-right: 15px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.splendid_right{
		display: inline-block;
		vertical-align: top;
		width: calc(100% - 66px);
		.right_top{
			font-size: 12px;
			margin-bottom: 10px;
			.content_name{
				color: #0c73c2;
				display: inline-block;
				margin-right: 10px;
			}
			.content_replied{
				padding: 0 10px;
				border: 1px solid #BEBEBE;
				margin-top: 5px;
				.replied_name{
					color: #0c73c2;
					display: inline-block;
					margin-right: 10px;
				}
			}
		}
		.right_bottom{
			font-size: 12px;
			.right_bottom_right{
				float: right;
				&:after{
					clear: 'both';
					display: block;
					content: '';
				}
			}
		}
	}
}
.comment_page{
	margin: 20px auto 0;
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

</style>