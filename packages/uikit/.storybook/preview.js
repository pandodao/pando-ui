import { app } from "@storybook/vue3";
import { defineComponent } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { themes } from "@storybook/theming";
import ficons from "./ficons";

import "vuetify/styles";
import "../src/styles/index.scss";

import { usePresets } from "../src/presets";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light,
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      name: true,
      dynamicTitle: true,
    },
  },
};

const options = usePresets({
  components,
  directives,
  icons: { aliases: { ...ficons } },
});

const vuetify = createVuetify(options);

app.use(vuetify);

export const decorators = [
  (story, context) => {
    const WrappedComponent = story(context);

    return defineComponent({
      name: "StoryBookWrap",
      components: { WrappedComponent },
      template: `
        <v-app :theme="theme">
          <v-main>
            <v-container fluid>
              <wrapped-component />
            </v-container>
          </v-main>
        </v-app>
      `,
      setup() {
        const theme = context.globals.theme;

        return { theme, context };
      },
    });
  },
];
