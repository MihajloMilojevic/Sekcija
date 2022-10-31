const http = require("http");

const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			res.end("<h1>Home</h1>");
			break;
		case "/about":
			res.end("<h1>About</h1>");
			break;
		case "/contact":
			res.end("<h1>Contact</h1>");
			break;
		default:
			res.end(`
				<h1>404 - Stranica ne postoji</h1> 
				<a href='/'>Home page</a>
			`)
			break;
	}
})

server.listen(5000);