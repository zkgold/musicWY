import request from '../util/request.js'

export const login = {
	// 电话登录
	phone: (phone,pwd) => {
		console.log(phone,pwd)
		return request({
			url: '/login/cellphone',
			params: {
				phone: 17826150117,
				password: 'chen85448406'
			}
		})
	},
	status: () => {
		return request({
			url: '/login/status',
		})
	},
	logout: () => {
		return request({
			url: '/logout',
		})
	}
}
export const register = {
	sentCaptcha: (phone) => {
		return request({
			url: '/captcha',
			params: {
				phone: phone
			}
		})
	}
}

export const captch = {
	sent: (phone) => {
		return request({
			url: '/captch/sent/?'+phone,
		})
	},
	verify: (phone,captch) => {
		return request({
			url: '/captch/verify',
			params: {
				phone: phone,
				captcha: captch
			}
		})
	}
}

export const list = {
	list: (uid) => {
		return request({
			url: '/user/playlist',
			params: {
				uid: uid
			}
		})
	}
}