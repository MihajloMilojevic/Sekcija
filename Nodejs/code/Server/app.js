const http = require("http");
const {readFileSync} = require("fs");

const home = readFileSync("./index.html");
const about = readFileSync("./about.html");
const contact = readFileSync("./contact.html");
const style = readFileSync("./style.css");
const Error404 = readFileSync("./404.html");

const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(home);
			res.end();
			break;
		case "/about":
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(about);
			res.end();
			break;
		case "/contact":
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write(contact);
			res.end();
			break;
		case "/style.css":
			res.writeHead(200, {"Content-Type": "text/css"});
			res.write(style);
			res.end();
			break;
		case "/api/user": {
			switch(req.method.toUpperCase()) {
				case "GET": {
					res.writeHead(200, {"Content-Type": "application/json"});
					res.write({
						ok: true, 
						user: {
							email: "example@gmail.com",
							firstName: "John",
							lastName: "Doe"
						}
					});
					res.end()
					break;
				}
				default: {
					res.writeHead(404, {"Content-Type": "application/json"});
					res.write({
						ok: false, 
						message: `${req.method.toUpperCase()} ${req.url} doesn't exist`
					});
					res.end()
					break;
				}
			}
		}
		default:
			res.writeHead(404, {"Content-Type": "text/html"});
			res.write(Error404);
			res.end()
			break;
	}
})

server.listen(5000);