import type { VNode } from "vue";
import { ToastMethods } from "./plugins/toast";
import { AuthMethods } from "./plugins/auth";
import { ModalMethods } from "./plugins/modal";
import { PaymentMethods } from "./plugins/payment";

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
    toast: ToastMethods;
    auth: AuthMethods;
    modal: ModalMethods;
    payment: PaymentMethods;
  }

  export interface ComponentCustomProperties {
    $uikit: UIKit;
  }

  export interface GlobalComponents {
    // @generate-components
  }
}
