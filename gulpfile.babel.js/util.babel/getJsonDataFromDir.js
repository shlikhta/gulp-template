import fs from "fs";
import path from "path";

export const getJsonDataFromDir = (dirPath) => {
  let data = {};
  fs.readdir(dirPath, function (err, files) {
    const jsonType = new RegExp(/.json$/, "i");

    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    //listing all files using forEach
    files.forEach(function (file) {
      if (jsonType.test(file)) {
        const fileName = path.parse(file).name;

        fs.readFile(dirPath + "/" + file, "utf8", (err, jsonString) => {
          if (err) {
            console.log("File read failed:", err);
            return;
          }
          data[fileName] = JSON.parse(jsonString);
        });
      }
    });
  });

  return data;
};
