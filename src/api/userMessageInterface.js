import request from '../util/request.js'
//获取用户信息 歌单 收藏 mv dj数量
export const subcount = () => {
	return request({
		url: '/user/subcount',
	})
}
// 获取用户详情
export const detail = (uid) => {
	return request({
		url: '/login/detail',
		params: {
			uid: uid
		}
	})
}
//获取用户歌单
export const playlist = (uid) => {
	return request({
		url: '/user/playlist',
		params: {
			uid: uid
		}
	})
}
//获取歌单详情
export const playlistDetail = (id) => {
	return request({
		url: '/playlist/detail',
		params: {
			id: id
		}
	})
}
//获取用户电台
export const dj = (uid) => {
	return request({
		url: '/user/dj',
		params: {
			uid: uid
		}
	})
}
//获取用户关注列表 参数 返回数量  偏移
export const follows = (uid,limit = 30,offset = 0) => {
	return request({
		url: '/user/follows',
		params: {
			uid: uid,
			limit: limit,
			offset: 0
		}
	})
}
//获取用户粉丝列表 参数 数量 偏移
export const followeds = (uid,limit=30,offset=0) => {
	return request({
		url: '/user/followeds',
		params: {
			uid: uid,
			limit: limit,
			offset: 0
		}
	})
}
// 获取用户动态
export const event = (uid) => {
	return request({
		url: '/user/event',
		params: {
			uid: uid
		}
	})
}

