import request from '../util/request.js'
// 获取动态评论 
// 参数可由 /event user/event 获取
export const commentEvent = (threadId) => {
	return request({
		url: '/comment/event',
		params: {
			threadId : threadId
		}
	})
}

// 获取动态消息
export const event = (pagesize,lasttime=-1) => {
	return request({
		url: '/event',
		params: {
			pagesize : pagesize,
			lasttime: lasttime
		}
	})
}

//获取收藏歌手列表
export const sublist = () => {
	return request({
		url: 'artist/sublist',
	})
}