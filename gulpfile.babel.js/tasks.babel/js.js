import gulp from "gulp";
import plumber from "gulp-plumber";
import babel from "gulp-babel";
import webpack from "webpack-stream";
import rename from "gulp-rename";
import gulpIf from "gulp-if";
import { config, path } from "../config.babel";
import { getPathByTask } from "../util.babel";

export const js = () => {
  return gulp
    .src(path.js.src, { sourcemaps: config.js.sourcemaps })
    .pipe(plumber())
    .pipe(babel())
    .pipe(
      webpack({
        mode: config.isProd ? "production" : "development",
      })
    )
    .pipe(gulpIf(config.isProd, rename({ suffix: ".min" })))
    .pipe(gulp.dest(getPathByTask("js"), { sourcemaps: config.js.sourcemaps }))
    .pipe(config.browserSync.stream());
};
