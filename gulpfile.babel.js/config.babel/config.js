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
  deploy: {
    sourcemaps: true,
  },
  pug: {
    beautify: {
      indent_size: true,
      extra_liners: ['a', 'button','img', 'span']
    },
    data: getJsonDataFromDir(appPath.pathData),
  },
  scss: {
    sourcemaps: true,
  },
  favicon: {
    appName: '',
    appShortName: '',
    appDescription: '',
    start_url: '',
    path: 'favicons/',
    icons: {
      favicons: true,
      appleIcon: true,
      android: false,
      windows: false,
      yandex: false,
      coast: false,
      firefox: false,
      appleStartup: false,
    },
    pipeHTML: false,
  },
  svg: {
    mode: {
      css: { // Activate the «css» mode
        render: {
          css: true // Activate CSS output (with default options)
        }
      }
    }
  }

};
