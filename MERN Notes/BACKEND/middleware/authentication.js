const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  
  if(!token)
    throw new UnauthenticatedError('Authentication error')
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET) // VERIFY TOKEN
    req.user = { userId: payload.userId, email: payload.email }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication error')
  }
}

module.exports = auth