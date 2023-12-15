import { isMVM } from "./helper";

import type { State } from "./types";

export default async function (id: string, state: State) {
  if (state.channel === "mixin") {
    return await state.mixin.getAsset(id);
  }

  if (state.channel === "fennec") {
    return await state.fennec.ctx?.wallet.getAsset(id);
  }

  if (isMVM(state.channel)) {
    return await state.mvm?.getAsset(id);
  }

  return null;
}
