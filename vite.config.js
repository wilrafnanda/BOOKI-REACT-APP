import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    host:"0.0.0.0",
    port:"3000",
  },
  plugins: [react(),
    tailwindcss()
  ],
  
   theme: {
    extend: {
      screens: {
        'custom': '1180px', // 👈 Your custom breakpoint
      },
    },
  },

  
})
// tailwind.config.js

