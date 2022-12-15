import { createVuetify } from "vuetify";
import { usePresets } from "@foxone/uikit/presets";
import { Auth } from "@foxone/uikit/plugins/auth";
import { Payment } from "@foxone/uikit/plugins/payment";
import { Toast } from "@foxone/uikit/plugins/toast";
import MixinAPI from "./mixin-apis";
import Fennec from "@foxone/fennec-dapp";
import createAuthAction from "./auth";
import createPaymentAction from "./payment";
import createAssetsAction from "./assets";
import createAssetAction from "./asset";
import createSyncAction from "./sync";
import { useAuth, usePayment, useToast, usePassport } from "./helper";

import "vuetify/styles";

import type { App } from "vue";
import type { VuetifyOptions } from "vuetify";
import type { AuthMethod } from "@foxone/uikit/types";
import type { AuthOptions, PaymentOptions, SyncOptions, State } from "./types";

function vuetifyInstalled(app: App) {
  return app?._context.mixins.some((x) => x.computed.$vuetify);
}

function install(
  app: App,
  options: {
    vuetifyOptions?: VuetifyOptions;
    container?: string;
    infuraId?: string;
  } = {}
) {
  const vuetifyOptions = options.vuetifyOptions || usePresets({});
  const container = options.container || "body";
  const state: State = {
    channel: "" as AuthMethod,
    fennec: new Fennec(),
    mixin: new MixinAPI(),
    mvm: null,
    token: "",
  };

  if (typeof MVM !== undefined) {
    state.mvm = new MVM({ infuraId: options.infuraId });
  }

  if (!app?._instance?.isMounted) {
    app?.mount(container);
  }

  if (!vuetifyInstalled(app)) {
    app.use(createVuetify(vuetifyOptions));
  }

  if (!useAuth(app)) {
    app.use(Auth);
  }

  if (!useToast(app)) {
    app.use(Toast);
  }

  if (!usePayment(app)) {
    app.use(Payment);
  }

  const passport = {
    auth: (options: AuthOptions) => createAuthAction(app, options, state),
    payment: (options: PaymentOptions) =>
      createPaymentAction(app, options, state),
    getAsset: (id: string) => createAssetAction(id, state),
    getAssets: () => createAssetsAction(state),
    sync: (options: SyncOptions) => createSyncAction(options, state),
  };
  const properties = app.config.globalProperties;

  properties.$passport = passport;
}

export default {
  install,
  passport: (app: App) => usePassport(app),
};
