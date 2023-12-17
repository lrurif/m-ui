import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    build: {
        lib: {
            entry: "./index.ts",
            fileName: "m-ui",
            name: "MUi"
        },
        minify: false,
        rollupOptions: {
            external: [
                //   /@m-ui.*/, 
                'vue'
            ],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue(),
    ]
})