const express = require("express");
const app = express();
PORT = 3000;

app.use(express.static("static"));

app.get("/auth", authRoute);

app.listen(PORT, (req, res)=>{console.log(`client Server start on port : ${PORT}`);});