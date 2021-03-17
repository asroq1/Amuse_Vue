import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './src/views/Index'
import Exciting from './src/views/Exciting'
import Peaceful from './src/views/Peaceful'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Index },
		{ path: '/Photo/exciting', component: Exciting },
		{ path: '/Photo/peaceful', component: Peaceful },
	],
})

export default router
