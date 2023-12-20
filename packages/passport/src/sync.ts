import { isMVM } from "./helper";
import type { SyncOptions, State, PassportOptions } from "./types";

export default async function (
  options: SyncOptions & PassportOptions,
  state: State
) {
  state.channel = options.channel;
  state.token = options.token;
  state.keystore = options.keystore;
  state.mixin_token = options.mixin_token ?? "";

  if (state.channel === "fennec") {
    if (!options.origin) {
      throw new Error("Miss origin to connect Fennec");
    }

    await state.fennec.connect(options.origin);

    if (!options.customizeToken) {
      state.token =
        (await state.fennec.ctx?.wallet.signToken({ payload: {} })) ?? "";
    }
  }

  if (isMVM(state.channel)) {
    await state.mvm.connenct(state.channel);

    if (!options.customizeToken) {
      state.token = state.mvm.getAuthToken();
    }
  }

  return {
    channel: state.channel,
    token: state.token,
    keystore: state.keystore,
    mixin_token: state.mixin_token,
  };
}
