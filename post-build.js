const { readdirSync, writeFileSync, renameSync } = require("fs");

const dir = "out";

const getFiles = dir => readdirSync(dir);

const getValidItems = dir =>
  getFiles(dir).filter(
    file => file.includes(".html") && !file.includes("index")
  );

removeFileExtension = () =>
  getValidItems(dir).map(file => {
    const path = file.split(".");
    const newName = path[0];
    renameSync(`${dir}/${file}`, `${dir}/${newName}`);
  });

removeFileExtension();
