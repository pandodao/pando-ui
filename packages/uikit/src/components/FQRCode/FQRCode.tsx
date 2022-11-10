import { computed, defineComponent, ref, watchEffect } from "vue";
import { convertToUnit } from "vuetify/lib/util/helpers.mjs";
import QRCode from "qrcode";

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

    watchEffect(() => {
      props.text &&
        QRCode.toCanvas(canvasRef.value, props.text, {
          width: props.size,
          margin: 1,
        });
    });

    return () => (
      <canvas ref={canvasRef} class="f-qrcode__canvas" style={styles.value} />
    );
  },
});
