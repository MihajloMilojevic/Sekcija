const {StatusCodes} = require("http-status-codes");
const { BadRequestError, UnauthenticatedError, NotFoundError } = require('../errors');
const mysql = require("../database/connect");
const {uid} = require("uid");

const createNote = async (req, res) => {
	const {title, text} = req.body;
	const {userId} = req.user;
	const id = uid(20);
	const data = await mysql.query(
		"INSERT INTO notes(id, user_id, title, text) VALUES(?, ?, ?, ?)",
		[id, userId, title, text]
	)
	await mysql.end();
	if(data.affectedRows === 0) throw new Error();
	res.status(StatusCodes.CREATED).json({ok: true});
}

const allNotes = async (req, res) => {
	const notes = await mysql.query("SELECT * FROM notes WHERE user_id = ? ORDER BY lastUpdated DESC", [req.user.userId]);
	await mysql.end();
	res.status(StatusCodes.OK).json({ok: true, notes}) 
}

const getSingleNote = async (req, res) => {
	const {id} = req.params;
	const noteArray = await mysql.query("SELECT * FROM notes WHERE id = ?", [id]);
	await mysql.end();
	if(noteArray.length === 0) throw new NotFoundError(`No note with id ${id}`);
	res.status(StatusCodes.OK).json({ ok: true, note: noteArray[0] });
}

const editNote = async (req, res) => {
	const {id} = req.params;
	const {title, text} = req.body;
	const data = await mysql.query(
		"UPDATE notes SET title = ?, text = ? WHERE id = ? AND user_id = ?",
		[title, text, id, req.user.userId]
	)
	await mysql.end();
	if(data.affectedRows === 0) throw new NotFoundError(`No note with id ${id}`);
	res.status(StatusCodes.OK).json({ok: true});
}

const deleteNote = async (req, res) => {
	const {id} = req.params;
	const data = await mysql.query(
		"DELETE FROM notes WHERE id = ? AND user_id = ?",
		[id, req.user.userId]
	)
	await mysql.end();
	if(data.affectedRows === 0) throw new NotFoundError(`No note with id ${id}`);
	res.status(StatusCodes.OK).json({ok: true});
}

module.exports = {
	createNote,
	allNotes,
	editNote,
	deleteNote,
	getSingleNote
}