module.exports = {
  assumptions: {
    noDocumentAll: true,
  },
  ignore: [/\.d\.ts$/],
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@vue/babel-plugin-jsx", { optimize: false, enableObjectSlots: false }],
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
  env: {
    lib: {
      ignore: ["**/__tests__"],
      plugins: [["babel-plugin-add-import-extension", { extension: "mjs" }]],
    },
  },
};
