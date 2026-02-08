import { defineConfig } from 'vite'
import type { WatcherOptions } from 'rollup'
import solidPlugin from 'vite-plugin-solid'

import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(env => {
    let watch: WatcherOptions | null = null
    if (env.mode == 'development') {
        watch = {
            clearScreen: true,
        }
    }

    return {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern',
                },
            },
        },
        plugins: [tsconfigPaths(), solidPlugin({ hot: false, dev: true })],
        server: {
            port: 8008,
        },
        build: {
            manifest: true,
            target: 'esnext',
            outDir: 'dist',
            assetsInlineLimit: 0,
            watch,
            copyPublicDir: false,
            sourcemap: true,
            assetsDir: 'dist-assets',
        },
    }
})
