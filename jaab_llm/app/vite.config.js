// Copyright IBM Corp. 2020, 2024
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Suppress Sass deprecation warnings
      },
    },
  },
})
