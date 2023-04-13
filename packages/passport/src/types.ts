import type { AuthMethod } from "@foxone/uikit/types";
import Fennec from "@foxone/fennec-dapp";
import MixinAPI from "./mixin-apis";

export interface PassportOptions {
  infuraId?: string;
  chainId?: number;
  customizeToken?: boolean;
}

export interface SignMessageParams {
  domain?: string;
  statement?: string;
  uri?: string;
  version?: string;
  chainId?: number;
  expirationTime?: string;
  notBefore?: string;
  resources?: Array<string>;
}

export interface AuthOptions {
  origin?: string;
  JWTPayload?: any;
  // if customizeToken = false:
  // mvm and fennec channel will return access token for https://api.mixin.one/me
  // developer can save this token to access Mixin Messenger backend
  // ATTENTION: /me token has a short expire time (about one day)
  // token will be refreshed everytime sync function executed
  // mixin oauth channel will return Mixin OAuth Token

  // if customizeToken = true:
  // developer should provide hooks for exchange token or auth code or signed message to customizeToken token
  // developer should both token and mixin_token for Mixin OAuth in order to access mixin assets
  // token will NOT be refershed in sync function
  customizeToken?: boolean;

  // if signMessage = false
  // mvm will use /me token as auth type

  // if signMessage = true
  // mvm connect will ask user to sign message
  // developer should provider hooks to verfiy signature and distribute custom token
  signMessage?: boolean;
  hooks?: {
    beforeSignMessage?: () => Promise<SignMessageParams>;
    onDistributeToken?: (params: {
      type: "mixin_token" | "signed_message" | "mixin_code";
      code?: string;
      token?: string;
      message?: string;
      signature?: string;
    }) => Promise<{ token: string; mixin_token?: string }>;
    afterDisconnect?: () => void;
  };
  authMethods?: AuthMethod[];
  // Mixin oauth params
  clientId?: string;
  scope?: string;
  isFiresbox?: boolean;
  pkce?: boolean;
  hosts?: string[];
}

export interface PaymentOptions {
  // transfer params
  assetId?: string;
  amount?: string;
  recipient?: string;
  traceId?: string;
  memo?: string;
  // multisig params
  code?: string;
  multisig?: boolean;
  // common params
  hideCheckingModal?: boolean;
  checker?: () => Promise<boolean>;
}

export type State = {
  channel: AuthMethod;
  fennec: Fennec;
  mixin: MixinAPI;
  mvm: any | null;
  token: string;
  mixin_token: string;
};

export interface SyncOptions {
  token: string;
  mixin_token?: string;
  channel: AuthMethod;
  origin?: string;
  customizeToken?: boolean;
}

export interface AuthData {
  token: string;
  channel: AuthMethod;
  mixin_token: string;
}

export interface WatchAssetParams {
  assetId: string;
  image: string;
  symbol: string;
}

export interface Passport {
  auth: (options: AuthOptions) => Promise<AuthData>;
  payment: (options: PaymentOptions) => Promise<void>;
  sync: (options: SyncOptions) => Promise<AuthData>;
  // TODO: Add Mixin Asset type
  getAsset: (id: string) => Promise<any>;
  getAssets: () => Promise<any>;
  getProfile: () => Promise<any>;
  watchAsset: (params: WatchAssetParams) => void;
}
