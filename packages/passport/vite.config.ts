import { defineConfig } from "vite";
import { resolve } from "path";
import vuetify from "vite-plugin-vuetify";
import jsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  build: {
    sourcemap: true,
    // minify: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MixinPassport",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
          MVM: "MVM",
        },
      },
    },
  },
  plugins: [jsx(), vuetify({ styles: { configFile: "./src/settings.scss" } })],
});
