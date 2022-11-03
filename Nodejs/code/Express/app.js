require("dotenv").config();
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

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server sluša na portu ${PORT}...`))