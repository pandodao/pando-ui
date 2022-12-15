import { computed, defineComponent, ref, watchEffect } from "vue";
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

    const styles = computed(() => {
      return {
        width: convertToUnit(props.size),
        height: convertToUnit(props.size),
      };
    });

    const qr = new QRious({ size: props.size });

    watchEffect(() => {
      qr.value = props.text;
    });

    return () => (
      <canvas ref={canvasRef} class="f-qrcode__canvas" style={styles.value} />
    );
  },
});
