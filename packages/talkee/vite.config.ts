import { defineConfig } from "vite";
import { resolve } from "path";
import jsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  build: {
    sourcemap: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Talkee",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue", "pinia"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    vue(),
    jsx(),
    vuetify({ styles: { configFile: "./src/settings.scss" } }),
  ],
});
