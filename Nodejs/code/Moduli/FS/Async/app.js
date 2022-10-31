const { readFile, writeFile } = require("fs");

readFile("./unos.txt", "utf8", (err, data) => {
	if(err) return console.error(err);
	console.log(`Data from a file sync: ${data}`);
	writeFile("./ispis.txt", `Iz fajla je iščitano: ${data}\n`, (err) => {
		if(err) return console.error(err);
		console.log("Ispis gotov");
	})
})

