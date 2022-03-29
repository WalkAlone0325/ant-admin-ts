import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: resolve(__dirname, './src/auto-import.d.ts'),
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      dirs: ['src/components'],
      dts: resolve(__dirname, './src/components.d.ts'),
      resolvers: [AntDesignVueResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // additionalData: ``
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  }
})
