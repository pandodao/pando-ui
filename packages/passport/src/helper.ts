import { getCurrentInstance } from "vue";

import type { App } from "vue";
import type { AuthMethod } from "@foxone/uikit/types";
import type { Passport } from "./types";

export function isMVM(channel: AuthMethod) {
  return (
    channel === "metamask" ||
    channel === "walletconnect" ||
    channel === "onekey"
  );
}

export function useAuth(app: App) {
  return app?._context.config.globalProperties.$uikit?.auth;
}

export function useToast(app: App) {
  return app?._context.config.globalProperties.$uikit?.toast;
}

export function usePayment(app: App) {
  return app?._context.config.globalProperties.$uikit?.payment;
}

export function usePassport(): Passport;
export function usePassport(app: App): Passport;
export function usePassport(app?: App | undefined): Passport {
  if (app) {
    return app?._context.config.globalProperties.$passport;
  } else {
    const instance = getCurrentInstance()!;

    return instance.appContext.config.globalProperties.$passport;
  }
}
