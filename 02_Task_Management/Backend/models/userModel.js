const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique:true
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    password: {
        type: String,
        require:true
    },
    tasks: [
        {
            type: mongoose.Types.ObjectId,
            ref:"task"
        }
    ]
})
module.exports = mongoose.model("user", userSchema);