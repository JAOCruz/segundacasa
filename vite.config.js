import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        event: resolve(__dirname, 'event.html'),
        ticket: resolve(__dirname, 'ticket.html'),
        blog: resolve(__dirname, 'blog-home.html'),
        'blog-single': resolve(__dirname, 'blog-single.html'),
        category: resolve(__dirname, 'category.html'),
        elements: resolve(__dirname, 'elements.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './')
    }
  },
  optimizeDeps: {
    exclude: ['js/vendor/bootstrap.min.js']
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },

}) 