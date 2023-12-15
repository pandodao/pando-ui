import { getAssets } from "@foxone/utils/mixin";

import type { State } from "./types";

export default async function (ids: string[], state: State) {
  if (state.channel === "mixin") {
    return await getAssets(ids);
  }

  return [];
}
