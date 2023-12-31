import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    https: true,
    port: 6363
  },
  plugins: [react(), splitVendorChunkPlugin(), mkcert()],
})
