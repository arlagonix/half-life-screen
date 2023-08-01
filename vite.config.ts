import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { createHtmlPlugin } from "vite-plugin-html";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  base: "./",
  publicDir: "../public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "../build",
    emptyOutDir: true,
    assetsDir: "assets",
    target: "esnext",
  },
  server: {
    open: true,
  },
  preview: {
    open: true,
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      entry: "./index.tsx",
      template: "./index.html",
      inject: {
        data: {
          title: "index",
          injectScript: `<script src="./index.tsx"></script>`,
        },
        tags: [
          {
            injectTo: "body-prepend",
            tag: "div",
            attrs: {
              id: "tag",
            },
          },
        ],
      },
    }),
  ],
});
