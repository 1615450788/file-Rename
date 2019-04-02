const path = require("path");

/**
 * rename
 * @param {function} readdirSync
 * @param {function} renameSync
 * @param {string} folder
 * @param {string|RegExp} match
 * @param {string|function} newName
 */
function rename(
  readdirSync,
  renameSync,
  folder = "./rename",
  match = ".js",
  newName = ".ts"
) {
  const reg = typeof match === "string" ? new RegExp(match) : match;
  const dir = readdirSync(folder);
  dir.map(p => {
    const filePath = path.join(folder, p);
    if (reg.test(p) && /\./.test(p)) {
      const newPath = path.join(folder, p.replace(reg, newName));
      renameSync(filePath, newPath);
    } else {
      rename(readdirSync, renameSync, filePath, match, newName);
    }
  });
}

module.exports = rename;
