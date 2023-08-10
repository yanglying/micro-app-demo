import { createRouter, createWebHashHistory } from 'vue-router'
import page1 from './page1'
import page2 from './page2'
const router = createRouter({
	history: createWebHashHistory(),
	routes: [page1, page2],
})
export default router
