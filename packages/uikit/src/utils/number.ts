import { toPrecision } from "@foxone/utils/number";
import BigNumber from "bignumber.js";

export function numberInput(value: string, precision: number | string) {
  const dp = new BigNumber(value).decimalPlaces();

  if (dp && dp > +precision) {
    return toPrecision({ n: value, dp: +precision });
  }

  return value;
}
