const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/sign-in", async (req, res) => {
   try {
     const { username,email} = req.body;
    const existinguser = await User.findOne({ username });
     const existingemail = await User.findOne({ email });
    if (existinguser) {
        return res.status(300).json({message:"username alredy exists"})
    } else if (username.length < 3) {
         return res.status(300).json({message:"username should have atleast 4 characte"})
    }

    if (existingemail) {
        return res.status(300).json({message:"email alredy exists"})
    }
       const hashPass = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
        username: req.body.username,
        emial: req.body.email,
        password:req.body.password
    })
    await newUser.save();
    return res.status(200).json({message:"SignIn Scuessfully"})
   } catch (error) {
       console.log(error);
         res.status(400).json({message:"Internal server error"})
   }
})

//Login
router.get("/log-in", async (req, res) => {
    const { username } = req.body;
     const existinguser = await User.findOne({ username });
    if (!existinguser) {
        return res.status(400).json({ message: "username or password incorrect" });
    }
    bcrypt.compare(password, existinguser.password, (err, data) => {
        if (data) {
            const authClaims = [{ name: username }, { jti: jwt.sign({}, "tcmTm") }];
            const token = jwt.sign({ authClaims }, "tcmTM", { expiresIn: "2d" });
            res.status(200).json({id:existinguser._id,token:token})
        }
        else {
            return res.status(400).json({message:"Invalid Credentials"})
        }
    })
})

module.exports = router;