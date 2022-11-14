/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
              "./index.html",
              "./main.js",
              "./public/htmlPages/createCharacter.html",
              "./public/htmlPages/singleCharacter.html",
              "./public/htmlPages/modifyCharacter.html",
              "./public/htmlPages/modifyCharacter.html",
              "./public/js/apiRequests.js",
              "./public/js/constructorDOM.js",
              "./public/js/createCharacter.js",
              "./public/js/modifyCharacter.js",
              "./public/js/singleCharacter.js"
            ],
  theme: {
    extend: {   
      backgroundColor: theme => ({
      'primary': '#bcb8b1',
            })},
      fontFamily: {
        'marvel': ["Marvel", "sans-serif"] 
      },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
