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
  },
  extends: ["plugin:vue/vue3-recommended", "@vue/standard"],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "vue/require-default-prop": "off",
  },
};
