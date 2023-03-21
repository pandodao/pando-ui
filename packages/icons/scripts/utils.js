const upperFirst = require("lodash/upperFirst");
const camelCase = require("lodash/camelCase");

const prefix = "FIcon";

const parseName = (name, style) => {
  const cleanName = name.replace(/\//g, "-");

  if (style === "default") {
    return { componentName: "Icon" + upperFirst(camelCase(cleanName)) };
  }

  let baseName = prefix + upperFirst(camelCase(cleanName));

  if (style === "fill") {
    baseName += upperFirst(style);
  }

  return { componentName: baseName };
};

module.exports = { parseName };
