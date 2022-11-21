import { toPrecision } from "@foxone/utils/number";
import BigNumber from "bignumber.js";
import type { Asset } from "../types";

export function convertMixinAsset(asset): Asset {
  return {
    id: asset.asset_id,
    symbol: asset.symbol,
    logo: asset.icon_url,
    name: asset.name,
  };
}

export function numberInput(value: string, precision: number | string) {
  const dp = new BigNumber(value).decimalPlaces();

  if (dp && dp > +precision) {
    return toPrecision({ n: value, dp: +precision });
  }

  return value;
}

export function filterAssets(assets: Asset[], filter: string) {
  return assets.filter((asset) => {
    const name = (asset?.name || "").toLowerCase();
    const symbol = (asset?.symbol || "").toLowerCase();

    return name.startsWith(filter) || symbol.includes(filter);
  });
}

export function getBrowser() {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf("firefox") > -1) {
    return "firefox";
  }

  if (ua.indexOf("chrome") > -1) {
    return "chrome";
  }

  return "others";
}