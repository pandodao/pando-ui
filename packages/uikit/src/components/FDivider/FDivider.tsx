import { computed, defineComponent } from "vue";
import { VDivider } from "vuetify/components";
import { convertToUnit } from "vuetify/lib/util/helpers.mjs";

export const FDivider = defineComponent({
  name: "FDivider",

  props: {
    color: {
      type: String,
      default: "greyscale_6",
    },
    size: {
      type: [String, Number],
      default: 1,
    },
  },

  setup(props) {
    const styles = computed(() => {
      return {
        borderWidth: `${convertToUnit(props.size)} 0 0 0`,
        borderColor: `rgb(var(--v-theme-${props.color}))`,
      };
    });

    return () => <VDivider style={styles.value} />;
  },
});
