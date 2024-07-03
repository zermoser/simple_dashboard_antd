import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/simple_dashboard_antd/',
  plugins: [react()],
  server: {
    port: 3003
  }
})
