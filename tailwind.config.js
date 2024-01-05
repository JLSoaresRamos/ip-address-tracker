/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/images/pattern-bg-desktop.png')",
        'mobile': "url('/images/pattern-bg-mobile.png')",
      },
      colors: {
        'very-dark-gray': 'hsl(0, 0%, 17%)',
        'dark-gray': 'hsl(0, 0%, 59%)'
      },
      fontSize: {
        input: '1.125rem'
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'] 
      },
    },
  },
  plugins: [],
}
