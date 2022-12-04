import { getCurrentInstance } from "vue";
import Fennec from "@foxone/fennec-dapp";
import MixinAPI from "@foxone/mixin-api";
import MVM, { Config } from "@foxone/mvm";
import createAuthAction from "./auth";
import createAssetsAction from "./assets";
import createAssetAction from "./asste";
import createPaymentAction from "./payment";
import createSyncAction from "./sync";
import createHelper from "./helper";

import type { App } from "vue";

export interface PassportOptions {
  origin: string;
  config: Config;
  JWTPayload?: any;
  onDisconnect?: () => void;
  getTokenByCode?: (code: string) => Promise<string>;
}

export type Channel =
  | "fennec"
  | "mixin"
  | "metamask"
  | "walletconnect"
  | "onekey"
  | "";

export type PassportMethods = {
  auth: ReturnType<typeof createAuthAction>;
  fennec: Fennec;
  getAssets: ReturnType<typeof createAssetsAction>;
  getAsset: ReturnType<typeof createAssetAction>;
  mvm: MVM;
  payment: ReturnType<typeof createPaymentAction>;
  sync: ReturnType<typeof createSyncAction>;
  helper: ReturnType<typeof createHelper>;
};

export type State = {
  channel: Channel;
  fennec: Fennec;
  mixin: MixinAPI;
  mvm: MVM;
  token: string;
};

export function isMVM(channel: Channel) {
  return (
    channel === "metamask" ||
    channel === "walletconnect" ||
    channel === "onekey"
  );
}

export function usePassport() {
  const instance = getCurrentInstance()!;

  return instance.appContext.config.globalProperties.$passport;
}

function install(app: App, options: PassportOptions) {
  const state: State = {
    channel: "",
    fennec: new Fennec(),
    mixin: new MixinAPI(),
    mvm: new MVM(options.config),
    token: "",
  };

  state.mixin.provider.instance.interceptors.request.use((config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${state.token}`,
    };

    return config;
  });

  state.mvm.on("disconnect", () => {
    options.onDisconnect?.();
  });

  const passport = {
    auth: createAuthAction(app, options, state),
    fennec: state.fennec,
    getAsset: createAssetAction(state),
    getAssets: createAssetsAction(state),
    helper: createHelper(state),
    mvm: state.mvm,
    payment: createPaymentAction(app, state),
    sync: createSyncAction(options, state),
  };

  const properties = app.config.globalProperties;

  properties.$passport = passport as PassportMethods;
}

export default function Passport() {}

Passport.install = install;
