import { createVNode, render, getCurrentInstance, nextTick } from "vue";
import { FToast, types, ToastAction } from "../components/FToast/FToast";

import type { App, VNode } from "vue";

export interface ToastProps {
  type?: typeof types[number];
  message?: string;
  action?: ToastAction;
}

export interface ToastGlobalOptions {
  location: any;
  timeout: number;
  [key: string]: any;
  container?: string;
}

export type ToastHandler = {
  close: () => void;
};

export type Keys = "show" | "success" | "error" | "warning" | "clear";

export type ToastPlugin = Record<Keys, (options?: ToastProps) => void>;

export function useToast() {
  const instance = getCurrentInstance()!;

  return instance.appContext.config.globalProperties.$uikit.toast;
}

function install(app: App, globalOptions: ToastGlobalOptions) {
  let instance: VNode | null = null;

  const show = (options: ToastProps = {}) => {
    if (instance) {
      instance.component!.exposed!.close();
    }

    nextTick(() => {
      const appendTo = document.querySelector(".v-application");
      const container = document.createElement("div");
      const vnode = createVNode(FToast, {
        ...globalOptions,
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

      instance.component!.exposed!.show();
    });
  };

  const clear = () => {
    if (!instance) return;

    instance!.component!.exposed!.close();
  };

  const toast = { show, clear };
  const properties = app.config.globalProperties;

  types.forEach((type) => {
    toast[type] = (options: ToastProps) => show({ type, ...options });
  });

  properties.$uikit = properties.$uikit || {};
  properties.$uikit.toast = toast as ToastPlugin;
}

export function Toast() {}

Toast.install = install;
