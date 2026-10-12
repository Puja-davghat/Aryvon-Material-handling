/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#042c5c',
          deep: '#021a38',
          orange: '#fc6c04',
          orangeHover: '#e25f00',
          blueAccent: '#0a4a94',
          lightBlue: '#eef4fc',
          iceBlue: '#cfe0fa',
          paleOrange: '#ffb27a',
          slate: '#44546a',
          darkGray: '#1e293b'
        }
      },
      fontFamily: {
        sans: ['Inter', '"Segoe UI"', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif']
      },
      animation: {
        'pan-slow': 'pan 25s linear infinite',
        'shine': 'shine 3s linear infinite',
        'spin-slow': 'spin 50s linear infinite'
      },
      keyframes: {
        pan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' }
        },
        shine: {
          '0%': { backgroundPosition: '150% 0' },
          '100%': { backgroundPosition: '-100% 0' }
        }
      }
    },
  },
  plugins: [],
}
