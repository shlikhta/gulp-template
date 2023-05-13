import browserSync from "browser-sync";
import { config, path } from "../config.babel";

export const server = () => {
  browserSync.init({
    server: {
      baseDir: config.isProd ? path.pathBuild : path.pathDev,
    },
  });
};
