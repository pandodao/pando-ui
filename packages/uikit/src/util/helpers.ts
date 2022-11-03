import { toPrecision } from "@foxone/utils/number";
import BigNumber from "bignumber.js";
import type { Asset } from "../types";

export function isObject(obj: any): obj is object {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
}

export function mergeDeep(
  source: Record<string, any> = {},
  target: Record<string, any> = {},
  arrayFn?: (a: unknown[], b: unknown[]) => unknown[]
) {
  const out: Record<string, any> = {};

  for (const key in source) {
    out[key] = source[key];
  }

  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key];

    // Only continue deep merging if
    // both properties are objects
    if (isObject(sourceProperty) && isObject(targetProperty)) {
      out[key] = mergeDeep(sourceProperty, targetProperty, arrayFn);

      continue;
    }

    if (
      Array.isArray(sourceProperty) &&
      Array.isArray(targetProperty) &&
      arrayFn
    ) {
      out[key] = arrayFn(sourceProperty, targetProperty);

      continue;
    }

    out[key] = targetProperty;
  }

  return out;
}

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
