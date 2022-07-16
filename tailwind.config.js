/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'blueish-green': '#16c0b0',
        'yellowish-green': '#84cf6a',
        'light-gray': '#d8d8d8',
        'dark': '#39495c'
      }
    },
  },
  plugins: [],
}
