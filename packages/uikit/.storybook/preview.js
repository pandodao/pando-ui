import { app } from "@storybook/vue3";
import { defineComponent, watchEffect } from "vue";
import { createVuetify, useTheme } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { themes } from "@storybook/theming";
import ficons from "./ficons";

import "vuetify/styles";

import { usePresets } from "../src/presets";
import UIKit from "../src/index";

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
app.use(UIKit);

export const decorators = [
  (story, context) => {
    const WrappedComponent = story(context);

    return defineComponent({
      name: "StoryBookWrap",
      components: { WrappedComponent },
      template: `
        <v-app>
          <v-main>
            <v-container fluid>
              <wrapped-component />
            </v-container>
          </v-main>
        </v-app>
      `,
      setup() {
        watchEffect(() => {
          const theme = useTheme();

          theme.global.name.value = context.globals.theme;
        });

        return { context };
      },
    });
  },
];
