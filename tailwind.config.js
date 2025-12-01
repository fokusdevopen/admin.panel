/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E1D3CC',
          100: '#E1D4C1',
          200: '#D7A9A8',
          300: '#58423F',
          400: '#7E102C',
          500: '#7E102C',
          600: '#7E102C',
          700: '#58423F',
          800: '#58423F',
          900: '#58423F',
        },
        secondary: {
          50: '#E1D4C1',
          100: '#E1D4C1',
          200: '#E1D4C1',
          300: '#E1D4C1',
          400: '#E1D4C1',
          500: '#E1D4C1',
          600: '#E1D4C1',
          700: '#E1D4C1',
          800: '#E1D4C1',
          900: '#E1D4C1',
        },
        accent: {
          50: '#D7A9A8',
          100: '#D7A9A8',
          200: '#D7A9A8',
          300: '#D7A9A8',
          400: '#D7A9A8',
          500: '#D7A9A8',
          600: '#D7A9A8',
          700: '#D7A9A8',
          800: '#D7A9A8',
          900: '#D7A9A8',
        },
      },
    },
  },
  plugins: [],
}




