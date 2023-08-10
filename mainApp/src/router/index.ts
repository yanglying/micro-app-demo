import { createRouter, createWebHistory } from 'vue-router'
import page1 from './page1'
import page2 from './page2'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		page1,
		page2,
		{
			path: '/child1/:page*',
			name: 'child1',
			component: () => import('@/views/child1/index.vue'),
			children: [],
		},
		{
			path: '/child2/:page*',
			name: 'child2',
			component: () => import('@/views/child2/index.vue'),
			children: [],
		},
	],
})
export default router
