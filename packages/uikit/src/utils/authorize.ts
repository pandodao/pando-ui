import MixinClient from "../services/mixin/oauth";
import sha256 from "crypto-js/sha256";
import EncBase64 from "crypto-js/enc-base64";

import { isMixin } from "@foxone/utils/mixin";
import Base64 from "@foxone/utils/base64";

export interface AuthParams {
  clientId: string;
  scope: string;
  pkce: boolean;
  useEd25519KeyStore?: boolean;
  publicKey?: string;
  privateKey?: string;
}

export interface Callbacks {
  onError?: (...args: any) => void;
  onSuccess?: (...args: any) => void;
  onShowUrl?: (...args: any) => void;
}

function base64URLEncode(str) {
  return str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

function generateRandomString(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function generateCodePair() {
  const randomCode = generateRandomString(32);
  const verifier = base64URLEncode(Base64.encode(randomCode));
  const challenge = base64URLEncode(sha256(randomCode).toString(EncBase64));

  return { verifier, challenge };
}

export default function authorize(
  params: AuthParams,
  isFiresbox = false,
  hosts: string[],
  callbacks: Callbacks = {}
) {
  const [httpDefault, wsDefault] = isFiresbox
    ? ["https://xuexi-api.firesbox.com", "wss://xuexi-blaze.firesbox.com"]
    : ["https://api.mixin.one", "wss://blaze.mixin.one"];
  const http = hosts[0] || httpDefault;
  const ws = hosts[1] || wsDefault;
  const client = new MixinClient(http, ws);

  let opened = false;
  const { challenge = "", verifier = "" } = params.pkce
    ? generateCodePair()
    : {};

  // websocket message handler, return true to end loop
  const handler = (resp): boolean => {
    const data = resp.data;

    // handle error
    if (resp?.error?.code === 400 || resp?.error?.code === 10002) {
      callbacks.onError?.(resp?.error);

      return true;
    }

    // wait for next message
    if (!data) return false;

    // give code or token on success handler
    if (data.authorization_code.length > 16) {
      if (params.pkce) {
        const body = params.useEd25519KeyStore
          ? {
              client_id: params.clientId,
              code_verifier: verifier,
              code: data.authorization_code,
              ed25519: params.publicKey,
            }
          : {
              client_id: params.clientId,
              code_verifier: verifier,
              code: data.authorization_code,
            };

        fetch(http + "/oauth/token", {
          method: "post",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((response) => response.json())
          .then((data) => {
            if (params.useEd25519KeyStore) {
              const scope = data?.data?.scope;
              const authorizationId = data?.data?.authorization_id;

              if (!scope || !authorizationId) {
                callbacks.onError?.({
                  description: "Access Denied",
                });
              } else {
                callbacks.onSuccess?.({
                  keystore: {
                    user_id: params.clientId,
                    scope,
                    authorization_id: authorizationId,
                    private_key: params.privateKey,
                  },
                });
              }
            } else {
              const token = data?.data?.access_token;

              if (token) {
                callbacks.onSuccess?.({ token });
              } else {
                callbacks.onError?.({
                  description: "Get PKCE access token error",
                });
              }
            }
          })
          .catch(() => {
            callbacks.onError?.({ description: "Get PKCE access token error" });
          });
      } else {
        callbacks.onSuccess?.({ code: data.authorization_code });
      }

      return true;
    }

    // open oauth modal or show qrcode
    if (isMixin()) {
      if (opened) return false;

      window.location.href = "mixin://codes/" + data.code_id;
      opened = true;
    } else {
      callbacks.onShowUrl?.("mixin://codes/" + data.code_id);
    }

    return false;
  };

  client.connect(handler, params.clientId, params.scope, challenge);

  return client;
}
