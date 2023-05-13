import gulp from "gulp";
import { clear, pug, css, scss, server, js, img } from "./tasks.babel";
import { config, path } from "./config.babel";

const { watch, series, parallel } = gulp;

const watcher = () => {
  watch(path.pug.watch, { delay: 500 }, pug);
  watch(path.scss.watch, { delay: 500 }, scss);
  watch(path.js.watch, { delay: 500 }, js);
  watch(path.img.watch, { delay: 500 }, img);
};

const dev = series(
  clear,
  parallel(pug, scss, js, img),
  parallel(watcher, server)
);
const build = series(clear, parallel(pug, scss, js, img));

export { clear, css, scss, pug, js, img };
export default config.isProd ? build : dev;
