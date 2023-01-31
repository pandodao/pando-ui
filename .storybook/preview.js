import { themes } from "@storybook/theming";
import { app } from "@storybook/vue3";
import { defineComponent, watchEffect } from "vue";
import { createVuetify, useTheme } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import UIKit from "@foxone/uikit";
import Passport from "@foxone/mixin-passport";
import Talkee from "@foxone/talkee";
import { usePresets } from "@foxone/uikit/presets";
import icons from "./icons";

import "vuetify/styles";

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

const vuetify = createVuetify(
  usePresets({
    components,
    directives,
    icons: { aliases: icons },
  })
);

app.use(vuetify);
app.use(UIKit, {
  auth: {
    clientId: "61504be8-a9da-477d-9e18-448ac3780919",
    scope: "PROFILE:READ",
  },
});
app.use(Passport);
app.use(Talkee);

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
