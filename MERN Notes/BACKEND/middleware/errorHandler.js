const { StatusCodes } = require('http-status-codes')

module.exports = (err, req, res, next) => {
	let customError = { // ERROR OBJECT WITH DEFAULT VALUES
		// set default
		statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
		msg: err.message || "An error occurred. Please try again later.",
	  }
	  //SEND ERROR
	  return res.status(customError.statusCode).json({ ok: false, message: customError.msg })
  }