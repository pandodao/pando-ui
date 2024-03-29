import { isMVM } from "./helper";
import { useAuth } from "./helper";

import type { App } from "vue";
import type {
  AuthData,
  AuthOptions,
  PassportOptions,
  SignMessageParams,
  State,
} from "./types";

export default function (
  app: App,
  options: AuthOptions & PassportOptions,
  state: State
) {
  const connectFennec = async () => {
    await state.fennec.connect(options.origin ?? "");

    const mixinToken = await state.fennec.ctx?.wallet.signToken({
      payload: options.JWTPayload || {},
    });

    if (options.customizeToken) {
      const resp = await options.hooks?.onDistributeToken?.({
        token: mixinToken,
        type: "mixin_token",
      });

      state.token = resp?.token ?? "";
    } else {
      state.token = mixinToken ?? "";
    }
  };

  const connectMVM = async (type, reject) => {
    if (!state.mvm) throw new Error("MVM is not imported");

    await state.mvm?.connenct(type);

    if (options.signMessage) {
      let params: SignMessageParams = {};

      if (options.hooks?.beforeSignMessage) {
        params = await options.hooks.beforeSignMessage();
      }

      const signedData: any = await state.mvm?.signMessage(params);

      if (options.hooks?.onDistributeToken) {
        const resp = await options.hooks?.onDistributeToken?.({
          message: signedData?.message ?? "",
          signature: signedData?.signature ?? "",
          type: "signed_message",
        });

        state.token = resp?.token ?? "";
      } else {
        reject(
          "Need onDistributeToken hook to process signed message to token"
        );
      }
    } else {
      const mixinToken = state.mvm?.getAuthToken() ?? "";

      if (options.customizeToken) {
        const resp = await options.hooks?.onDistributeToken?.({
          token: mixinToken,
          type: "mixin_token",
        });

        state.token = resp?.token ?? "";
      } else {
        state.token = mixinToken;
      }
    }
  };

  const connectMixin = async (data, reject) => {
    if (data.token) {
      const mixinToken = data.token;

      if (options.customizeToken) {
        const resp = await options.hooks?.onDistributeToken?.({
          token: mixinToken,
          type: "mixin_token",
        });

        state.token = resp?.token ?? "";
        state.mixin_token = mixinToken;
      } else {
        state.token = mixinToken;
      }
    } else if (data.code) {
      if (options.hooks?.onDistributeToken) {
        const resp = await options.hooks.onDistributeToken({
          code: data.code,
          type: "mixin_code",
        });

        state.token = resp.token;
        state.mixin_token = resp.mixin_token ?? "";
      } else {
        reject("Need onDistributeToken hook to process code to tokens");
      }
    } else if (data.keystore) {
      state.keystore = data.keystore;
    }
  };

  const handleAuth = async (data, resolve, reject) => {
    state.channel = data.type;

    if (state.channel === "fennec") await connectFennec();

    if (isMVM(state.channel)) await connectMVM(state.channel, reject);

    if (state.channel === "mixin") await connectMixin(data, reject);

    resolve({
      channel: state.channel,
      token: state.token,
      keystore: state.keystore,
      mixin_token: state.mixin_token,
    });
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
