import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { VApp } from "vuetify/components";
import { usePresets } from "@foxone/uikit/presets";
import { Auth, Toast } from "@foxone/uikit/plugins";
import { locales } from "./locales";
import Passport from "@foxone/mixin-passport";

import Talkee from "./components/Talkee.vue";

import type { VuetifyOptions } from "vuetify";
import type { App } from "vue";

function install(app: App) {
  app.component(Talkee.name, Talkee);
}

function show(
  options: {
    apiBase?: string;
    slug?: string;
    siteId?: string;
    clientId?: string;
    vuetifyOptions?: VuetifyOptions;
    container?: string;
  } = {}
) {
  const app = createApp({
    components: { VApp },
    setup() {
      const globals = {
        siteId: options.siteId || "",
        slug: options.slug || "",
        apiBase: options.apiBase || "",
        clientId: options.clientId || "",
      };

      return { globals };
    },
    template: "<VApp><Talkee v-bind='globals' /></VApp>",
  });

  const vuetifyOptions =
    options.vuetifyOptions || usePresets({ locale: { messages: locales } });

  app.use(createVuetify(vuetifyOptions));
  app.use(Passport);
  app.use(Auth);
  app.use(Toast);

  install(app);

  app.mount(options.container || "body");
}

export default {
  install,
  show,
  locales,
};
