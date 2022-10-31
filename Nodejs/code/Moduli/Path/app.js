const path = require("path");

console.log(`Separator: ${path.sep}`);
const globalsAppPath = path.join(__dirname, "..", "..", "Globals", "app.js");
console.log(`Putanja do globals primera: ${globalsAppPath}`);
const basename = path.basename(globalsAppPath);
console.log(`Basename: ${basename}`);