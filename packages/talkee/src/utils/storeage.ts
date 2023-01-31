import { STORE_PREFIX } from "../constants";

export const store = {
  get: (key: string) => localStorage.getItem(STORE_PREFIX + key),

  set: (key: string, value: any) => {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }

    return localStorage.setItem(STORE_PREFIX + key, value);
  },

  remove: (key: string) => localStorage.removeItem(STORE_PREFIX + key),
};

export default store;
