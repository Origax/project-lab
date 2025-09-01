import { createRouter, createWebHistory } from 'vue-router'
import LayoutDefault from '@/layouts/LayoutDefault.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '',
			component: LayoutDefault,
			children: [
				{
					path: '',
					name: 'home',
					component: HomeView,
				},
			],
		},
	],
})

export default router
