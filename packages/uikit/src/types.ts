export interface Asset {
  id: string;
  symbol: string;
  displaySymbol?: string;
  name?: string;
  logo: string;
  chainLogo?: string;
  label?: string;
}

export interface PaymentOptions {
  assetId: string;
  amount: string;
  scheme: string;
  channel: "mixin" | "fennec" | "metamask" | "walletconnect";
  hideCheckingModal?: boolean;
  actions: {
    mixin?: () => void;
    fennec?: () => Promise<boolean>;
    mvm?: () => Promise<boolean>;
  };
  checker: () => Promise<boolean>;
}