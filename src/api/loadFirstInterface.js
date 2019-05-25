import request from '../util/request.js'

export const topPlaylist = (order="new",tag="华语") => {
	return request({
		url: '/top/playlist',
		params: {
			limit: 10,
			order: order,
			tag: cat
		}
	})
}

//获取全部歌单分类 用于 discover songLists 的 选择
export const catlistPlaylist = () => {
	return request({
		url: '/playlist/catlist',
	})
}
// 获取热门歌单分类 华语 流行....
export const hotPlaylist = () => {
	return request({
		url: '/playlist/hot',
	})
}

//获取推荐系列
// 推荐歌单 discover command
export const personalized = () => {
	return request({
		url: '/personalized',
	})
}

// 推荐电台
export const djPersonalized = () => {
	return request({
		url: '/personalized/djprogram',
	})
}

// 推荐节目
export const recommendPersonalized = () => {
	return request({
		url: '/personalized/recommend',
	})
}





// 首页新碟上架
export const newestAlbum = () => {
	return request({
		
		url: '/album/newest',
	})
}

// 所有榜单 toplist

//某一榜单
// "0": 云音乐新歌榜,
// "1": 云音乐热歌榜,
// "2":网易原创歌曲榜,
// "3": 云音乐飙升榜,
// "4": 云音乐电音榜,
// "5": UK排行榜周榜,
// "6" 美国Billboard周榜
// "7": KTV嗨榜,
// "8": iTunes榜,
// "9": Hit FM Top榜,
// "10": 日本Oricon周榜
// "11": 韩国Melon排行榜周榜,
// "12" 韩国Mnet排行榜周榜,
// "13": 韩国Melon原声周榜,
// "14": 中国TOP排行榜(港台榜),
// "15": 中国TOP排行榜(内地榜)
// "16": 香港电台中文歌曲龙虎榜,
// "17": 华语金曲榜,
// "18": 中国嘻哈榜,
// "19": 法国 NRJ EuroHot 30周榜,
// "20": 台湾Hito排行榜,
// "21": Beatport全球电子舞曲榜,
// "22": 云音乐ACG音乐榜,
// "23": 云音乐嘻哈榜
// 首页调用 0 2 3 区top10
export const idxTopList = (key) => {
	return request({
		url: '/top/list',
		params: {
			idx: key
		}
	})
}

// 全部榜单 rank 首先调用 3
export const toplist = () => {
	return request({
		url: 'toplist',
	})
}


// 获取音乐信息
export const getSongDetails = (ids) => {
	return request({
		url: '/song/detail',
		params: {
			ids : ids
		}
	})
}