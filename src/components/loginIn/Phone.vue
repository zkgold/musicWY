<template>
	<div id="app_Phone">
		<div class="wrap">
			<div class="top"><span>手机号登录</span><span class="dele" @click="dele()">x</span></div>
			<div class="cont">
				<div class="cont_form">
					<div><input type="" name="" class="num"></div>									
					<div><input type="" name="" class="pwd"></div>
					<div>
						<div class="left">自动登录</div><div class="right"><a href="#">忘记密码</a></div>
					</div>
					<div class="form_login" @click="login_but()"><button>登录</button></div>
					
				</div>
			</div>
			<div class="bot" @click="lis()"><其他注册方式</div>
		</div>
	</div>
</template>
<script>
import {login,list} from '../../api/staff.js'
export default {
	name: 'Phone',
	methods: {
		dele() {
			// console.log(this.$parent.showLoginView)
			this.$emit('cancel')
		},
		login_but() {
			let num = document.querySelector('.num').value;
			let pwd = document.querySelector('.pwd').value;
			let that = this
			login['phone'](num,pwd).then((res) => {
				that.acceptAccount(res.account)
				// that.setUid(res.account.id)
				that = null
			})
		},
		acceptAccount(account) {
			// let acc = account
			this.$emit('getUser',account)
			this.setUid(account.id)
			this.$emit('cancel')
		},
		setUid(uid) {
			this.$store.commit('setUid',uid)
			this.$store.commit('userLogin')		
		},
		lis() {
			list['list']().then((res) => {
				console.log(res)
			})
		}
	}
}	
</script>
<style lang='scss' scoped>
.wrap{
	position: relative;
	min-width: 530px;
	min-height: 280px;
}
.top{
	height: 38px;
	width: 100%;
	background-color: #000;
	line-height: 38px;
	color: #fff;
	border-radius: 5px 5px 0 0;
	.dele{
		float: right;
		margin-right: 20px;
		cursor: pointer;
	}
}
.cont{
	font-size: 14px;
	.cont_form{
		width: 220px;
		margin: 30px auto 0;
		text-align: center;
		div{
			height: 28px;
			margin-bottom: 10px;
			line-height: 28px;
			.num, .pwd{
				width: 100%;
				height: 100%;
				padding: 0;
			}
			.left{
				float: left;
			}
			.right{
				float: right;
				a{
					text-decoration: none;
				}
			}
		}
		.form_login{		
			height: 30px;			
			button{
				width: 100%;
				height: 30px;
				border: none;
			}
		}
	}
}
.bot{
	position: absolute;
	bottom: 0;
	height: 40px;
	width: 100%;
	padding: 5px 0;
	line-height: 30px;
}
</style>