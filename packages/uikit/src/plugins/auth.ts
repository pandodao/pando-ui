import { createVNode, nextTick, render, getCurrentInstance } from "vue";
import { FAuthMethodModal } from "../components";

import type { App, VNode } from "vue";
import type { AuthMethod } from "../types";

export interface AuthMethodGlobalOptions {
  authMethods?: AuthMethod[];
  // Mixin oauth params
  clientId?: string;
  scope?: string;
  isFiresbox?: boolean;
  pkce?: boolean;
  hosts?: string[];
}

export interface AuthMethodOptions {
  checkFennec?: () => boolean;
  checkMetamask?: () => boolean;
  checkOnekey?: () => boolean;
  handleAuth?: (...args: any) => void;
  handleError?: (...args: any) => void;
}

export type Keys = "show";

export type AuthPlugin = Record<
  Keys,
  (options?: AuthMethodGlobalOptions | AuthMethodOptions) => void
>;

export function useAuth() {
  const instance = getCurrentInstance()!;

  return instance.appContext.config.globalProperties.$uikit.auth;
}

function install(app: App, globalOptions: AuthMethodGlobalOptions) {
  let instance: VNode | null = null;

  const show = (options: AuthMethodOptions & AuthMethodGlobalOptions) => {
    if (instance) {
      instance.component!.exposed!.close();
    }

    nextTick(() => {
      const appendTo = document.querySelector("[data-v-app]");
      const container = document.createElement("div");
      const vnode = createVNode(FAuthMethodModal, {
        ...globalOptions,
        ...options,
        fennec: options?.checkFennec?.(),
        metamask: options?.checkMetamask?.(),
        attach: container,
        onAuth: options.handleAuth,
        onError: options.handleError,
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

      instance.component!.exposed!.show();
    });
  };

  const auth = { show };
  const properties = app.config.globalProperties;

  properties.$uikit = properties.$uikit || {};
  properties.$uikit.auth = auth as AuthPlugin;
}

export function Auth() {}

Auth.install = install;
