import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.IP_GEOLOCATION_KEY': JSON.stringify(env.IP_GEOLOCATION_KEY)
    },
    base: '/ip-address-tracker/',
    plugins: [react()],
  }
})