import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import store from '../store/index.js'
const router = new Router({
	routes: [
	{
		path: '/',
		name: 'index',
		component: () => import('../views/index.vue'),
		children: [{
			path: '',
			alias: 'discoverMu',
			name: 'discoverMu',
			component: () => import('../views/discoverMu/index.vue'),
			children: [{
				path: '',
				alias: 'command',
				component: () => import('../views/discoverMu/command.vue')
			},{
				path: 'rank',
				component: () => import('../views/discoverMu/rank')
			},{
				path: 'songSheet',
				component: () => import('../views/discoverMu/songSheet')
			},{
				path: 'songer',
				component: () => import('../views/discoverMu/songer')
			}]
		},{
			path: 'myMu',
			name: 'myMu',
			component: () => import('../views/myMu/index.vue'),
			beforeEnter:(to,from,next) => {
				// store.state.login ? next() : next('/notLogin')
				next()
			}
		},{
			path: 'notLogin',
			component: () => import('../views/myMu/not.vue')
		},{
			path: 'friendsMu',
			name: 'friendsMu',
			component: () => import('../views/friendsMu/index.vue'),
			beforeEnter:(to,from,next) => {
				// store.state.login ? next() : next('/notLogin')
				next()
			}
		},{
			path: 'shopping',
			name: 'shopping',
			// component: () => import('../views/myMu/index.vue'),
			beforeEnter:(to, from, next) => {
				window.open('https://music.163.com/store/product','_blank')
				next(false)
			}
		},{
			path: 'musical',
			name: 'musical',
			// component: () => import('../views/myMu/index.vue'),
			beforeEnter:(to, from, next) => {
				window.open('https://music.163.com/nmusician/web/index#/','_blank')
				next(from.path)
			}
		},{
			path: 'download',
			name: 'download',
			component: () => import('../views/downloadPage.vue')
		},{
			path: 'user',
			name: 'user',
			component: () => import('../views/user/index.vue'),
			children: [{
				path: '0',
				component: () => import('../views/user/page.vue')
			},{
				path: '1',
				component: () => import('../views/user/message.vue')
			},{
				path: '2',
				component: () => import('../views/user/level.vue')
			},{
				path: '3',
				component: () => import('../views/user/member.vue')
			},{
				path: '4',
				component: () => import('../views/user/setting.vue')
			},{
				path: '5',
				component: () => import('../views/user/authentication.vue')
			},{
				path: '6',
				component: () => import('../views/user/quit.vue')
			}]
		}]
	},{
		path: '/WV',
		component: () => import('../components/loginIn/WeiView.vue')
	},{
		path: '/QV',
		component: () => import('../components/loginIn/QQView.vue')
	},{
		path: '*',
		name: 'error',
		component: () => import('../views/error.vue')
	}]
})
// router.beforeEach((to,from,next) => {
// 	to.name == 'musical' ? window.open('https://music.163.com/store/product','_blank') : null
// 	next()
// })
export default router