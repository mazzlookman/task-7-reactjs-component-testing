/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },    
    extend: {
      colors: {
        primary: {
          light: '#4f46e5', // Warna utama terang
          DEFAULT: '#3b82f6', // Warna utama default
          dark: '#1e40af', // Warna utama gelap
        },
        secondary: {
          light: '#fbbf24', // Warna sekunder terang
          DEFAULT: '#f59e0b', // Warna sekunder default
          dark: '#b45309', // Warna sekunder gelap
        },
        accent: {
          light: '#10b981', // Warna aksen terang
          DEFAULT: '#059669', // Warna aksen default
          dark: '#047857', // Warna aksen gelap
        },
        neutral: {
          light: '#f3f4f6', // Warna netral terang
          DEFAULT: '#9ca3af', // Warna netral default
          dark: '#4b5563', // Warna netral gelap
        },
        // // Warna untuk teks dan background
        // text: {
        //   primary: '#374151', // for contents | gray-700
        // },

        // title: {
        //   head: '#1f2937', // Judul besar | gray-800
        //   sub: '#4b5563', // Subjudul | gray-600
        // },
        
        // link: {
        //   primary: '#3b82f6', // text-blue-500
        //   hover: '#2563eb' // hover:text-blue-600
        // },

        // bg: {
        //   primary: '#ffffff', // bg primary | white
        //   card: '#f3f4f6', // bg cards | gray-100
        //   footer: '#e5e7eb' // bg footer | gray-200
        // },
      },
    },
  },
  plugins: [],
}