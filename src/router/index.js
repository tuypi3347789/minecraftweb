import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/index.vue';

Vue.use(VueRouter);

const routes = [
    {
			path: '/',
			redirect: '/Home',
    },
    {
			path: '*',
			redirect: '/',
		},
		{
			path: '/Home',
			name: 'Home',
			component: Home,
		},
		{
			path: '/Login',
			name: 'login',
			component: () => import('../views/Home/Page/loginPage/index.vue'), 
		}
];

const router = new VueRouter({
    routes,
});

export default router;