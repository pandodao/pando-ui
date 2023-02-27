import { isMVM } from "./helper";
import type { SyncOptions, State } from "./types";

export default async function (options: SyncOptions, state: State) {
  state.channel = options.channel;
  state.token = options.token;

  if (state.channel === "fennec") {
    if (!options.origin) {
      throw new Error("Miss origin to connect Fennec");
    }

    await state.fennec.connect(options.origin);

    if (options.refreshToken) {
      state.token =
        (await state.fennec.ctx?.wallet.signToken({ payload: {} })) ?? "";
    }
  }

  if (isMVM(state.channel)) {
    await state.mvm.connenct(state.channel);

    if (options.refreshToken) {
      state.token = state.mvm.getAuthToken();
    }
  }

  return { channel: state.channel, token: state.token };
}
