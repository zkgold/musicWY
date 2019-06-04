import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		uid: '?',
		login: false,
		barAtHeader: [true,false,false,false,false,false],
		musicUrl: "",
	},
	mutations: {
		setUid(state,uid) {
			state.uid = uid
		},
		changeBarAtHeader(state,id) {
			state.barAtHeader = state.barAtHeader.map((ele,i) => i == id)
		},
		userLogin(state) {
			state.login = true
		},
		userOut(state) {
			state.login = false
		},
		setMusicUrl(state, url) {
			state.musicUrl = url
		},
	},
	action: {
	}
})









