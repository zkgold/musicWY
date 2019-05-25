<template>
	<div id="app">
		<div class="wrap">
			<div class="box">
				<h2>全部</h2>
				<ul>
					<li v-for="(item,id) in songSheets" :key="id">
						<div><img src="#"></div>
						<p><a href="#">{{id}}</a></p>
						<p class="box_author">by<a href="#">author</a></p>
					</li>
				</ul>
			</div>
			<div class="box_page">
				<div>
					<button>上一页</button>
					<button>这一页</button>
					<button>下一页</button>
					
				</div>
			</div>
		</div>
		<div class="footer">
			i will not do this
		</div>
	</div>	
</template>
<script>
export default {
	name: 'songSheet',
	data: function() {
		return {
			songSheets: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
		}
	}
}
</script>
<style lang='scss' scoped>
#app{
	background-color: #f5f5f5;
}
.wrap{
	width: 980px;
	margin: auto;
	border-left: 1px solid #000;
	border-right: 1px solid #000;
	background-color: #fff;
	.box{
		width: 100%;
		padding: 40px;
		h2{

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
		width: 100%;
		height: 60px;
		div{
			text-align: center;
			height: 30px;
			button{
				margin: 0 10px;
			}
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