import { defineConfig } from "vite";
import { resolve } from "path";
import jsx from "@vitejs/plugin-vue-jsx";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  build: {
    sourcemap: true,
    // minify: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "UIKit",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    jsx(),
    vuetify({ styles: { configFile: "./src/styles/_settings.scss" } }),
  ],
});
