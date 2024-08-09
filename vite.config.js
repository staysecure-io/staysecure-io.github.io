import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'src', // Set the root to the src folder
  build: {
    outDir: '../dist', // Output the build files outside the src folder
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        privacyPolicy: 'src/privacypolicy/index.html'
      }
    }  
  },
  css: {
    minify: true, // Enable CSS minification
  },
  plugins: [
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'favicon.ico',
          dest: '',
        },
      ],
    }),
  ],
});