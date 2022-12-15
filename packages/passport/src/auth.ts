import { isMVM } from "./helper";
import { useAuth } from "./helper";

import type { App } from "vue";
import type { AuthData, AuthOptions, State } from "./types";

export default function (app: App, options: AuthOptions, state: State) {
  const connectFennec = async () => {
    await state.fennec.connect(options.origin);
    state.token =
      (await state.fennec.ctx?.wallet.signToken({
        payload: options.JWTPayload || {},
      })) ?? "";
  };

  const connectMVM = async (type) => {
    if (!state.mvm) throw new Error("MVM is not used");

    await state.mvm?.connenct(type);
    state.token = state.mvm?.getAuthToken() ?? "";
  };

  const handleAuth = async (data, resolve, reject) => {
    state.channel = data.type;

    if (state.channel === "fennec") {
      await connectFennec();
      resolve({ channel: state.channel, token: state.token });
    }

    if (isMVM(state.channel)) {
      await connectMVM(state.channel);
      resolve({ channel: state.channel, token: state.token });
    }

    if (state.channel === "mixin") {
      if (data.token) {
        state.token = data.token;
      } else {
        if (!options.getTokenByCode) {
          return reject("No auth actions provided");
        }

        state.token = await options.getTokenByCode(data.code);
      }

      resolve({ channel: state.channel, token: state.token });
    }
  };

  return new Promise<AuthData>((resolve, reject) => {
    useAuth(app)?.show({
      ...options,
      checkFennec: () => state.fennec.isAvailable(),
      checkMetamask: () => Boolean((window as any)?.ethereum?.isMetaMask),
      checkOnekey: () => Boolean((window as any).$onekey),
      handleAuth: async (data) => {
        try {
          await handleAuth(data, resolve, reject);
        } catch (error) {
          reject(error);
        }
      },
      handleError: (error) => {
        reject(error);
      },
    });
  });
}
