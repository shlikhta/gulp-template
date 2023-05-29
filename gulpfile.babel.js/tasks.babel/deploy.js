import gulp from "gulp";
import gulpGhPages from "gulp-gh-pages";
import {path} from "../config.babel";

export const deploy = () => {
    return gulp.src(path.deploy.src).pipe(gulpGhPages())
}
