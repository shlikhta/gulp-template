import gulp from "gulp";
import plumber from "gulp-plumber";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpIf from "gulp-if";
import { config, path } from "../config.babel";
import { getPathByTask } from "../util.babel";

export const img = () => {
  return gulp
    .src(path.img.src)
    .pipe(plumber())
    .pipe(newer(getPathByTask("img")))
    .pipe(webp())
    .pipe(gulp.dest(getPathByTask("img")))
    .pipe(gulp.src(path.img.src))
    .pipe(
      gulpIf(
        config.isProd,
        imagemin({
          verbose: config.img.verbose,
        })
      )
    )
    .pipe(gulp.dest(getPathByTask("img")))
    .pipe(config.browserSync.stream());
};
