import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from "path"

export default defineConfig({
    resolve: {
        alias: [
          {
            find: /^m-ui$/,
            replacement: join(__dirname, "../packages", "m-ui", "index.ts"),
          },
        ],
      },
    plugins: [vue()],
})