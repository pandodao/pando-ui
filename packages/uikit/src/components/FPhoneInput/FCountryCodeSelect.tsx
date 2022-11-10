import { defineComponent, ref } from "vue";
import { useLocale } from "vuetify";
import { VIcon, VList, VLazy } from "vuetify/components";
import { FListItem } from "../FListItem";
import { FModal } from "../FModal";
import { FSearchInput } from "../FSearchInput";
import { useCountries } from "../../composables";

import "./FCountryCodeSelect.scss";

export const FCountryCodeSelect = defineComponent({
  name: "FCountryCodeSelect",

  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    code: {
      type: String,
      default: "",
    },
  },

  emits: {
    "update:code": (value: string) => true,
    "update:dialog": (value: Boolean) => true,
  },

  setup(props, { emit }) {
    const { t } = useLocale();

    const filter = ref("");
    const { filtered } = useCountries(filter);

    const handleSelect = (code) => {
      emit("update:code", code);
      emit("update:dialog", false);
    };

    return () => (
      <FModal
        title={t("$vuetify.uikit.select_phone_code")}
        modelValue={props.dialog}
        onUpdate:modelValue={(v) => emit("update:dialog", v)}
      >
        {{
          activator: ({ props: { onClick } }) => {
            return (
              <div class="f-country-code-select__field" onClick={onClick}>
                {props.code ? (
                  <span class="mr-1">{props.code || "code"}</span>
                ) : (
                  <VIcon>$question</VIcon>
                )}
                <VIcon size="16">$expand</VIcon>
              </div>
            );
          },
          default: () => (
            <div class="f-country-code-select">
              <div class="px-4 mb-2">
                <FSearchInput v-model={filter.value} />
              </div>

              <VList class="f-country-code-select__list">
                {filtered.value.map((country) => {
                  return (
                    <VLazy minHeight={48}>
                      <FListItem
                        title={country.code + " " + country.name}
                        value={country.code}
                        onClick={() => handleSelect(country.code)}
                      />
                    </VLazy>
                  );
                })}
              </VList>
            </div>
          ),
        }}
      </FModal>
    );
  },
});
