import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { VApp } from "vuetify/components";
import { usePresets } from "@foxone/uikit/presets";
import { Auth } from "@foxone/uikit/plugins";
import { locales } from "./locales";
import { useGlobals } from "./composables";
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
    template: "<VApp><Talkee /></VApp>",
  });

  const vuetifyOptions =
    options.vuetifyOptions || usePresets({ locale: { messages: locales } });

  app.use(createVuetify(vuetifyOptions));
  app.use(Passport);
  app.use(Auth);

  install(app);

  // set globals
  const globals = useGlobals();

  globals.siteId.value = options.siteId || "";
  globals.slug.value = options.slug || "";
  globals.apiBase.value = options.apiBase || "";
  globals.clientId.value = options.clientId || "";

  app.mount(options.container || "body");
}

export default {
  install,
  show,
};
