const {StatusCodes} = require("http-status-codes");

async function getAllUsers(req, res) {
	const users = require("../data.json").map((user) => {
		const {id, first_name, last_name} = user;
		return {id, first_name, last_name};
	});
	res.status(StatusCodes.OK).json({ok: true, users});
}

async function getOneUserByQuery(req, res) {
	const users = require("../data.json");
	const {id} = req.query;
	const user = users.find(u => u.id === parseInt(id));
	if(!user) 
		return res.status(StatusCodes.NOT_FOUND).json({ok: false, message: `No user with id ${id}`});
	res.status(StatusCodes.OK).json({ok: true, user});
}

async function  getOneUserByParam(req, res) {
	const users = require("../data.json");
	const {id} = req.params;
	const user = users.find(u => u.id === parseInt(id));
	if(!user) 
		return res.status(StatusCodes.NOT_FOUND).json({ok: false, message: `No user with id ${id}`});
	res.status(StatusCodes.OK).json({ok: true, user});
}

module.exports = {
	getAllUsers,
	getOneUserByQuery,
	getOneUserByParam
}