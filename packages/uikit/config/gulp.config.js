const { dest, series, src, watch } = require("gulp");
const path = require("path");
const tsc = require("gulp-typescript");
const replace = require("gulp-replace-path");
const babel = require("gulp-babel");
const run = require("gulp-run");
const sass = require("gulp-sass")(require("sass"));
const tildeImporter = require("node-sass-tilde-importer");
const autoprefixer = require("gulp-autoprefixer");
const srcDir = path.resolve(__dirname, "../src");
const destDir = path.resolve(__dirname, "../lib");
const gendtsPath = path.relative(__dirname, "./gendts.js");

const scripts = [
  `${srcDir}/**/*.{ts,tsx,js,jsx}`,
  `!${srcDir}/**/*.stories.{ts,tsx,js,jsx}`,
];
const styles = `${srcDir}/**/*.scss`;
const files = [`${srcDir}/**/*.json`];

function compileScripts() {
  const tsProject = tsc.createProject("../tsconfig.lib.json");

  return src(scripts)
    .pipe(replace(/\.scss/g, ".css"))
    .pipe(tsProject())
    .pipe(babel({ root: "../" }))
    .pipe(dest(destDir));
}

function compileStyles() {
  return src(styles)
    .pipe(sass({ importer: tildeImporter }))
    .pipe(autoprefixer())
    .pipe(dest(destDir));
}

function copyFiles() {
  return src(files).pipe(dest(destDir));
}

function gendts() {
  return run(`node ${gendtsPath}`).exec();
}

exports.default = series(compileScripts, gendts, compileStyles, copyFiles);

exports.dev = function () {
  watch(scripts, { ignoreInitial: false }, compileScripts);
  watch(styles, { ignoreInitial: false }, compileStyles);
  watch(files, { ignoreInitial: false }, copyFiles);
};
