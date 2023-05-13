import gulp from "gulp";
import plumber from "gulp-plumber";
import concat from "gulp-concat";
import cssimport from "gulp-cssimport";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import gulpIf from "gulp-if";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import { config, path } from "../config.babel";
import webpCss from "gulp-webp-css";
import { getPathByTask } from "../util.babel";

export const css = () => {
  return gulp
    .src(path.css.src, { sourcemaps: config.css.sourcemaps })
    .pipe(plumber())
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "main.css" }))
    .pipe(
      gulp.dest(getPathByTask("css"), { sourcemaps: config.css.sourcemaps })
    )
    .pipe(gulpIf(config.isProd, rename({ suffix: ".min" })))
    .pipe(gulpIf(config.isProd, csso()))
    .pipe(gulpIf(config.isProd, size({ title: "main.min.css" })))
    .pipe(
      gulpIf(
        config.isProd,
        gulp.dest(getPathByTask("css"), { sourcemaps: config.css.sourcemaps })
      )
    )
    .pipe(config.browserSync.stream());
};
