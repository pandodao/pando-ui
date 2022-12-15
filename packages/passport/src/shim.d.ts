import type { Passport } from "./types";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $passport: Passport;
  }
}
