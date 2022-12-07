import { defineComponent, ref, watch } from "vue";
import { useDisplay, useLocale } from "vuetify";
import { isMixin } from "@foxone/utils/mixin";
import axios from "axios";

import type { PaymentOptions } from "../../plugins/payment";

import { FModal } from "../FModal";
import { FPayingModal } from "../FPayingModal";
import { FQRCode } from "../FQRCode";
import { FButton } from "../FButton";
import { VImg } from "vuetify/components";

import "./FPaymentModal.scss";

export const FPaymentModal = defineComponent({
  name: "FPaymentModal",

  inheritAttrs: false,

  emits: {
    destroy: () => true,
  },

  setup(_, { expose, emit }) {
    const dialog = ref(false);
    const asset = ref<any>(null);
    const checking = ref(false);
    const timer = ref<any>(null);
    const reject = ref<any>(null);
    const qr = ref(false);

    // Payment Options
    const assetId = ref("");
    const amount = ref("");
    const scheme = ref("");
    const channel = ref("");
    const hideCheckingModal = ref(false);

    const { mdAndUp } = useDisplay();
    const { t } = useLocale();

    const cancel = () => {
      checking.value = false;
    };

    const handlePaid = () => {
      checking.value = true;
    };

    const handleOpenInApp = () => {
      window.location.href = scheme.value;
    };

    const handleModalChange = (value) => {
      if (!value) {
        if (reject.value && typeof reject.value === "function") {
          reject.value(new Error("Cancelled"));
        }

        timer.value && clearTimeout(timer.value);
        checking.value = false;
        channel.value = "";
        scheme.value = "";
        qr.value = false;
        asset.value = null;
        reject.value = null;
      }

      if (!dialog.value) {
        emit("destroy");
      }
    };

    watch(() => checking.value, handleModalChange);
    watch(() => dialog.value, handleModalChange);

    const show = async (options: PaymentOptions) => {
      const { actions, checker } = options;

      scheme.value = options.scheme;
      channel.value = options.channel;
      assetId.value = options.assetId;
      amount.value = options.amount;
      hideCheckingModal.value = options.hideCheckingModal || false;

      const showChecking = () => (checking.value = true);

      switch (channel.value) {
        case "mixin":
          if (isMixin()) {
            actions.mixin?.();
            showChecking();
          } else {
            dialog.value = true;
            qr.value = true;
            requestAsset();
          }
          break;
        case "fennec":
          await actions.fennec?.();
          showChecking();
          break;
        default:
          await actions.mvm?.();
          showChecking();
          break;
      }

      return new Promise((resolve, _reject) => {
        reject.value = _reject;
        polling(resolve, _reject, checker);
      });
    };

    const requestAsset = async () => {
      const res = await axios.get(
        `https://api.mixin.one/network/assets/${assetId.value}`
      );

      asset.value = res.data.data;
    };

    const polling = async (resolve, reject, checker) => {
      try {
        const completed = await checker();

        if (!completed) {
          timer.value = setTimeout(() => {
            if (dialog.value || checking.value) {
              polling(resolve, reject, checker);
            }
          }, 3000);
        } else {
          dialog.value = false;
          checking.value = false;
          resolve();
        }
      } catch (error) {
        reject(error);
        dialog.value = false;
        checking.value = false;
      }
    };

    expose({ show });

    return () => (
      <div>
        <FModal v-model={dialog.value} maxWidth="780">
          <div
            class={`f-payment-modal__content ${
              !mdAndUp.value && "f-payment-modal__content--mobile"
            }`}
          >
            <div class="f-payment-modal__left">
              {scheme.value && (
                <FQRCode
                  class="f-payment-modal__qr"
                  text={scheme.value}
                  size={182}
                />
              )}
            </div>

            <div class="f-payment-modal__right">
              {asset.value && (
                <>
                  <div class="f-payment-modal__logo">
                    <VImg
                      src={asset.value?.icon_url ?? ""}
                      width={32}
                      height={32}
                    />
                  </div>
                  <div class="f-payment-modal__amount mt-1">
                    <div>{t("$vuetify.uikit.scan_to_pay")}</div>
                    <div>{amount.value + " " + asset.value?.symbol ?? ""}</div>
                  </div>
                </>
              )}
              <div
                class="f-payment-modal__hint mt-5"
                innerHTML={t("$vuetify.uikit.mixin_pay_detail", [
                  "<a class='f-auth-mixin__link' href='https://mixin.one/messenger'>Mixin Messenger" +
                    "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path d='M12.2068 1.79276C10.2975 -0.116585 7.2018 -0.116585 5.29246 1.79276L4.64288 2.44234C4.25236 2.83286 4.25236 3.46603 4.64288 3.85655C5.03341 4.24707 5.66657 4.24707 6.0571 3.85655L6.70667 3.20698C7.83497 2.07868 9.6643 2.07868 10.7926 3.20698C11.9209 4.33528 11.9209 6.16461 10.7926 7.29291L10.1425 7.94304C9.75195 8.33357 9.75194 8.96673 10.1425 9.35726C10.533 9.74778 11.1662 9.74778 11.5567 9.35726L12.2068 8.70712C14.1162 6.79778 14.1162 3.70211 12.2068 1.79276Z' fill='#076aff'/>" +
                    "<path d='M3.85726 6.05638C4.24779 5.66586 4.24779 5.03269 3.85726 4.64217C3.46674 4.25165 2.83357 4.25165 2.44305 4.64217L1.79236 5.29286C-0.116985 7.2022 -0.116985 10.2979 1.79236 12.2072C3.70171 14.1166 6.79738 14.1166 8.70672 12.2072L9.35713 11.5568C9.74765 11.1663 9.74765 10.5331 9.35713 10.1426C8.9666 9.75207 8.33344 9.75207 7.94291 10.1426L7.29251 10.793C6.16421 11.9213 4.33488 11.9213 3.20658 10.793C2.07828 9.6647 2.07828 7.83537 3.20658 6.70707L3.85726 6.05638Z' fill='#076aff'/>" +
                    "<path d='M8.20674 7.2071C8.59727 6.81658 8.59727 6.18341 8.20674 5.79289C7.81622 5.40237 7.18305 5.40237 6.79253 5.79289L5.73187 6.85355C5.34134 7.24408 5.34134 7.87724 5.73187 8.26776C6.12239 8.65829 6.75556 8.65829 7.14608 8.26776L8.20674 7.2071Z' fill='#076aff'/>" +
                    "</svg>" +
                    "</a>",
                ])}
              ></div>
              <div class="f-payment-modal__actions">
                <FButton
                  loading={checking.value}
                  color="greyscale_1"
                  onClick={handlePaid}
                >
                  {t("$vuetify.uikit.paid")}
                </FButton>
                <FButton color="greyscale_6" onClick={handleOpenInApp}>
                  {t("$vuetify.uikit.open_in_mixin")}
                </FButton>
              </div>
            </div>
          </div>
        </FModal>

        <FPayingModal
          modelValue={!qr.value && !hideCheckingModal.value && checking.value}
          onCancel={cancel}
        />
      </div>
    );
  },
});
