/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pColor : '#FA6500',
        secondaryTextColor: '#150B2B',
        
      },
    },
  },
  plugins: [daisyui],
}

