import gulp from "gulp";
// import plumber from "gulp-plumber";
// import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
// import webp from "gulp-webp";
// import gulpIf from "gulp-if";
// import favicons  from "gulp-favicons";
import { config, path } from "../config.babel";
import { getPathByTask } from "../util.babel";

export const favicon = () => {
  return gulp
    .src(path.favicon.src)
    .pipe(newer(getPathByTask("favicon")))
   /* .pipe(
      favicons({
        // appName: 'My App',
        // appShortName: 'App',
        // appDescription: 'This is my application',
        // developerName: 'Hayden Bleasel',
        // developerURL: 'http://haydenbleasel.com/',
        background: '#020307',
        // path: 'favicons/',
        // url: 'http://haydenbleasel.com/',
        // display: 'standalone',
        // orientation: 'portrait',
        // scope: '/',
        // start_url: '/?homescreen=1',
        // version: 1.0,
        // html: 'index.html',
        // pipeHTML: false,
      })
    )*/
    .pipe(gulp.dest(getPathByTask("favicon")))
    .pipe(config.browserSync.stream());
};
