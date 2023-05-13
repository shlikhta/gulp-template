import del from "del";
import { config, path } from "../config.babel";

export const clear = () => {
  return del(config.isProd ? path.pathBuild : path.pathDev);
};
