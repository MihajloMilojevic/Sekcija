const { NotFoundError } = require("../errors");

const notFound = (req, res) => {
    throw new NotFoundError(`${req.method} - ${req.url} does not exist`);
}

module.exports = notFound;