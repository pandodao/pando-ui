const jsx = require("@vitejs/plugin-vue-jsx");
const vuetify = require("vite-plugin-vuetify");
const NodeGlobalsPolyfillPlugin = require("@esbuild-plugins/node-globals-polyfill");
const NodeModulesPolyfillPlugin = require("@esbuild-plugins/node-modules-polyfill");
const rollupNodePolyFill = require("rollup-plugin-node-polyfills");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../../icons/stories/**/*.stories.mdx",
    "../../passport/src/**/*.stories.mdx",

    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../icons/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../../passport/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    if (configType === "PRODUCTION") {
      config.base = "/uikit-next/";
    }

    config.plugins = [
      ...config.plugins.filter((plugin) => {
        return !(
          Array.isArray(plugin) && plugin[0].name === "vite:react-babel"
        );
      }),
      jsx({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      }),
      vuetify({
        styles: { configFile: "./src/styles/_settings.scss" },
      }),
    ];

    config.optimizeDeps.esbuildOptions = {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin.default({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin.default(),
      ],
    };

    config.build = {
      rollupOptions: {
        plugins: [rollupNodePolyFill()],
      },
    };

    return config;
  },
};
