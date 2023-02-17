import type { SyncOptions, State } from "./types";

export default async function (options: SyncOptions, state: State) {
  state.channel = options.channel;
  state.token = options.token;

  return { channel: state.channel, token: state.token };
}
