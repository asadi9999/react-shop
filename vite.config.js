import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 16000000000000,
  },
  
  "scripts": {
    "preview": "vite preview --port 8080"
  },
    base:''
  
})
