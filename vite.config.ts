import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/iOS-Style-Wheel-Picker2/', // Important for GitHub Pages to load assets correctly from subdirectories
});