/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4f4f4',
        secondary: '#F4B840'
      },
      fontFamily: {
        Poppins: 'Poppins',
      },

    },
  },
  plugins: [],
}
