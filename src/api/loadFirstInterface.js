import request from '../util/request.js'


// 歌单页面从此开始
//获取全部歌单分类 用于 discover songLists 的 选择
export const catlistPlaylist = () => {
	return request({
		url: '/playlist/catlist',
	})
}
//获取歌单页面的初始歌单
export const topPlaylist = () => {
	return request({
		url: '/top/playlist'
	})
}
// 获取热门歌单分类 华语 流行....
export const hotPlaylist = () => {
	return request({
		url: '/playlist/hot',
	})
}
// 获取cat歌单
//这是歌单页面下的获取方式
export const topPlaylistCat = (cat="全部",limit=10,order="hot") => {
	return request({
		url: '/top/playlist',
		params: {
			limit: 10,
			order: order,
			cat: cat,
			limit: limit
		}
	})
}
// before取上一页最后一个歌单的updateTime获取下一页
export const highquality = (cat,limit=20,before=0) => {
	return request({
		url: '/top/playlist/highquality',
		params: {
			cat: cat
		}
	})
}
// 获取歌单详情
export const playlistDetail = (id,s=0) => {
	return request({
		url: '/playlist/detail',
		params: {
			id: id
		}
	})
}
// 歌单页面从此结束



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



//首页banner
export const banner = () => {
	return request({
		url: '/banner'
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
		url: '/toplist',
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
//获取歌词
export const lyric = (id) => {
	return request({
		url: '/lyric',
		params: {
			id : id
		}
	})
}
//获取音乐url
export const musicUrl = (id) => {
	return request({
		url: '/song/url',
		params: {
			id: id
		}
	})
}


//首页歌手获取
export const artistTopList = () => {
	return request({
		url: '/toplist/artist',
	})
}

// 歌手分类列表
// 入驻歌手 5001 华语男歌手 1001 华语女歌手 1002
// 华语组合/乐队 1003 欧美男歌手 2001
// 欧美女歌手 2002 欧美组合/乐队 2003
// 日本男歌手 6001 日本女歌手 6002
// 日本组合/乐队 6003 韩国男歌手 7001
// 韩国女歌手 7002 韩国组合/乐队 7003
// 其他男歌手 4001 其他女歌手 4002 其他组合/乐队 4003
export const artistList = (cat,limit=30,offset=0) => {
	return request({
		url: '/artist/list',
		params: {
			cat: cat
		}
	})
}
// 收藏取消歌手
export const artistSub = (artistId,t) => {
	return request({
		url: '/artist/sub',
		params: {
			artistId: artistId,
			t: t
		}
	})
}
//收藏视频
// 收藏mv



//首页电台节目获取
export const recommendDj = () => {
	return request({
		url: '/dj/recommend'
	})
}