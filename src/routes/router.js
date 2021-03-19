import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import America from '../views/America'
import Asia from '../views/Asia'
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Index },
		{ path: '/Photo/america', component: America },
		{ path: '/Photo/asia', component: Asia },
	],
})

export default router
