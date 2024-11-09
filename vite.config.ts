import { defineConfig } from "vite";
export default defineConfig({
  build: {
    sourcemap: true,
    target: "es2022",
    minify: "esbuild",
    rollupOptions: {
      external: [/@layer-lib\/.+/, /@layer-ui\/.+/],
    },
  },
});
