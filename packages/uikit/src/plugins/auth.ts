import { createVNode, nextTick, render, getCurrentInstance } from "vue";
import { FAuthMethodModal } from "../components/FAuthMethodModal";

import type { App, VNode } from "vue";
import type { AuthMethod } from "../types";

export interface AuthMethodGlobalOptions {
  authMethods?: AuthMethod[];
  authMethodState?: Record<AuthMethod, boolean>;
  // Mixin oauth params
  clientId?: string;
  scope?: string;
  isFiresbox?: boolean;
  pkce?: boolean;
  hosts?: string[];
  container?: string;
  useEd25519KeyStore?: boolean;
  publicKey?: string;
  privateKey?: string;
}

export interface AuthMethodOptions {
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
      const mergedOptions = { ...globalOptions, ...options };
      const appendTo = document.querySelector(
        mergedOptions.container || "[data-v-app]"
      );
      const container = document.createElement("div");
      const vnode = createVNode(FAuthMethodModal, {
        ...mergedOptions,
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
