import gulp from "gulp";
import plumber from "gulp-plumber";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpIf from "gulp-if";
import { config, path } from "../config.babel";
import { getPathByTask } from "../util.babel";

export const font = () => {
  return gulp
    .src(path.font.src)
    .pipe(plumber())
    .pipe(newer(getPathByTask("font")))
    .pipe(gulp.dest(getPathByTask("font")))
    .pipe(config.browserSync.stream());
};
