
import { resolve } from 'path'
import { defineConfig } from 'vite'
>>>>>>> 61f24d55834623d1cae4db509836f414a9aca273

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