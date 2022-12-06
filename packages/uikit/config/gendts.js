const path = require("path");
const glob = require("glob");
const { readFileSync, writeFileSync, readdirSync, fstat } = require("fs");
const srcDir = path.resolve(__dirname, "../src");
const destDir = path.resolve(__dirname, "../lib");
const execSync = require("@foxone/dev/scripts/execSync");
const argv = require("yargs")
  .options({
    watch: { description: "watch file change", type: "boolean" },
  })
  .strict().argv;

execSync("yarn foxone-exec-tsc");

glob(`${srcDir}/components/**/*.tsx`, function (error, files) {
  const index = readFileSync(`${destDir}/index.d.ts`).toString();
  const shims = readFileSync(`${srcDir}/shims.d.ts`).toString();

  if (error) {
    console.log(error);

    return;
  }

  const components = files.reduce((str, file) => {
    const name = path.parse(file).name;
    return (
      str +
      `    ${name}: typeof import("@foxone/uikit/components")["${name}"];\n`
    );
  }, "");

  writeFileSync(
    `${destDir}/index.d.ts`,
    index + "\n" + shims.replace(/^\s+\/\/ @generate-components$/gm, components)
  );
});
