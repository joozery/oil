import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ชื่อโฟลเดอร์ที่เก็บผลลัพธ์การ Build
  },
});