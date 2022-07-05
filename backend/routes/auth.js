const router = require("express").Router;
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/"

router.get("/kakao", passport.authenticate("kakao", {scope:["profile_nickname"]}));

router.get("/kakao/callback", passport.authenticate("kakao", {
    successRedirect:CLIENT_URL,
    failureRedirect:
}));