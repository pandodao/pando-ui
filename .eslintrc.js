module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.eslint.json",
    extraFileExtensions: [".vue", ".mjs", ".cjs"],
  },
  extends: ["plugin:vue/vue3-recommended"],
  plugins: ["@typescript-eslint"],
};
