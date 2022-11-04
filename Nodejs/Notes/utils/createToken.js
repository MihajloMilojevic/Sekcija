require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = ({id, email}) => {
    return jwt.sign(
      { userId: id, email: email },
      process.env.JWT_SECRET
    )
  }