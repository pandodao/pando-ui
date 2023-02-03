import { createVNode, nextTick, render, getCurrentInstance } from "vue";

import type { App, VNode } from "vue";
import {
  FMessageModal,
  ModalAction,
} from "../components/FMessageModal/FMessageModal";

export interface MessageModalProps {
  title?: string | VNode;
  text?: string | VNode;
  props?: Record<string, any>;
  cancel?: ModalAction;
  confirm?: ModalAction;
  actions?: VNode;
  type?: string;
  container?: string;
}

export function useModal() {
  const instance = getCurrentInstance()!;

  return instance.appContext.config.globalProperties.$uikit.modal;
}

export type Keys = "show" | "clear";

export type ModalPlugin = Record<Keys, (options?: MessageModalProps) => void>;

function install(app: App) {
  let instance: VNode | null = null;

  const show = (options: MessageModalProps) => {
    if (instance) {
      instance.component!.exposed!.close();
    }

    nextTick(() => {
      const appendTo = document.querySelector(
        options.container || "[data-v-app]"
      );
      const container = document.createElement("div");
      const vnode = createVNode(FMessageModal, {
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

  const modal = { show, clear };
  const properties = app.config.globalProperties;

  properties.$uikit = properties.$uikit || {};
  properties.$uikit.modal = modal as ModalPlugin;
}

export function Modal() {}

Modal.install = install;
