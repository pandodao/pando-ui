import { ref, computed } from "vue";
import { getToken, setToken } from "../utils/helper";

const token = ref(getToken());
const apiBase = ref("");
const clientId = ref("");
const siteId = ref("");
const slug = ref("");
const sort = ref("favor_count");
const total = ref(0);
const profile = ref<any>(null);
const loading = false;
const topComments = ref<any[]>([]);
const topSubComments = ref<any[]>([]);

const logged = computed(() => Boolean(token.value));

export function useGlobals() {
  const loggin = function (_token: string) {
    token.value = _token;
    setToken(_token);
  };

  const logout = function () {
    token.value = "";
    setToken("");
  };

  return {
    token,
    logged,
    siteId,
    clientId,
    apiBase,
    slug,
    sort,
    total,
    loading,
    profile,
    topComments,
    topSubComments,

    loggin,
    logout,
  };
}
