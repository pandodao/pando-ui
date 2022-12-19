import { computed, defineComponent, onMounted, ref, watchEffect } from "vue";
import { convertToUnit } from "vuetify/lib/util/helpers.mjs";
import QRious from "qrious";

import "./FQRCode.scss";

export const FQRCode = defineComponent({
  name: "FQRCode",

  props: {
    text: { type: String, default: "" },
    size: { type: Number, default: 128 },
  },

  setup(props) {
    const canvasRef = ref();
    const qr = ref<any>();

    const styles = computed(() => {
      return {
        width: convertToUnit(props.size),
        height: convertToUnit(props.size),
      };
    });

    onMounted(() => {
      qr.value = new QRious({
        size: props.size,
        element: canvasRef.value,
      });
    });

    watchEffect(() => {
      qr.value?.set({ value: props.text });
    });

    return () => (
      <canvas ref={canvasRef} class="f-qrcode__canvas" style={styles.value} />
    );
  },
});
