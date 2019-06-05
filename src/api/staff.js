import request from '../util/request.js'

export const login = {
	// 电话登录
	phone: (phone,pwd) => {
		console.log(phone,pwd)
		return request({
			url: '/login/cellphone',
			params: {
				// phone: 17826150117,
				// password: 'chen85448406'
				phone: phone,
				password: pwd
			}
		})
	},
	//状态
	status: () => {
		return request({
			url: '/login/status',
		})
	},
	//登出
	logout: () => {
		return request({
			url: '/logout',
		})
	},
	//刷新
	refresh: () => {
		return request({
			url: '/login/refresh',
		})
	}
}
//注册或修改密码
export const register = (phone,password,captcha,nickname) => {
	return request({
		url: '/captcha/register',
		params: {
			phone: phone,
			password: password,
			captcha: captcha,
			nickname: nickname
		}
	})
}

//验证码
export const captch = {
	sent: (phone) => {
		return request({
			url: '/captch/sent',
			params: {
				phone: phone
			}
		})
	},
	verify: (phone,captch,ctcode=86) => {
		return request({
			url: '/captch/verify',
			params: {
				phone: phone,
				captcha: captch
			}
		})
	}
}

// export const list = {
// 	list: (uid) => {
// 		return request({
// 			url: '/user/playlist',
// 			params: {
// 				uid: uid
// 			}
// 		})
// 	}
// }