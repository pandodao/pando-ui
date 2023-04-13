import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { usePresets } from "@foxone/uikit/presets";
import { Auth, AuthMethodGlobalOptions } from "@foxone/uikit/plugins/auth";
import { Payment } from "@foxone/uikit/plugins/payment";
import { Toast, ToastGlobalOptions } from "@foxone/uikit/plugins/toast";
import MixinAPI from "./mixin-apis";
import Fennec from "@foxone/fennec-dapp";
import createAuthAction from "./auth";
import createPaymentAction from "./payment";
import createAssetsAction from "./assets";
import createAssetAction from "./asset";
import createSyncAction from "./sync";
import { usePassport, isMVM } from "./helper";

import type { App } from "vue";
import type { VuetifyOptions } from "vuetify";
import type { AuthMethod } from "@foxone/uikit/types";
import type {
  AuthOptions,
  PaymentOptions,
  SyncOptions,
  State,
  PassportOptions,
} from "./types";

function install(app: App, passportOptions: PassportOptions = {}) {
  const state: State = {
    token: "",
    mixin_token: "",
    channel: "" as AuthMethod,
    fennec: new Fennec(),
    mixin: new MixinAPI(),
    mvm: null,
  };

  if (typeof MVM !== "undefined") {
    state.mvm = new MVM({
      infuraId: passportOptions.infuraId,
      chainId: passportOptions.chainId,
    });
  }

  state.mixin.authIntercept = (configs) => {
    configs.headers.Authorization = `Bearer ${
      passportOptions.customizeToken ? state.mixin_token : state.token
    }`;

    return configs;
  };

  const passport = {
    auth: (options: AuthOptions) =>
      createAuthAction(app, { ...passportOptions, ...options }, state),
    payment: (options: PaymentOptions) =>
      createPaymentAction(app, options, state),
    getAsset: (id: string) => createAssetAction(id, state),
    getAssets: () => createAssetsAction(state),
    getProfile: () => state.mixin.getProfile(),
    sync: (options: SyncOptions) =>
      createSyncAction({ ...passportOptions, ...options }, state),
    watchAsset: (params: {
      assetId: string;
      image: string;
      symbol: string;
    }) => {
      if (isMVM(state.channel)) {
        state.mvm.watchAsset(params);
      }
    },
  };
  const properties = app.config.globalProperties;

  properties.$passport = passport;
}

function init(
  options: {
    vuetifyOptions?: VuetifyOptions;
    container?: string;
    toast?: ToastGlobalOptions;
    auth?: AuthMethodGlobalOptions;
    payment?: PaymentOptions;
    passport?: PassportOptions;
  } = {
    toast: {},
    auth: {},
    payment: {},
    passport: {},
  }
) {
  const app = createApp({});
  const vuetifyOptions = options.vuetifyOptions || usePresets({});

  app.use(createVuetify(vuetifyOptions));
  app.use(Auth, { container: options.container, ...options.auth });
  app.use(Toast, { container: options.container, ...options.toast });
  app.use(Payment, {
    container: options.container,
    ...options.payment,
  });
  app.use(Passport, {
    container: options.container,
    ...options.passport,
  });

  app.mount(options.container || "body");

  return usePassport(app);
}

const Passport = {
  install,
  init,
};

export default Passport;
