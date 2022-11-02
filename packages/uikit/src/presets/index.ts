import { mdi } from "vuetify/iconsets/mdi";
import { en, ja, zhHans, zhHant } from "vuetify/locale";
import { icons } from "./icons";
import { mergeDeep } from "../util";
import { dark, light } from "./theme";
import { locales } from "../locales";

import type { VuetifyOptions } from "vuetify";

export function usePresets(options: Partial<VuetifyOptions>): VuetifyOptions {
  const persets: VuetifyOptions = {
    icons: { defaultSet: "mdi", sets: { mdi }, aliases: { ...icons } },
    theme: {
      themes: { dark, light },
    },
    locale: { messages: mergeDeep({ en, ja, zhHans, zhHant }, locales) },
  };

  return mergeDeep(persets, options);
}
