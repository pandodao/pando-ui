const jsx = require("@vitejs/plugin-vue-jsx");
const vuetify = require("vite-plugin-vuetify");

module.exports = {
  stories: [
    "../packages/uikit/src/**/*.stories.@(ts|tsx|mdx)",
    "../packages/talkee/**/*.stories.@(ts|tsx|mdx)",
    "../packages/icons/stories/**/*.stories.@(ts|tsx|mdx)",
    "../packages/passport/stories/**/*.stories.@(ts|tsx|mdx)",
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
        styles: { configFile: "packages/uikit/src/styles/_settings.scss" },
      }),
    ];

    return config;
  },
};
