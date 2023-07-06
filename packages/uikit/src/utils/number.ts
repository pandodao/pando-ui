import { toPrecision } from "@foxone/utils/number";
import BigNumber from "bignumber.js";

export function numberInput(value: string, precision: number | string) {
  const str = value.replace(/\,/g, ".");
  const num = new BigNumber(str);

  if (num.isNaN()) {
    return "";
  }

  const dp = num.decimalPlaces();

  if (dp && dp > +precision) {
    return toPrecision({ n: value, dp: +precision });
  }

  return str;
}
