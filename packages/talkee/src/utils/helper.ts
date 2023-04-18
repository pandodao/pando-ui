import { store } from "./storeage";
import { STORE_KEYS } from "../constants";
import { StoreData, Asset, MixinAsset } from "../types";

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

export function colorize(userId) {
  const colors = [
    "#3683FB", // light blue
    "#5252FF", // blue
    "#FFA500", // orange
    "#009A50", // green
    "#38A3A5", // light blue
    "#22577A", // dark blue
    "#812DD3", // purple
    "#FF7455", // red
    "#1B1B1B", // black
    "#2F5D62", // dark teal
    "#222831", // dark gray
    "#FA7D35", // light orange
    "#D63D3D", // red
    "#F23CA9", // pink
  ];

  const pos = userId % colors.length;
  return colors[pos];
}

export function convertMixinAsset(asset: Asset): MixinAsset {
  return {
    id: asset.asset_id,
    symbol: asset.symbol,
    logo: asset.icon_url,
    name: asset.name,
    chainLogo: asset.icon_url,
  };
}