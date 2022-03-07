import {defineConfig} from 'vite'
import preact from '@preact/preset-vite'

const packageJSON = require('./package.json')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
  ],
  publicDir: 'public',
  build: {
    outDir: `../../dist/${packageJSON.name}`,
    emptyOutDir: true,
    lib: {
      entry: 'src/main.tsx',
      name: packageJSON.name,
      formats: ['umd'],
      fileName: () => 'index.js'
    }
  }
})
