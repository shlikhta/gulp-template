import { config, path } from "../config.babel";

export const getPathByTask = (task = "") => {
  if (!task) return false;

  return path[task][config.isProd ? "build" : "dev"];
};
