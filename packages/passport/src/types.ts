import type { AuthMethod } from "@foxone/uikit/types";
import Fennec from "@foxone/fennec-dapp";
import MixinAPI from "./mixin-apis";

export interface PassportOptions {
  infuraId?: string;
  onDisconnect?: () => void;
}

export interface AuthOptions {
  origin: string;
  config?: { infuraId?: string };
  JWTPayload?: any;
  getTokenByCode?: (code: string) => Promise<string>;

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
};

export interface SyncOptions {
  token: string;
  channel: AuthMethod;
  origin?: string;
}

export interface AuthData {
  token: string;
  channel: AuthMethod;
}

export interface Passport {
  auth: (options: AuthOptions) => Promise<AuthData>;
  payment: (options: PaymentOptions) => Promise<void>;
  sync: (options: SyncOptions) => Promise<AuthData>;
  // TODO: Add Mixin Asset type
  getAsset: (id: string) => Promise<any>;
  getAssets: () => Promise<any>;
  getProfile: () => Promise<any>;
}
