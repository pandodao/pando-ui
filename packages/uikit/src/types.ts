export interface Asset {
  id: string;
  symbol: string;
  displaySymbol?: string;
  name?: string;
  logo: string;
  chainLogo?: string;
  label?: string;
}

export type AuthMethod =
  | "mixin"
  | "fennec"
  | "metamask"
  | "onekey"
  | "walletconnect";

export type AuthMethodState = Record<AuthMethod, boolean>;

export interface AuthData {
  type: AuthMethod;
  token?: string;
  code?: string;
}
