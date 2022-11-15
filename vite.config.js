// const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        new: "./public/htmlPages/createCharacter.html",
        view: "./public/htmlPages/singleCharacter.html",
        edit: "./public/htmlPages/modifyCharacter.html",
      },
    },
    target: 'esnext'
  },
});