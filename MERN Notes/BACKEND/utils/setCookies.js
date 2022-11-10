const createToken = require("./createToken");

const attachCookies = ( res, user ) => {
	const token = createToken(user);
  
	res.cookie('token', token, {
	  	httpOnly: true,
	});
  };

module.exports = attachCookies;