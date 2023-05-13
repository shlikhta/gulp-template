import path from "path";
import { path as appPath } from "./path";
import fs from "fs";
import browserSync from "browser-sync";
import { getJsonDataFromDir } from "../util.babel";

const isProd = process.argv.includes("--production");

export const config = {
  isProd,
  isDev: !isProd,
  browserSync,
  css: {
    sourcemaps: true,
  },
  img: {
    verbose: true,
  },
  js: {
    sourcemaps: true,
  },
  pug: {
    indent_size: true,
    data: getJsonDataFromDir(appPath.pathData),
  },
  scss: {
    sourcemaps: true,
  },
};
