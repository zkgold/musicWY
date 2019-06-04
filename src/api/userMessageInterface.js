// 1540527541
import request from '../util/request.js'
//获取用户信息 歌单 收藏 mv dj数量 (我的主页的信息)
// 可以得到用户的avatarUrl nickname
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
//更新用户信息

//获取用户歌单
export const playlist = (uid) => {
	return request({
		url: '/user/playlist',
		params: {
			uid: uid
		}
	})
}
//获取用户收藏歌手列表
export const artistSublist = () => {
	return request({
		url: '/artist/sublist'
	})
}
//获取用户收藏mv列表
export const mvSublist = () => {
	return request({
		url: '/mv/sublist'
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
//新建歌单
export const playlistCreate = (name) => {
	return request({
		url: '/playlist/create',
		params: {
			name: name
		}
	})
}
// 收藏取消歌单
// 对歌单添加或删除歌曲



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

//转发用户动态
//删除用户动态
// 获取动态评论
// 关注取消关注用户
// 获取用户播放记录
// 获取热门话题

// 获取动态消息 朋友页面的初始信息
export const eventMessage = (pagesize=20,lasttime=0) => {
	return request({
		url: '/event',
		params: {
			pagesize: pagesize,
			lasttime: lasttime
		}
	})
}
