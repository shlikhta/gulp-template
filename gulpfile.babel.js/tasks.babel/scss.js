import gulp from "gulp";
import { config, path } from "../config.babel";
import plumber from "gulp-plumber";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import csso from "gulp-csso";
import rename from "gulp-rename";
import gulpIf from "gulp-if";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import size from "gulp-size";
import webpCss from "gulp-webp-css";
import { getPathByTask } from "../util.babel";

const sass = gulpSass(dartSass);

export const scss = () => {
  return gulp
    .src(path.scss.src)
    .pipe(plumber())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "main.css" }))
    .pipe(
      gulp.dest(getPathByTask("scss"), { sourcemaps: config.scss.sourcemaps })
    )
    .pipe(gulpIf(config.isProd, rename({ suffix: ".min" })))
    .pipe(gulpIf(config.isProd, csso()))
    .pipe(gulpIf(config.isProd, size({ title: "main.min.css" })))
    .pipe(
      gulpIf(
        config.isProd,
        gulp.dest(getPathByTask("scss"), { sourcemaps: config.scss.sourcemaps })
      )
    )
    .pipe(config.browserSync.stream());
};
