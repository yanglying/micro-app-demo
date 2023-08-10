import { createApp } from 'vue'
import microApp from '@micro-zoe/micro-app'

import './style.css'

// import './assets/global.less'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import router from './router/index'
import pinia from './store/index'
const app = createApp(App)

app.use(router)
app.use(pinia)
microApp.start({
	plugins: {
		modules: {
			// appName即应用的name值
			vue3vite: [
				{
					loader(code) {
						if (process.env.NODE_ENV === 'development') {
							// 这里 basename 需要和子应用vite.config.js中base的配置保持一致
							code = code.replace(/(from|import)(\s*['"])(\/basename\/)/g, (all) => {
								return all.replace('/basename/', 'http://localhost:8052/basename/')
							})
						}

						return code
					},
				},
			],
		},
	},
})
app.mount('#app')
// index.js
