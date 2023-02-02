import { createApp, onMounted } from "vue";
import { createVuetify, useLocale } from "vuetify";
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
    locale?: string;
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
      const { current } = useLocale();

      onMounted(() => {
        current.value = options.locale || "zhHans";
      });

      return { globals, changeLocale: (locale) => (current.value = locale) };
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

  console.log(app);

  return app;
}

export default {
  install,
  show,
  locales,
};
