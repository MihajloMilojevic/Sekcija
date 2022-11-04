require("dotenv").config();
const mysql = require("serverless-mysql");

const connection = mysql({
  config: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  }
})

module.exports = connection;