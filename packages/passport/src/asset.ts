import { getAssets } from "@foxone/utils/mixin";

import type { State } from "./types";

export default async function (id: string, state: State) {
  if (state.channel === "mixin") {
    return await getAssets([id]);
  }

  return null;
}
