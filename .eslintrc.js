module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.eslint.json",
    extraFileExtensions: [".vue"],
  },
  extends: ["plugin:vue/vue3-recommended"],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "vue/require-default-prop": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-html": "off",
  },
};
