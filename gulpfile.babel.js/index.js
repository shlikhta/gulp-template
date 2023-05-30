import gulp from "gulp";
import { clear, pug, css, scss, server, js,font, img,deploy , favicon} from "./tasks.babel";
import { config, path } from "./config.babel";

const { watch, series, parallel } = gulp;

const watcher = () => {
  watch(path.pug.watch, { delay: 500 }, pug);
  watch(path.scss.watch, { delay: 500 }, scss);
  watch(path.js.watch, { delay: 500 }, js);
  watch(path.img.watch, { delay: 500 }, img);
  watch(path.font.watch, { delay: 500 }, font);
};

const dev = series(
  clear,
  favicon,
  parallel(pug, scss, js, img, font),
  parallel(watcher, server)
);
const build = series(clear, favicon, parallel(pug, scss, js, img, font));

export { clear, css, scss, pug, js, img,font, deploy, favicon };
export default config.isProd ? build : dev;
