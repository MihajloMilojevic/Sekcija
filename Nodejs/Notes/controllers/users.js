const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const attachCookies = require("../utils/setCookies");
const mysql = require("../database/connect");
const comparePasswords = require("../utils/comparePasswords");
const hashPassword = require("../utils/hashPassword");
const {uid} = require("uid");

const showMe = async (req, res) => {
	// RETURN CURRENTLY LOGGED IN USER
	const userArray = await mysql.query("SELECT * FROM users WHERE id = ?", [
		req.user.userId,
	]); // GET INFO ABOUT CURRENTLY LOGGED IN USER
	await mysql.end(); // END CONNECTION
	if (!userArray.length === 0) {
		// mysql.query return an array if array is empty then there is no user with this id
		throw new UnauthenticatedError("Please login");
	}
	const user = userArray[0];
	res.status(StatusCodes.OK).json({
		ok: true,
		user: {
			email: user.email,
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
		},
	});
};

const login = async (req, res) => {
	const { email, password } = req.body;

	/********** CHECK FOR PRESSENTS OF ALL FEILDS **********/
	if (!email) throw new BadRequestError("Email is required");
	if (!password) throw new BadRequestError("Password is required");

	const userArray = await mysql.query("SELECT * FROM users WHERE email = ?", [
		email,
	]);
	await mysql.end();
	/********** USER WITH THIS EMAIL EXIST **********/
	if (userArray.length === 0) {
		throw new UnauthenticatedError("Invalid email");
	}
	const user = userArray[0];
	/********** PASSWORDS MUST MATCH **********/
	const isPasswordCorrect = await comparePasswords(password, user.password);
	if (!isPasswordCorrect) {
		throw new UnauthenticatedError("Invalid password");
	}
	attachCookies(res, user);
	res.status(StatusCodes.OK).json({
		ok: true,
		user: {
			email: user.email,
			id: user.id,
			firstName: user.firstName,
			lastName: user.lastName,
		},
	});
};

/********** CREATES USER **********/
const register = async (req, res) => {
	const { email, password, firstName, lastName } = req.body;

	/********** CHECK FOR PRESSENTS OF ALL FEILDS **********/
	if (!email) throw new BadRequestError("Email is required");
	if (!password) throw new BadRequestError("Password is required");
	if (!firstName) throw new BadRequestError("First name is required");
	if (!lastName) throw new BadRequestError("Last name is required");

	const hashedPassword = await hashPassword(password);
	const id = uid(20);
	const data = await mysql.query(
		"INSERT INTO users (id, email, firstName, lastName, password) VALUES (?, ?, ?, ?, ?)",
		[id, email, firstName, lastName, hashedPassword]
	);
	await mysql.end();
	if (data.affectedRows === 0) throw new Error();
	attachCookies(res, { id, email, firstName, lastName });
	res
		.status(StatusCodes.CREATED)
		.json({ ok: true, user: { id, email, firstName, lastName } });
};

const logout = async (req, res) => {
	res.cookie("token", "logout", {
		httpOnly: true,
		expires: new Date(Date.now() - 24 * 60 * 60 * 1000),
	});
	res.status(StatusCodes.OK).json({ ok: true });
};

module.exports = {
	register,
	login,
	logout,
	showMe,
};
