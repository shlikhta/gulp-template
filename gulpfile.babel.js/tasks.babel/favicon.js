import gulp from "gulp";
import newer from "gulp-newer";
import favicons  from "gulp-favicons";
import { config, path } from "../config.babel";
import { getPathByTask } from "../util.babel";
import plumber from "gulp-plumber";

export const favicon = () => {
  return gulp
    .src(path.favicon.src)
    .pipe(plumber())
    .pipe(newer(getPathByTask("favicon")))
    .pipe(gulp.dest(getPathByTask("favicon")))
    .pipe(
      favicons(config.favicon)
    )
    .pipe(gulp.dest(getPathByTask("favicon")))
};
