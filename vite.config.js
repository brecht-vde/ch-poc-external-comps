import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: "esbuild",
    lib: {
      formats: ["es"],
      entry: "src/main.js",
      name: "sitecore content hub external component",
      fileName: "main",
    },
  },
});
