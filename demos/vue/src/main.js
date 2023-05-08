import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import UIkit from "@foxone/uikit";
import { usePresets } from "@foxone/uikit/presets";
import Passport from "@foxone/mixin-passport";
import Talkee from "@foxone/talkee";

import "@foxone/talkee/dist/style.css";

const app = createApp(App);

const vuetify = createVuetify(
  usePresets({
    locale: {
      messages: { ...Talkee.locales },
    },
  })
);

app.use(vuetify);
app.use(UIkit);
app.use(Passport);
app.use(Talkee);

app.mount("#app");
