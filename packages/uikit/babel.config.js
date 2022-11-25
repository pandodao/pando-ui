module.exports = {
  assumptions: {
    noDocumentAll: true,
  },
  ignore: [/\.d\.ts$/, /\.stories\.ts$/],
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [["@vue/babel-plugin-jsx", { optimize: false }]],
};
