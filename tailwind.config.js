/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'media560': '560px',
        'media1200':'1200px',
      }
    },
  },
  plugins: [],
}

