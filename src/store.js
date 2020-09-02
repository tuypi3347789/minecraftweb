import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	//存放資料，相當於data
	state: {
        web_height: 0,
	},
	//非同步
	actions: {
		addCount(Context) {
			Context.commit('addCount');
		}
	},
	//相當於methods，同步
	mutations: {
		addCount(state) {
			state.count += 1;
		},
	},
	// 用於篩選，需跟computed做使用
	getters: {
		name(state) {
			return `${state.firstName}/${state.lastName}`
		}
	},
});
export default store;