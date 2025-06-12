/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'scroll-down': 'scroll-down 2s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, -10px)' }
        },
        'scroll-down': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' },
          '100%': { transform: 'translateX(0)' }
        }
      }
    },
  },
  plugins: [],
}