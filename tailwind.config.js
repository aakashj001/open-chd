/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    backgroundImage: {
      'waves': "url('../imgs/bg.svg')",
    },
  },
  plugins: [],
}
