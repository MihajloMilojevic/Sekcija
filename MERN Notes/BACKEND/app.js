require("dotenv").config();  // ENABLES ENV VARIABLES
require("express-async-errors"); // ERROR WRAPPER
const path = require('path');
const cookieParser = require('cookie-parser');

//const connetDB = require("./database/connect") // FUNCTION TO CONNECT TO DATABASE
const notFound = require("./middleware/notFound"); // FOR NOT EXISTING ROUTS
const errorHandler = require("./middleware/errorHandler"); //HANDLES ALL ERRORS
const userRouter = require("./routers/user"); // ROUTS FOR USER INTERACTION
const notesRouter = require("./routers/notes"); // ROUTS FOR NOTES MANIPULATION
const auth = require("./middleware/authentication") // AUTHENTICATION MIDDLEWARE

const express = require('express'); 
const app = express(); //CREATES SERVER

/********** ONLINE SECURITY **********/
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');

app.set('trust proxy', 1);

app.use(express.json()); // CONVERTS REQUEST BODY TO JS OBJECT AND ADDS IT TO REQ OBJECT
app.use(helmet()); // SECURITY
app.use(cors()); // SECURITY
app.use(xss()); // SECURITY
app.use(cookieParser()); // ADDS COOKIES TO REQUEST
app.use(express.static("build")) //USE ASSETS FROM PUBLIC FOLDER - FRONT END

app.use("/api/users", userRouter); // USES ROUTS FOR USER INTERACTION
app.use("/api/notes", notesRouter); // USES ROUTS FOR MANIPULATION OF NOTES

app.use(async (req, res, next) => {
	res.redirect(`/?route=${req.path}`)
})

app.use(notFound); // IF NO ROUTE HAS BEEN FOUND
app.use(errorHandler); // HANDLE ALL ERRORS THAT MAY OCCUR

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server listens on port ${port}...`))