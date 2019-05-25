import request from '../utils/request.js'

export const cloudMusSurge = () => {
	request({/top/list?idx=3}).then((res) => {
		console.log(res)
	})
}
export const commentCloudMusSurge = () => {
	request({/comment/hot?id=186016&type=0}).then((res) => {
		console.log(res)
}