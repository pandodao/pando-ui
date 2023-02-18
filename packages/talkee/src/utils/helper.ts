import { store } from "./storeage";
import { STORE_KEYS } from "../constants";
import { StoreData } from "../types";

export { format as formatTime } from "@foxone/utils/time";

export function getToken(): StoreData {
  try {
    return JSON.parse(store.get(STORE_KEYS.TOKEN) ?? "");
  } catch (error) {
    return { token: "", channel: "" };
  }
}

export function setToken(params: StoreData) {
  store.set(STORE_KEYS.TOKEN, JSON.stringify(params));
}

export function urlify(text: string) {
  const breakRegex = /\n\r?/g;
  text = text?.replace(breakRegex, "<br/>");

  return text;
}
