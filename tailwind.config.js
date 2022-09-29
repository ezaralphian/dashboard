/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#ff9700',
        blackText: '#022e4f',
      },
      maxWidth: {
        cardDocument: '280px'
      }
    },
  },
  plugins: [],
}
