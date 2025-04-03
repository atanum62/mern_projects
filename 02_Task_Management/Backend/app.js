const express = require("express");
const app = express();
require("dotenv").config();
require("../Backend/conn/conn");
const cors = require("cors");
app.use(cors());
const UserApi = require("./routes/user")
app.use(express.json());
app.use("/api/v1", UserApi);

const usermodel = require("../Backend/models/userModel");
const taskModel=require("../Backend/models/TaskModel")
app.use("/", (req, res) => {
    res.send("hello form backend ");
})



const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`)
})