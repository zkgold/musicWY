<template>
	<div id="app">
		<div class="wrap">
			<div class="wrap_left">
<!-- 				<div class="left_box"> -->
					<h2>推荐</h2>
					<ul>
						<li></li>
					</ul>
					<h2>华语</h2>
					<ul>
						<li></li>
					</ul>
					<h2>欧美</h2>
					<ul>
						<li></li>
					</ul>
					<h2>日本</h2>
					<ul>
						<li></li>
					</ul>
					<h2>韩国</h2>
					<ul>
						<li></li>
					</ul>
					<h2>其他</h2>
					<ul>
						<li></li>
					</ul>

			</div>
			<div class="wrap_right">
				<!-- <div class="right_box">
					
				</div> -->
				<h2>入驻歌手</h2>
				<ul>
					<li v-for="(item,id) in standSonger" :key="id">
						<div><img src="#"></div>
						<p>songer</p>
					</li>
				</ul>
				<h2>热门歌手</h2>
				<ul>
					<li v-for="(item,id) in hotSonger" :key="id">
						<div><img src="#"></div>
						<p>songer</p>
					</li>
				</ul>
				<div class="songerList">
					<ul>
						<li v-for="(item,id) in songerList" :key="id"></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
			footer
		</div>
	</div>
</template>
<script>
export default {
	name: 'songer',
	data: function() {
		return {
			songerList : [{},{},{},{}],
			standSonger: [{},{},{},{},{},{},{},{}],
			hotSonger: [{},{},{},{},{},{},{},{}]
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
	background-color: #fff;
	border-left: 1px solid #000;
	border-right: 1px solid #000;
	.wrap_left{
		float: left;
		width: 160px;
		padding-left: 20px;
		overflow: hidden;
		height: 100%;
	}
	.wrap_right{
		float: right;
		width: 719px;
		padding: 40px;
		overflow: hidden;
		border-left: 1px solid #000;
		height: 100%;
	}
	&::after{
			display: block;
			content: "";
			clear: both;
		}
}
.wrap_left{
	h2{
		font-size: 16px;
	}
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
		li{
			width: 160px;
		}
	}
}
.wrap_right{
	h2{
		font-size: 16px;
	}
	ul{
		width: 719px;
		list-style: none;
		padding: 0;
		margin: 0;
		margin-left: -17px;
		overflow: hidden;
		li{
			width: 130px;
			height: 154px;
			float: left;
			padding: 0 0 30px 17px;
			img{
				width: 130px;
				height: 130px;
			}
			p{
				margin: 0;
			}
			&::after{
				display: block;
				content: '';
				clear: both;
			}
		}
	}
	.songerList{
		ul{
			list-style: none;
			padding: 0;
			margin: 0;
			li{
				width: 130px;
				height: 154px;
				float: left;
			}
		}
	}
}
.footer{
	width: 100%;
	height: 120px;
	border-top: 1px solid #000;
	padding: 20px 0;
	text-align: center;
}
</style>