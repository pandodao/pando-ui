import { ref, computed } from "vue";
import { getToken, setToken } from "../utils/helper";
import { SortMethod, Asset, StoreData, User } from "../types";

const token = ref(getToken().token);
const channel = ref(getToken().channel);
const showChat = ref(false);
const apiBase = ref("");
const wsBase = ref("");
const wsApiBase = ref("");
const clientId = ref("");
const siteId = ref("");
const slug = ref("");
const sort = ref<SortMethod>(SortMethod.FavorCount);
const total = ref(0);
const limit = 15;
const profile = ref<any>(null);
const loading = ref(false);
const logging = ref(false);
const showLink = ref(false);
const topComments = ref<any[]>([]);
const assets = ref<Asset[]>([]);

const logged = computed(() => Boolean(token.value));

export function useGlobals() {
  const loggin = function (params: StoreData) {
    token.value = params.token;
    setToken(params);
  };

  const logout = function () {
    token.value = "";
    setToken({ channel: "", token: "" });
  };

  return {
    token,
    channel,
    logged,
    siteId,
    clientId,
    apiBase,
    showChat,
    wsBase,
    wsApiBase,
    slug,
    sort,
    total,
    loading,
    logging,
    profile,
    showLink,
    topComments,
    limit,
    assets,

    loggin,
    logout,
  };
}
