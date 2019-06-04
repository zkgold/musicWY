<template>
	<div id="app">
		<div class="wrapper">
			<div class="wrap">
				<div class="navigation icon"><span>musicWY</span></div>
				<div class="navigation nav">
					<ul>
						<li @click="mark(0,$event)" :class="{blackB: arrow[0]}">
							<router-link to="/discoverMu" class="link">发现音乐</router-link>
							<div :class="{arrow: arrow[0],noArrow: !arrow[0]}"></div>
						</li>
						<li @click="mark(1,$event)" :class="{blackB: arrow[1]}"><router-link to="/myMu" class="link">我的音乐</router-link><div :class="{arrow: arrow[1],noArrow: !arrow[1]}"></div></li>
						<li @click="mark(2,$event)" :class="{blackB: arrow[2]}"><router-link to="/friendsMu" class="link">朋友</router-link><div :class="{arrow: arrow[2],noArrow: !arrow[2]}"></div></li>
						<li @click="toShopping()" :class="{blackB: arrow[3]}"><div class="link">商城</div></li>
						<li @click="toMuscial()" :class="{blackB: arrow[4]}"><div class="link">音乐人</div></li>
						<li @click="mark(5,$event)" :class="{blackB: arrow[5]}"><router-link to="/download" class="link">下载</router-link><div :class="{arrow: arrow[5],noArrow: !arrow[5]}"></div></li>
					</ul>
				</div>
				<div class="navigation right user" id="user" v-on:mouseenter="userShow()" @mouseleave="userFade()"><span v-if="userLoginIn">未登录</span><span v-else class="user_img"></span><span class="user_triangle"></span></div>
				<div :class="{user_list: !disNone, disNone: disNone}" v-on:mouseenter="userShow()" @mouseleave="userFade()">
					<ul v-if="loginIn">
						<li v-for="(item,id) in userList" :key="id" @click="userFade()">
							<router-link :to="'/user/'+id" class="list_to">{{item}}</router-link>
						</li>
						<li @click="loginOut()" class="user-login">退出</li>
					</ul>
					<ul v-else>
						<li v-for="(item,id) in loginStyle" :key="id" @click="loginInWithStyle(id)" class="iNeedClick">
							<span class="list_to">{{item}}</span>
						</li>
					</ul>
				</div>
				<div class="navigation creater right"><div>创作者中心</div></div>
				<div class="navigation search right">
					<div class="search_wrap">
						<div class="search_le">||</div>
						<input type="" name="" class="search_ri">
					</div>
				</div>
			</div>
		</div>
		<phone class="loginIn" v-on:cancel="delePhone" v-show="showLoginView[0]" @getUser="initUser"></phone>
	</div>
