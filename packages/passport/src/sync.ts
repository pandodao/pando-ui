import { isMVM } from "./helper";

import type { SyncOptions, State } from "./types";

export default async function (options: SyncOptions, state: State) {
  state.channel = options.channel;
  state.token = options.token;

  const connectFennec = async () => {
    await state.fennec.connect(options.origin || "");
    state.token =
      (await state.fennec.ctx?.wallet.signToken({ payload: {} })) || "";
  };

  const connectMVM = async (type) => {
    if (!state.mvm) throw new Error("MVM is not used");

    await state.mvm?.connenct(type);
    state.token = state.mvm?.getAuthToken() || "";
  };

  if (state.channel === "fennec") {
    await connectFennec();
  }

  if (isMVM(state.channel)) {
    await connectMVM(state.channel);
  }

  return { channel: state.channel, token: state.token };
}
