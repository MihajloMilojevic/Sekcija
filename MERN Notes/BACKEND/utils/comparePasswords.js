const bcrypt = require("bcryptjs");

module.exports = async function (canditatePassword, hashed) {
    const isMatch = await bcrypt.compare(canditatePassword, hashed);
    return isMatch
}