import { createApp, onMounted } from "vue";
import { createVuetify, useLocale } from "vuetify";
import { VApp } from "vuetify/components";
import { usePresets } from "@foxone/uikit/presets";
import { Auth, Toast } from "@foxone/uikit/plugins";
import { locales } from "./locales";
import Passport from "@foxone/mixin-passport";

import Talkee from "./components/Talkee.vue";

import type { VuetifyOptions } from "vuetify";
import type { PassportOptions } from "@foxone/mixin-passport/lib/types";
import type { AuthMethodGlobalOptions } from "@foxone/uikit/lib/plugins/auth";
import type { ToastGlobalOptions } from "@foxone/uikit/lib/plugins/toast";
import type { App } from "vue";

function install(app: App) {
  app.component(Talkee.name, Talkee);
}

function show(
  options: {
    showLink?: boolean;
    apiBase?: string;
    slug?: string;
    siteId?: string;
    clientId?: string;
    vuetifyOptions?: VuetifyOptions;
    container: string;
    locale?: string;
    passport?: PassportOptions;
    auth?: AuthMethodGlobalOptions;
    toast?: ToastGlobalOptions;
  } = {
    container: "body",
    auth: {
      authMethods: ["mixin", "fennec", "metamask"],
    },
  }
) {
  const app = createApp({
    components: { VApp },
    setup() {
      const globals = {
        showLink: options.showLink,
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
  app.use(Passport, options.passport);
  app.use(Auth, { container: options.container, ...options.auth });
  app.use(Toast, { container: options.container, ...options.toast });

  install(app);

  app.mount(options.container);

  return app;
}

export default {
  install,
  show,
  locales,
};