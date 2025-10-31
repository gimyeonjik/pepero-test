import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포 시 사용할 repository 이름
// GitHub repository 이름으로 변경해주세요
// 예: repository 이름이 'personality-test'라면 '/personality-test/'
const base = process.env.NODE_ENV === 'production' ? '/personality-test/' : '/'

export default defineConfig({
  plugins: [react()],
  base: base,
})
