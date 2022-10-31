const { readFileSync, writeFileSync } = require("fs");

const data = readFileSync("./unos.txt", "utf8");

console.log(`Data from a file sync: ${data}`);

writeFileSync("./ispis1.txt", `Iz fajla je iščitano: ${data}\n`, {encoding: "utf-8"});
writeFileSync("./ispis2.txt", `Iz fajla je iščitano: ${data}\n`, {encoding: "utf-8", flag: "a"});

