import { genSafePaymentUrl } from "@foxone/utils/mixin";
import { usePayment } from "./helper";

import type { App } from "vue";
import type { State, PaymentOptions } from "./types";

export default async function (
  app: App,
  options: PaymentOptions,
  state: State
) {
  const recipient = options.recipient ?? "";
  const assetId = options.assetId ?? "";
  const amount = options.amount ?? "";
  const traceId = options.traceId ?? "";
  const memo = options.memo ?? "";

  const scheme = genSafePaymentUrl({
    recipient,
    assetId,
    amount,
    traceId,
    memo,
  });

  const actions = {
    mixin: () => {
      window.location.href = scheme;
    },
  };

  await usePayment(app).show({
    ...options,
    actions,
    amount,
    assetId,
    channel: state.channel,
    scheme,
  });
}
