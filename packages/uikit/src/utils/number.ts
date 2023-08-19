import BigNumber from "bignumber.js";

export function numberInput(value: string, precision: number | string) {
  const str = value.replace(/\,/g, ".");
  const num = new BigNumber(str);

  if (num.isNaN()) {
    return "";
  }

  const dp = num.decimalPlaces();

  if (dp && dp > +precision) {
    return num
      .decimalPlaces(+precision, BigNumber.ROUND_DOWN)
      .toFixed(+precision);
  }

  return str;
}
