import { isMVM } from "./helper";
import { useAuth } from "./helper";

import type { App } from "vue";
import type { AuthData, AuthOptions, SignMessageParams, State } from "./types";

export default function (app: App, options: AuthOptions, state: State) {
  const connectFennec = async () => {
    await state.fennec.connect(options.origin);

    let token = await state.fennec.ctx?.wallet.signToken({
      payload: options.JWTPayload || {},
    });

    token = token || "";

    if (options.hooks?.afterFennecTokenLoad) {
      token = await options.hooks?.afterFennecTokenLoad(token);
    }

    state.token = token;
  };

  const connectMVM = async (type, reject) => {
    if (!state.mvm) throw new Error("MVM is not imported");

    await state.mvm?.connenct(type);

    if (options.mvmAuthType === "MixinToken") {
      state.token = state.mvm.getAuthToken();
    } else {
      let params: SignMessageParams = {};

      if (options.hooks?.beforeSignMessage) {
        params = await options.hooks.beforeSignMessage();
      }

      let resp = await state.mvm.signMessage(params);

      if (options.hooks?.afterSignMessage) {
        resp = await options.hooks.afterSignMessage(resp);
      } else {
        reject("Need afterSignMessage hook to process signed message to token");
      }

      state.token = resp;
    }
  };

  const connectMixin = async (data, reject) => {
    if (data.token) {
      state.token = data.token;
    } else {
      if (options.hooks?.afterOAuthCodeLoad) {
        state.token = await options.hooks.afterOAuthCodeLoad(data.code);
      } else {
        reject("Need afterOAuthCodeLoad hook to process code to tokens");
      }
    }
  };

  const handleAuth = async (data, resolve, reject) => {
    state.channel = data.type;

    if (state.channel === "fennec") await connectFennec();

    if (isMVM(state.channel)) await connectMVM(state.channel, reject);

    if (state.channel === "mixin") await connectMixin(data, reject);

    resolve({ channel: state.channel, token: state.token });
  };

  return new Promise<AuthData>((resolve, reject) => {
    useAuth(app)?.show({
      ...options,
      authMethodState: {
        fennec: state.fennec.isAvailable(),
        metamask: Boolean((window as any)?.ethereum?.isMetaMask),
        onekey: Boolean((window as any).$onekey),
      },
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
