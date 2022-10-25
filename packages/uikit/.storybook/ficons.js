import * as icons from "@foxone/icons";

export default Object.keys(icons).reduce((m, k) => {
  m[k] = icons[k];

  return m;
}, {});
