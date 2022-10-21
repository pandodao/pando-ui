import type { VNode } from "vue";

declare global {
  namespace JSX {
    interface Element extends VNode {}

    interface IntrinsicAttributes {
      [name: string]: any;
    }
  }
}
