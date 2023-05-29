import gulp from "gulp";
import pugs from "gulp-pug";
import plumber from "gulp-plumber";
import formatHTML from 'gulp-format-html'
import gulpIf from "gulp-if";
import webpHtml from 'gulp-webp-html-nosvg'
import { config, path } from "../config.babel";
import {  getPathByTask } from "../util.babel";

export const pug = () => {
  return gulp
    .src(path.pug.src)
    .pipe(plumber())
    .pipe(
      pugs({
        data: config.pug.data,
      })
    )
    .pipe(webpHtml())
    .pipe(
      gulpIf(
        config.isProd,
        formatHTML()
      )
    )
    .pipe(gulp.dest(getPathByTask("pug")))
    .pipe(config.browserSync.stream());
};
