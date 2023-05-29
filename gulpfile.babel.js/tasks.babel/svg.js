import gulp from "gulp";
import plumber from "gulp-plumber";
import svgSprite from "gulp-svg-sprite";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpIf from "gulp-if";
import { config, path } from "../config.babel";
import { getPathByTask } from "../util.babel";

export const svg = () => {
  return gulp
    .src(path.svg.src)
    .pipe(plumber())
    // .pipe(newer(getPathByTask("svg")))
    .pipe(svgSprite(config.svg))
    .on('error', function(error) {
      console.log('Errorr !!!!!!!!!!! ', error)
    })
/*    .pipe(webp())
    .pipe(gulp.dest(getPathByTask("svg")))
    .pipe(
      gulpIf(
        config.isProd,
        gulp.src(path.img.src)
      )
    )
    .pipe(
      gulpIf(
        config.isProd,
        imagemin({
          verbose: config.img.verbose,
        })
      )
    )*/
    .pipe(
      gulpIf(
        config.isProd,
        gulp.dest(getPathByTask("svg"))
      )
    )
    .pipe(config.browserSync.stream());
};
