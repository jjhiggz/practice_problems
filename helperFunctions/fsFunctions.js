const fsHandler = require("fs").promises;
const path = require("path");

const readMatrix = async (relativePath, dirname, isNumber = true) => {
  const text = await fsHandler.readFile(`${dirname}/${relativePath}`, {
    encoding: "utf8",
  });
  return text
    .trim()
    .split(/\n/)
    .map((row) => row.split(" ").map((char) => (isNumber ? +char : char)));
};

module.exports = {
  readMatrix,
};
