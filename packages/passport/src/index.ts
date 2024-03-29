import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { usePresets } from "@foxone/uikit/presets";
import { Auth, AuthMethodGlobalOptions } from "@foxone/uikit/plugins/auth";
import { Payment } from "@foxone/uikit/plugins/payment";
import { Toast, ToastGlobalOptions } from "@foxone/uikit/plugins/toast";
import MixinAPI from "./mixin-apis";
import Fennec from "@foxone/fennec-dapp";
import createAuthAction from "./auth";
import createLegacyPaymentAction from "./payment_legacy";
import createPaymentAction from "./payment";
import createLegacyAssetsAction from "./assets_legacy";
import createAssetsAction from "./assets";
import createLegacyAssetAction from "./asset_legacy";
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
    keystore: null,
    channel: "" as AuthMethod,
    fennec: new Fennec(),
    mixin: new MixinAPI(),
    mvm: null,
  };

  if (typeof MVM !== "undefined") {
    state.mvm = new MVM({
      walletConnectProjectId: passportOptions.walletConnectProjectId,
      chainId: passportOptions.chainId,
    });
  }

  state.mixin.authIntercept = (configs) => {
    const token = passportOptions.customizeToken
      ? state.mixin_token
      : state.token;

    if (!token) {
      throw new Error("Token not found");
    }

    configs.headers.Authorization = `Bearer ${token}`;

    return configs;
  };

  const passport = {
    state,
    auth: (options: AuthOptions) =>
      createAuthAction(app, { ...passportOptions, ...options }, state),
    payment: (options: PaymentOptions) =>
      createPaymentAction(app, options, state),
    getAsset: (id: string) => createAssetAction(id, state),
    getAssets: (ids: string[]) => createAssetsAction(ids, state),
    legacy: {
      payment: (options: PaymentOptions) =>
        createLegacyPaymentAction(app, options, state),
      getAsset: (id: string) => createLegacyAssetAction(id, state),
      getAssets: () => createLegacyAssetsAction(state),
    },
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
    disconnect: () => {
      if (isMVM(state.channel)) {
        state.mvm.disconnect();
      }

      state.token = "";
      state.mixin_token = "";
      state.channel = "" as any;
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
