/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./public/htmlPages/createCharacter.html", "./public/htmlPages/singleCharacter.html"],
  theme: {
    extend: {   
      backgroundColor: theme => ({
      'primary': '#bcb8b1',
            })},
      fontFamily: {
        'marvel': ["Marvel", "sans-serif"] 
      },
  },
  plugins: [],
}