</template>
<script>
import phone from './loginIn/Phone.vue'
import {login} from '../api/staff.js'
export default {
	name: 'HeaderCom',
	data: function() {
		return {
			arrowTo: ['/discoverMu','/myMu','/friendsMu','/#','/#','/download'],
			disNone: true,
			userList: ['我的主页','我的消息','我的等级','VIP会员','个人设置','实名认证'],
			loginStyle : ['手机号登录','微信号登录','QQ号登录'],
			showLoginView: [false,this.showWeiXin,this.showQQ],
			loginIn: false,
			userLoginIn: true,

		}
	},
	methods: {
		mark(id) {
			// let tar = event.target
			this.$store.commit('changeBarAtHeader',id)
			this.$router.push(this.arrowTo[id])
		},
		userShow() {
			this.disNone = false
		},
		userFade() {
			this.disNone = true
		},
		loginInWithStyle(id) {
			this.disNone = true
			id === 0 ? this.showLoginView = [true,this.showWeiXin,this.showQQ] : this.showLoginView[id]() 
		},
		showWeiXin() {
			this.$router.push('/WV')			
		},
		showQQ() {
			this.$router.push('/QV')
		},
		delePhone() {
			this.showLoginView = [false,this.showWeiXin,this.showQQ]
		},
		initUser(obj) {
			//这个反理解
			this.userLoginIn = false
			this.loginIn = true
			console.log(obj)
		},
		loginOut() {
			this.userLoginIn = true
			this.loginIn = false
			this.$store.commit('userOut')
			login.logout().then((res) => {
				console.log(res)
			})
		},
		toShopping() {
			window.open('https://music.163.com/store/product','_blank')
		},
		toMuscial() {
			window.open('https://music.163.com/nmusician/web/index#/','_blank')
		}
	},
	components: {
		phone
	},
	computed: {
		//这里所做的是为了让刷新时页面的效果与arrow对齐 如果想要页面刷新时不跳转组件 应该重写
		arrow: function() {
			if(this.$store.state.barAtHeader[0] == true) {
				this.$router.push(this.arrowTo[0])
			}
			return this.$store.state.barAtHeader
		},
	}
}
</script>
<style lang='scss' scoped>
#app {
	height: 70px;
	line-height: 70px;
	text-decoration: none;
}
.wrapper{
	width: 100%;
	height: 100%;
	margin: auto;
	background-color: #242424;
	color: #ffffff;
	text-align: center;
}
.wrap{
	position: relative;
	width: 1100px;
	height: 100%;
	margin: auto;
	/*overflow: hidden;*/
	&::after{
		display: block;
		content: '';
		clear: both;
	}
}
.wrapper .wrap .navigation{
	display: inline-block;
}
.icon{
	width: 177px;
	height: 100%;
	font-size: 25px;
	line-height: 70px;
	float: left;
	overflow: hidden;
}
.nav{
	height: 100%;
	float: left;
	overflow: hidden;
	ul{
		padding: 0;
		margin: 0;
		li{
			float: left;
			position: relative;
			list-style: none;
			max-width: 100px;
			/*line-height: 100%;*/
			text-align: center;
			vertical-align: center;
			.link{
				color: #fff;
				text-decoration: none;
				margin: 0 15px;
				cursor: pointer;
			}
			&:hover{
				background-color: #000;
			}


		}
	}
}
.arrow{
	width: 0;
    height: 0;
    border: 7px solid transparent;
    border-bottom: 7px solid #a40011;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}
.blackB {
	background-color: #000;
}
.noArrow{
	display: none;
}
.right{
	float: right;
	overflow: hidden;

}
.user, .search, .creater{
	height: 100%;
	padding: auto 5px;
}
.user{
	width: 70px;
	cursor: pointer;
	position: relative;
	font-size: 12px;
	.user_triangle{
		position: absolute;
		top: 32px;
		left: 54px;
		display: inline-block;
		width: 0;
		height: 0;
		border-width: 6px;
		border-style: solid;
		/*transform: translate(6px, px);*/
		border-color: #fff transparent transparent transparent;
	}
	.user_img{
		position: absolute;
		left: 5px;
		display: inline-block;
		width: 36px;
		height: 36px;
		margin: 17px 0;
		border-radius: 50%;
		background: #fff;
	}
}
.user_list{
	position: absolute;
	top: 60px;
	right: 0;
	display: block;
	transform: translateX(35%);
	width: 150px;
	height: 210px;
	&::after{
		content: '';
		display: block;
		clear: both;
	}
	ul{
		padding: 0;
		margin: 0;
		li, user-login{
			list-style: none;
			padding: 0;
			margin: 0;
			width: 100%;
			text-align: center;
			height: 30px;
			line-height: 30px;
			font-size: 14px;
			color: #ff2222;
			background-color: #333334;
			cursor: pointer;
			&:hover{
				background-color: #333222;

			}
			.list_to{
				text-decoration: none;
				color: #ff2222;
			}
		}
	}
}
.disNone{
	display: none;
}
.creater{
	width: 90px;
	height: 100%;
	div{
		font-size: 10px !important;
		width: 70px;
		height: 30px;
		margin: 20px 10px;
		border: 1px solid #ccc;
		border-radius: 10px;
		line-height: 30px;
		font-size: 14px;
		text-align: center;
		vertical-align: center;
		cursor: pointer;
		color: #ccc;
		&:hover{
			color: #fff;
			border-color: #fff;
		}
	}
}
.search{
	width: 158px;
	.search_wrap{
		width: 138px;
		height: 30px;
		margin: 20px 10px;
		border-radius: 15px;
		border: 1px solid #eee;
		background-color: #fff;
		padding: 0;
		.search_le{
			margin: 0;
			width: 15px;
			height: 30px;
			text-align: center;
			display: inline-block;
			/*background-color: #fff;*/
			color: #999;
			padding: 0;
			transform: translateY(-20px);
		}
		.search_ri{
			margin: 0;
			width: 98px;
			height: 28px;
			display: inline-block;
			transform: translateY(-20px);
			/*background-color: transparent;*/
			border: none;
			padding: 0;
			outline: none
		}

	}

}
.loginIn{
	position: fixed;
	left: 50%;
	top: 50%;
	width: 530px;
	height: 280px;
	transform: translate(-50%,-50%);
	box-shadow: 5px 5px 5px;
	background-color: #fff;
	border-radius: 5px;
	z-index: 100;
}
.display{
	display: none;
}
</style>