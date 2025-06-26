
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/sass/helpers/variables";`
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
