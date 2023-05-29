import gulp from "gulp";
import plumber from "gulp-plumber";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpIf from "gulp-if";
import { config, path } from "../config.babel";
import { getPathByTask } from "../util.babel";

export const favicon = () => {
  return gulp
    .src(path.favicon.src)
    .pipe(newer(getPathByTask("favicon")))
    .pipe(gulp.dest(getPathByTask("favicon")))
    .pipe(config.browserSync.stream());
};
