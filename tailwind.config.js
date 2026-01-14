/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#C4C788',
          DEFAULT: '#767627',
          dark: '#4A5B28',
        },
        accent: {
          rust: '#963012',
          orange: '#F08915',
          yellow: '#FBCF5B',
          brown: '#AA4B0B',
        },
        neutral: {
          cream: '#F1E8CE',
        },
      },
      fontFamily: {
        sans: ['Tenor Sans', 'sans-serif'],
        body: ['Biriyani', 'sans-serif'],
        poster: ['Archivo Black', 'sans-serif'],
      },
      
      // ✅ Animation Config
      keyframes: {
        whatsappBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-15px)' }, // Increased slightly for visibility
          '50%': { transform: 'translateY(0)' },
          '70%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'whatsapp-bounce': 'whatsappBounce 1s ease-in-out', // Increased duration slightly
      },
    },
  },
  plugins: [],
};