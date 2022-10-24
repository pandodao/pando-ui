import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import sass from "rollup-plugin-sass";
import scss from "rollup-plugin-scss";

const extensions = [".ts", ".tsx", ".js", ".jsx", ".es6", ".es", ".mjs"];

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "dist/index.js",
      name: "UIKit",
      format: "umd",
      globals: { vue: "Vue", Vuetify: "Vuetify" },
      sourcemap: true,
    },
  ],
  external: ["vue", /^vuetify/, "@foxone/icons"],
  plugins: [
    nodeResolve({ extensions }),
    babel({
      extensions,
      babelHelpers: "inline",
    }),
    sass({
      output: "dist/index.min.css",
      outputStyle: "compressed",
    }),
    alias({
      entries: [{ find: /^(.+)\.css/, replacement: "$1.sass" }],
    }),
  ],
};
