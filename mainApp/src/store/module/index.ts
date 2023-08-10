import { defineStore } from 'pinia'
export const module1Store = defineStore('module1Store', {
	state: () => ({
		count: 0,
	}),
	getters: {
		double: (state: any) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++
		},
	},
})
