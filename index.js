const fs = require("fs");
const rename = require("./core");
module.exports = rename.bind(null, fs.readdirSync, fs.renameSync);
