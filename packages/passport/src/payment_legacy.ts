import { genPaymentUrl } from "@foxone/utils/mixin";
import { usePayment } from "./helper";

import type { App } from "vue";
import type { State, PaymentOptions } from "./types";

export default async function (
  app: App,
  options: PaymentOptions,
  state: State
) {
  const code = options.code ?? "";
  const multisig = options.multisig ?? false;

  let asset_id = options?.assetId ?? "";
  let amount = options?.amount ?? "";
  let memo = options?.memo ?? "";

  let receivers = [];
  let threshold = 0;

  const opponent_id = options?.recipient ?? "";
  const trace_id = options?.traceId ?? "";
  const scheme = multisig
    ? `mixin://codes/${code}`
    : genPaymentUrl(options as any);

  if (multisig) {
    const resp: any = await state.mixin.codes(code);

    asset_id = resp?.asset_id;
    amount = resp?.amount;
    memo = resp?.memo;
    receivers = resp?.receivers;
    threshold = resp?.threshold;
  }

  const actions = {
    fennec: async () => {
      if (multisig) {
        await state.fennec.ctx?.wallet.multisigsPayment({ code });
      } else {
        await state.fennec.ctx?.wallet.transfer({
          amount,
          asset_id,
          memo,
          opponent_id,
          trace_id,
        });
      }
    },
    mixin: () => {
      window.location.href = scheme;
    },
    mvm: async () => {
      if (multisig) {
        await state.mvm?.withdraw({
          action: { extra: memo, receivers, threshold },
          amount,
          asset_id,
        });
      } else {
        await state.mvm?.withdraw({
          action: { extra: memo, receivers: [opponent_id], threshold: 1 },
          amount,
          asset_id,
        });
      }
    },
  };

  await usePayment(app).show({
    ...options,
    actions,
    amount,
    assetId: asset_id,
    channel: state.channel,
    scheme,
  });
}
