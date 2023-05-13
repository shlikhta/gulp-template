const pathSrc = "./src";
const pathDev = "./public";
const pathBuild = "./build";

export const path = {
  pathSrc,
  pathDev,
  pathBuild,
  pathData: pathSrc + "/data",
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dev: pathDev,
    build: pathBuild,
  },
  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dev: pathDev + "/css",
    build: pathBuild + "/css",
  },
  scss: {
    src: pathSrc + "/scss/*.{sass,scss}",
    watch: pathSrc + "/scss/**/*.{sass,scss}",
    dev: pathDev + "/css",
    build: pathBuild + "/css",
  },
  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dev: pathDev + "/js",
    build: pathBuild + "/js",
  },
  img: {
    src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dev: pathDev + "/img",
    build: pathBuild + "/img",
  },
};
