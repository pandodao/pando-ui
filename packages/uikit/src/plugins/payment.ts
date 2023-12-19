import { createVNode, nextTick, render, getCurrentInstance } from "vue";
import { genPaymentUrl } from "@foxone/utils/mixin";

import type { App, VNode } from "vue";

import { FPaymentModal } from "../components/FPaymentModal";

export interface PaymentOptions {
  assetId: string;
  amount: string;
  scheme: string;
  channel: "mixin" | "fennec" | "metamask" | "walletconnect";
  hideCheckingModal?: boolean;
  actions: {
    mixin?: () => void;
    fennec?: () => Promise<boolean>;
    mvm?: () => Promise<boolean>;
  };
  checker?: () => Promise<boolean>;
  container?: string;
}

export interface MixinPaymentOptions {
  assetId: string;
  amount: string;
  recipient: string;
  traceId: string;
  memo: string;
  hideCheckingModal?: boolean;
  checker: () => Promise<boolean>;
}

export function usePayment() {
  const instance = getCurrentInstance()!;

  return instance.appContext.config.globalProperties.$uikit.payment;
}

export type Keys = "show" | "mixin";

export type PaymentPlugin = Record<
  Keys,
  (options?: PaymentOptions | MixinPaymentOptions) => void
>;

function install(app: App) {
  let instance: VNode | null = null;

  const show = async (options: PaymentOptions) => {
    if (instance) {
      await instance.component!.exposed!.show(options);
    }

    await nextTick(async () => {
      const appendTo = document.querySelector(
        options.container || "[data-v-app]"
      );
      const container = document.createElement("div");
      const vnode = createVNode(FPaymentModal, {
        ...options,
        attach: container,
        onDestroy: () => {
          render(null, container);
          instance = null;
          appendTo?.removeChild(container);
        },
      });

      vnode.appContext = app._context!;
      render(vnode, container);
      appendTo?.appendChild(container);
      instance = vnode;

      await instance.component!.exposed!.show(options);
    });
  };

  const mixin = (options: MixinPaymentOptions) => {
    const scheme = genPaymentUrl(options);

    return show({
      ...options,
      channel: "mixin",
      scheme,
      actions: { mixin: () => (window.location.href = scheme) },
    });
  };

  const payment = { show, mixin };
  const properties = app.config.globalProperties;

  properties.$uikit = properties.$uikit || {};
  properties.$uikit.payment = payment as PaymentPlugin;
}

export function Payment() {}

Payment.install = install;
