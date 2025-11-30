import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ КРИТИЧЕСКИ ВАЖНО: 
// Замените 'admin.panel' на ТОЧНОЕ название вашего репозитория на GitHub
// Название должно совпадать БУКВА В БУКВУ, включая регистр!
// 
// Как узнать название: https://github.com/YOUR_USERNAME/НАЗВАНИЕ_РЕПОЗИТОРИЯ
// 
// Примеры:
// - Репозиторий 'admin-panel' → base: '/admin-panel/'
// - Репозиторий 'AdminPanel' → base: '/AdminPanel/'
// - Репозиторий в корне (username.github.io) → base: '/'
const base = '/admin.panel/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
