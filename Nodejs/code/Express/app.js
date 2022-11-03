const express = require("express");
const {StatusCodes} = require("http-status-codes");
const userRouter = require("./routers/users");

const server = express();

server.use((req, res, next) => {
	console.log(`${req.method} - ${req.url}`);
	next();
})

server.use(express.static("public"));
server.use(express.json());

server.use("/api/users", userRouter)

server.listen(5000, () => console.log(`Server sluša na portu 5000...`))