import { store } from "./storeage";
import { STORE_KEYS } from "../constants";

export { format as formatTime } from "@foxone/utils/time";

export function getToken() {
  return store.get(STORE_KEYS.TOKEN);
}

export function setToken(value: string) {
  store.set(STORE_KEYS.TOKEN, value);
}

export function urlify(text: string) {
  const breakRegex = /\n\r?/g;
  text = text?.replace(breakRegex, "<br/>");

  return text;
}
