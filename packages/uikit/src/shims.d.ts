import type { VNode } from "vue";
import { ToastPlugin } from "./plugins/toast";
import { AuthPlugin } from "./plugins/auth";
import { ModalPlugin } from "./plugins/modal";
import { PaymentPlugin } from "./plugins/payment";

declare global {
  namespace JSX {
    interface Element extends VNode {}

    interface IntrinsicAttributes {
      [name: string]: any;
    }
  }
}

declare module "@vue/runtime-core" {
  interface UIKit {
    toast: ToastPlugin;
    auth: AuthPlugin;
    modal: ModalPlugin;
    payment: PaymentPlugin;
  }

  export interface ComponentCustomProperties {
    $uikit: UIKit;
  }

  export interface GlobalComponents {
    // @generate-components
  }
}
