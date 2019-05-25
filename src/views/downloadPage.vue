<template>
	<div id="app">
		<redNavigation></redNavigation>
		<div class="big">
			
		</div>
		<div class="midK1">
			<div class="box">
				<div class="box_word">
					<h2>千万曲库 首首CD音质</h2>
					<p>囊括百万，手机听歌时，<br>也能感受到纤毫毕现的CD音质，更能免费离线收听</p>
				</div>
				<div class="box_pic"><img src="https://music.163.com/style/web2/img/down/b1.jpg"></div>
			</div>
		</div>
		<div class="midK2">
			<div class="box">
				<div class="box_word">
					<h2>千位明星 亲自推荐音乐</h2>
					<p>陶喆，羽泉等千位明星已入驻，亲自创建私房歌单，录制独<br>家DJ节目，推荐他们心中的好音乐</p>
				</div>
				<div class="box_pic"><img src="https://music.163.com/style/web2/img/down/b2.jpg"></div>
			</div>
		</div>
		<div class="midK1">
			<div class="box">
				<div class="box_word">
					<h2>社交关系 发现全新音乐</h2>
					<p>你可以关注明星、DJ和好友，通过浏览他们的动态、收藏和<br>分享，发现更多全新好音乐</p>
				</div>
				<div class="box_pic"><img src="https://music.163.com/style/web2/img/down/b3.jpg"></div>
			</div>
		</div>
		<div class="midK2">
			<div class="box">
				<div class="box_word">
					<h2>手机电脑 歌单实时同步</h2>
					<p>只要一个帐号，你就可以同步在手机、电脑上创建、收藏<br>的歌单，随时随地畅享好音乐</p>
				</div>
				<div class="box_pic"><img src="https://music.163.com/style/web2/img/down/b4.jpg"></div>
			</div>
		</div>
		<div class="midK1">
			<div class="box">
				<div class="box_word">
					<h2>听歌识曲 助你疯狂猜歌</h2>
					<p>歌曲很动听却不知道歌名，歌名在嘴边却想不起来…… <br>用听歌识曲功能，几秒钟就知道歌名</p>
				</div>
				<div class="box_pic_spe"><img src="https://music.163.com/style/web2/img/down/b5.jpg"></div>
			</div>
		</div>
		<div class="small">
			<div class="box">
				<h2>网易云音乐</h2>
				<p>下载网易云音乐客户端，随时随地畅享动听好音乐</p>
				<div>
					<img src="https://music.163.com/style/web2/img/down/b8.jpg">
					<div class="box_but">PC端下载</div>
				</div>
				<div class="box_next">
					<img src="https://music.163.com/style/web2/img/down/b6.png">
					<div class="box_but">iPhone端下载</div>
				</div>
				<div class="box_next">
					<img src="https://music.163.com/style/web2/img/down/b9.jpg">
					<div class="box_but">iPad端下载</div>
				</div>
				<div class="box_next">
					<img src="https://music.163.com/style/web2/img/down/b7.png">
					<div class="box_but">安卓版下载</div>
				</div>
				<div class="box_next">
					<img src="https://music.163.com/style/web2/img/down/b10.png">
					<div class="box_but">UWP版下载</div>
				</div>
			</div>
		</div>
		<div class="qrCode">
			<img src="https://music.163.com/style/web2/img/down/code.png">
			<p>扫描二维码下载</p>
		</div>
		<div class="footer">
			not from WYMusic
		</div>
	</div>
</template>
<script>
import redNavigation from '../components/redNavigation.vue'
export default {
	name: 'downloadPage',
	components: {
		redNavigation
	}
}
</script>
<style lang="scss" scoped>
.big{
	width: 100%;
	height:483px;
	background-color: #f7f7ff;
}
.midK1{
	width: 100%;
	height: 437px;
	background-color: #fff;
	.box{
		width: 982px;
		margin: auto;
		overflow: hidden;
		padding-top: 120px;
		.box_word{
			float: left;
			margin-left: 30px;
			h2{
				font-size: 40px;
				/*padding: 5px 0 5px;*/
			}
			p{
				font-size: 16px;
				color: rgb(102,102,102);
			}

			&::after{
				display: block;
				content: '';
				clear: both;
			}

		}
		.box_pic{
			float: right;
			&::after{
				display: block;
				content: '';
				clear: both;
			}
		}
		.box_pic_spe{
			margin-top: -60px;
			float: right;
			&::after{
				display: block;
				content: '';
				clear: both;
			}
		}
	}
}
.midK2{
	width: 100%;
	height: 437px;
	background-color: #f8f8f8;
	.box{
		width: 982px;
		margin: auto;
		overflow: hidden;
		padding-top: 120px;
		.box_word{
			float: right;
			h2{
				font-size: 40px;
				/*padding: 5px 0 5px;*/
			}
			p{
				font-size: 16px;
				color: rgb(102,102,102);
			}

			&::after{
				display: block;
				content: '';
				clear: both;
			}

		}
		.box_pic{
			float: left;
			&::after{
				display: block;
				content: '';
				clear: both;
			}
		}
		.box_pic_spe{
			margin-top: -60px;
			float: right;
			&::after{
				display: block;
				content: '';
				clear: both;
			}
		}
	}
}
.small{
	width: 100%;
	height: 343px;
	.box{
		width: 1068px;
		margin: auto;
		overflow: hidden;
		h2{
			font-size: 30px;
			text-align: center;
		}
		p{
			font-size: 12px;
			color: rgb(102,102,102);
			text-align: center;
		}
		div{
			width: 124px;
			height: 142px;
			float: left;
			margin-top: 10px;
			&::after{
				display: block;
				content: '';
				clear: both;
			}
		}
		.box_next{
			padding-left: 106px;
		}

	}
}
.qrCode{
	position: fixed;
	right: 10px;
	top: 50%;
	width: 105px;
	height: 126px;
	box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 4px;
    opacity: 0.75;
	img{
		width: 105px;
		height: 105px;
	}
	p{
		line-height: 15px;
		text-align: center;
		color: #000;
		font-size: 12px;
		margin: 0;
	}
}
.footer{
	width: 100%;
	height: 150px;
	text-align: center;
	padding: 20px 0;
	background-color: #d3d3d3;
}
</style>