import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ command, mode, ssrBuild }) => {
	if (command === 'serve') {
		return {
			base: './', // 开发或生产环境服务的公共基础路径
			plugins: [
				vue(),
				Components({
					resolvers: [
						AntDesignVueResolver({
							importStyle: false, // css in js
						}),
					],
				}),
			],
			css: {
				preprocessorOptions: {
					less: {
						javascriptEnabled: true, // 必须开启，不然ant的样式库引入时会报错
					},
				},
			},
			resolve: {
				extensions: ['.vue', '.js', '.json', '.mjs', '.ts'],
				alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
			},
			build: {
				outDir: 'build',
			},
			server: {
				host: true,
				port: 8050,
				open: true,
				proxy: {},
			},
		}
	} else {
		return {
			// build 独有配置
		}
	}
})
