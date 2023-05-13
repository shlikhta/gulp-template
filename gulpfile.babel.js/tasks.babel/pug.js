import gulp from "gulp";
import pugs from "gulp-pug";
import plumber from "gulp-plumber";
import beautify from "gulp-beautify";
import gulpIf from "gulp-if";
import webpHtml from "gulp-webp-html";
import news from "../../src/data/news.json";
import { config, path } from "../config.babel";
import { getJsonDataFromDir, getPathByTask } from "../util.babel";

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
        beautify.html({ indent_size: config.pug.indent_size })
      )
    )
    .pipe(gulp.dest(getPathByTask("pug")))
    .pipe(config.browserSync.stream());
};
