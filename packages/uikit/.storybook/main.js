module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
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
  async viteFinal(config) {
    config.plugins = [
      ...config.plugins.filter((plugin) => {
        return !(
          Array.isArray(plugin) && plugin[0].name === "vite:react-babel"
        );
      }),
      require("@vitejs/plugin-vue-jsx")({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      }),
      require("vite-plugin-vuetify")({
        styles: { configFile: "./src/styles/settings.scss" },
      }),
    ];
    return config;
  },
};
