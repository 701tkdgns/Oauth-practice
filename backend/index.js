const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const path = require("path");
const passport = require("passport");
const passportSetup = require("./passport");
require("dotenv").config(path.join(__dirname, ".env"));
PORT = process.env.PORT;

app.use(session({
  secret: process.env.SESSION_ID,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}));

app.listen(PORT, (req, res) => {console.log(`Server start on PORT ${PORT}...`);})

