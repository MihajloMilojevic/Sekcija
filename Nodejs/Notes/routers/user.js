const express = require("express");
const {register, login, logout, showMe} = require("../controllers/users");
const auth = require("../middleware/authentication");

const router = express.Router();


router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/showme").get(auth, showMe);

module.exports = router;