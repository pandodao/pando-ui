import type { VNode } from "vue";
import { ToastMethods } from "./plugins/toast";

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
  }

  export interface ComponentCustomProperties {
    $uikit: UIKit;
  }

  export interface GlobalComponents {
    // @generate-components
  }
}
