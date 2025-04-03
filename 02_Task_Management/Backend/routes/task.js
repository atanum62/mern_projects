const router = require("express").Router();
const Task = require("../models/TaskModel");
const User = require("../models/userModel");
 
//Create task
router.post("/create-task", async (req, res) => {
   try {
       const { title, desc } = req.body;
       const { id } = req.headers;
       const newTask = new Task({ title, desc });
       const saveTask = await newTask.save();
       const taskId = saveTask._id;
       await User.findByIdAndUpdate(id, { $push: { tasks: taskId._id } });
       res.status(200).json({ message: "Task Created" });
   } catch (error) {
       console.log(error);
       res.send.status(400).json({message:"Internal Server Error"})
   }
})

module.exports = router;
