import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        singleCharacter: resolve(__dirname, "public", "htmlPages", "singleCharacter.html"),
        modifyCharacter: resolve(__dirname, "public", "htmlPages", "modifyCharacter.html"),
        createCharacter: resolve(__dirname, "public", "htmlPages", "createCharacter.html")
      }
    }
  }
})