const express = require("express");
const {StatusCodes} = require("http-status-codes");
const { 
	getAllUsers, 
	getOneUserByQuery, 
	getOneUserByParam 
} = require("../controllers/users");

const router = express.Router();

router.get("/", getAllUsers)
.get("/one", getOneUserByQuery)
.get("/:id", getOneUserByParam)

module.exports = router