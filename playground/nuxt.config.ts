import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'pathe'
import contentModule from '..' // eslint-disable-line

export default defineNuxtConfig({
  rootDir: __dirname,
  buildModules: [contentModule],
  components: {
    dirs: [
      {
        path: resolve(__dirname, './components'),
        global: true
      }
    ]
  },
  content: {
    sources: [
      {
        name: 'translation',
        prefix: '/fa',
        driver: 'fs',
        driverOptions: {
          base: resolve(__dirname, 'content-fa')
        }
      }
    ],
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue']
    }
  }
})
