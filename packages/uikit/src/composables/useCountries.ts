import { computed, onMounted, ref } from "vue";
import axios from "axios";

import type { Ref } from "vue";

export function useCountries(filter: Ref<string>) {
  const countries = ref<{ code: string; name: string }[]>([]);

  onMounted(async () => {
    const resp = await axios.get(
      "https://static.fox.one/assets/country-code.json"
    );
    const data = resp.data;

    countries.value = Object.keys(data).map((k) => ({
      name: data[k].name,
      code: String(data[k].dialCode) + "",
    }));
  });

  const filtered = computed(() => {
    return countries.value.filter((country) => {
      const name = String(country.name).toLowerCase();
      const code = String(country.code).toLowerCase();

      return name.startsWith(filter.value) || code.startsWith(filter.value);
    });
  });

  return { countries, filtered };
}
