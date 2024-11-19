/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna untuk teks dan background
        text: {
          primary: '#374151', // for contents | gray-700
        },

        title: {
          head: '#1f2937', // Judul besar | gray-800
          sub: '#4b5563', // Subjudul | gray-600
        },
        
        link: {
          primary: '#3b82f6', // text-blue-500
          hover: '#2563eb' // hover:text-blue-600
        },

        bg: {
          primary: '#ffffff', // bg primary | white
          card: '#f3f4f6', // bg cards | gray-100
          footer: '#e5e7eb' // bg footer | gray-200
        },
      },
    },
  },
  plugins: [],
}