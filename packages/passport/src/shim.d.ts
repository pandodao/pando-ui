import { VNode } from "vue";
import type { Passport } from "./types";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $passport: Passport;
  }
}

declare global {
  namespace JSX {
    interface Element extends VNode {}

    interface IntrinsicAttributes {
      [name: string]: any;
    }
  }
}
