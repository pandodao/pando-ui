import { defineComponent, ref, watch } from "vue";
import type { Ref } from "vue";
import { useLocale } from "vuetify";

import { VOverlay } from "vuetify/components";
import { VBtn } from "vuetify/components";

import "./FPayingModal.scss";

export const FPayingModal = defineComponent({
  name: "FPayingModal",

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
  },

  emits: {
    "update:modelValue": (v: boolean) => true,
    cancel: () => true,
  },

  setup(props, { emit }) {
    const { t } = useLocale();
    const timer: Ref<null | any> = ref(null);
    const lasting = ref(false);

    const handleModalChange = (value) => {
      lasting.value = false;

      if (timer.value) {
        clearTimeout(timer.value);
      }

      if (value) {
        timer.value = setTimeout(() => {
          lasting.value = true;
        }, 30000);
      }
    };

    watch(() => props.modelValue, handleModalChange);

    return () => (
      <VOverlay
        modelValue={props.modelValue}
        class="f-payment-loading d-flex align-center justify-center"
        persistent
        onUpdate:modelValue={(v) => emit("update:modelValue", v)}
      >
        <div class="f-spinner__wrapper">
          {Array.from({ length: 4 }).map(() => (
            <span class="f-spinner__rect" />
          ))}
        </div>

        <div class="f-payment__hint text-center text-subtitle-2 pa-5">
          {lasting.value
            ? t("$vuetify.uikit.lasting_tip")
            : props.text || t("$vuetify.uikit.checking_payment")}
        </div>

        <div class="f-payment__actions">
          <VBtn
            rounded="pill"
            variant="outlined"
            color="greyscale_7"
            onClick={() => emit("cancel")}
          >
            {t("$vuetify.uikit.cancel")}
          </VBtn>
        </div>
      </VOverlay>
    );
  },
});
