import request from '../util/request.js'

//歌曲
export const music = (id,limit=20,offset=0) => {
	return request({
		url: '/comment/music',
		params: {
			id: id,
			limit: limit,
			offset: offset
		}
	})
}
//歌单
export const playlist = (id,limit=20,offset=0) => {
	return request({
		url: '/comment/playlist',
		params: {
			id: id,
			limit: limit,
			offset: offset
		}
	})
}
//专辑
export const album = (id,limit=20,offset=0) => {
	return request({
		url: '/comment/album',
		params: {
			id: id,
			limit: limit,
			offset: offset
		}
	})
}  

//mv
export const mv = (id,limit=20,offset=0) => {
	return request({
		url: '/comment/mv',
		params: {
			id: id,
			limit: limit,
			offset: offset
		}
	})
}  

//dj
export const dj = (id,limit=20,offset=0) => {
	return request({
		url: '/comment/dj',
		params: {
			id: id,
			limit: limit,
			offset: offset
		}
	})
}  

//视频
export const video = (id,limit=20,offset=0) => {
	return request({
		url: '/comment/video',
		params: {
			id: id,
			limit: limit,
			offset: offset
		}
	})
}  
//动态
export const event = (threarId) => {
	return request({
		url: '/comment/event',
		params: {
			threarId: threadId,
		}
	})
}  

//热门评论
// 0: 歌曲
// 1: mv
// 2: 歌单
// 3: 专辑
// 4: 电台
// 5: 视频
export const hot = (id,type) => {
	return request({
		url: '/comment/hot',
		params: {
			id: id,
			type: type
		}
	})
}  

//点赞
// 需要评论的cid 资源id t=1点赞 t=0取消 type
// 0: 歌曲1: mv2: 歌单3: 专辑4: 电台5: 视频6: 动态
// 动态评论需要传入threadId
export const like = (id,cid,t,type) => {
	return request({
		url: '/comment/like',
		params: {
			id: id,
			cid: cid,
			type: type,
			t: t
		}
	})
}  

//发送删除评论
// 参数 t type 资源id content
// 动态评论需要传入threadId
// export const like = (id,t,type,content) => {
// 	return request({
// 		url: '/comment/like',
// 		params: {
// 			id: id,
// 			type: type,
// 			t: t,
// 			content: content
// 		}
// 	})
// }  