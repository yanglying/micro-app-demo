import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { writeFileSync } from 'fs'
export default defineConfig(({ command, mode, ssrBuild }) => {
	if (command === 'serve') {
		return {
			base: `${process.env.NODE_ENV === 'production' ? 'http://my-site.com' : ''}/basename/`,
			plugins: [
				vue(), // 自定义插件
				(function () {
					let basePath = ''
					return {
						name: 'vite:micro-app',
						apply: 'build',
						configResolved(config) {
							basePath = `${config.base}${config.build.assetsDir}/`
						},
						writeBundle(options, bundle) {
							for (const chunkName in bundle) {
								if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
									const chunk = bundle[chunkName]
									if (chunk.fileName && chunk.fileName.endsWith('.js')) {
										chunk.code = chunk.code.replace(
											/(from|import\()(\s*['"])(\.\.?\/)/g,
											(all, $1, $2, $3) => {
												return all.replace($3, new URL($3, basePath))
											}
										)
										const fullPath = join(options.dir, chunk.fileName)
										writeFileSync(fullPath, chunk.code)
									}
								}
							}
						},
					}
				})(),
			],
			resolve: {
				alias: {
					'@': path.resolve(__dirname, './src'),
				},
				extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
			},
			build: {
				outDir: 'build',
			},
			server: {
				host: true,
				open: true,
				port: 8052,

				headers: {
					'Access-Control-Allow-Origin': '*',
				},
			},
		}
	} else {
		return {
			// build 独有配置
		}
	}
})
