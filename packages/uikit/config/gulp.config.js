const { dest, series, src, task } = require("gulp");
const path = require("path");
const ts = require("gulp-typescript");
const replace = require("gulp-replace-path");
const babel = require("gulp-babel");
const sass = require("gulp-sass")(require("sass"));
const tildeImporter = require("node-sass-tilde-importer");
const autoprefixer = require("gulp-autoprefixer");
const { readFileSync, writeFileSync, watch } = require("fs");

const srcDir = path.resolve(__dirname, "../src");
const destDir = path.resolve(__dirname, "../lib");
const tsProject = ts.createProject(path.resolve(__dirname, "../tsconfig.json"));

function compileScripts() {
  const scripts = [
    `${srcDir}/**/*.{ts,tsx,js,jsx}`,
    `!${srcDir}/**/*.stories.{ts,tsx,js,jsx}`,
  ];

  return src(scripts)
    .pipe(replace(/\.scss/g, ".css"))
    .pipe(babel({ root: "../" }))
    .pipe(dest(destDir));
}

function compileStyles() {
  const styles = `${srcDir}/**/*.scss`;

  return src(styles)
    .pipe(sass({ importer: tildeImporter }))
    .pipe(autoprefixer())
    .pipe(dest(destDir));
}

function copyFiles() {
  const files = [`${srcDir}/**/*.json`];

  return src(files).pipe(dest(destDir));
}

exports.default = series(compileScripts, compileStyles, copyFiles);
