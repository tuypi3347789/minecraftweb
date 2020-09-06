import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	//存放資料，相當於data
	state: {
    login: {
      token: localStorage.getItem('token'),
      name: localStorage.getItem('name'),
    },
	},
	//非同步
	actions: {
	},
	//相當於methods，同步
	mutations: {
    loginFun(state, data) {
      state.login.token = data.playerAccount;
      state.login.name = data.playerName;
    },
	},
	// 用於篩選，需跟computed做使用
	getters: {
	},
});
export default store;