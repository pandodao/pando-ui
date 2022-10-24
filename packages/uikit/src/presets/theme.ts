import { ThemeDefinition } from "vuetify";

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#000000",
    error: "#f44c4c",
    error_bg: "#fbf2f2",
    error_emphsize: "#75080a",
    info: "#0f65c7",
    success: "#2cc94e",
    success_bg: "#1b4324",
    warning: "#f58721",
    warning_bg: "#fcf8f0",
    warning_emphsize: "#75080a",
    greyscale_1: "#000000",
    greyscale_2: "#494949",
    greyscale_3: "#808080",
    greyscale_4: "#cccccc",
    greyscale_5: "#ebebeb",
    greyscale_6: "#f5f5f5",
    greyscale_7: "#ffffff",
  },
};

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#ffffff",
    error: "#f67070",
    error_bg: "#4a2222",
    error_emphsize: "#f34a4d",
    success: "#56d471",
    success_bg: "#1B4324",
    warning: "#f79f4d",
    warning_bg: "#5c3a13",
    warning_emphsize: "#ffe08f",
    info: "#79a4e4",
    greyscale_1: "#ffffff",
    greyscale_2: "#d8d8d8",
    greyscale_3: "#9f9f9f",
    greyscale_4: "#656565",
    greyscale_5: "#3c3c3c",
    greyscale_6: "#303030",
    greyscale_7: "#000000",
  },
};
