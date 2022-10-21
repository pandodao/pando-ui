const cheerio = require("cheerio");
const { optimize } = require("svgo");

// disable attrs and removeAttrs optimize
// so that handle color in svg file manaully

const processSvg = (svg, style) => {
  let plugins = [
    { name: "convertShapeToPath", active: false },
    { name: "removeTitle", active: true },
  ];

  const optimized = optimize(svg, { plugins });
  const $ = cheerio.load(optimized.data);

  return $("body").children().html();
};

const getAttrs = (svg, style) => {
  const $ = cheerio.load(svg);
  const viewBox = $("svg").attr("viewBox");
  const width = $("svg").attr("width");
  const height = $("svg").attr("height");

  const base = {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: viewBox,
    "aria-hidden": "true",
  };

  const fill = {};

  const stroke = { fill: "none" };

  const attrs = Object.assign({}, base, style === "fill" ? fill : stroke);

  return Object.keys(attrs)
    .map((key) => `${key}="${attrs[key]}"`)
    .join(" ");
};

const getElementCode = (componentName, svg, style) => {
  const attrs = getAttrs(svg, style);
  const content = processSvg(svg, style);

  const str = `
export const ${componentName} = function () {
  return (
    <svg ${attrs}>
      ${content}
    </svg>
  )
}
`;

  return str;
};

module.exports = { getAttrs, getElementCode };
