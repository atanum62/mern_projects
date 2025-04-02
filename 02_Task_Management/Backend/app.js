const express = require("express");
const app = express();
require("dotenv").config();
require("../Backend/conn/conn");
const usermodel = require("../Backend/models/user");
const taskModel=require("../Backend/models/Task")
app.get("/", (req, res) => {
    res.send("hello form backend ");
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})