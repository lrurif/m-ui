import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './index',
      name: 'MUiUtils',
      // 产物文件名称
      fileName: 'mui-utils',
    },
    minify: false,

  },
});
