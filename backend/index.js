

const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')


app.use(express.json());
app.use(cors())
const bcrypt = require('bcrypt')


//database connectivity
mongoose.connect("mongodb://localhost:27017/practice");


app.post("/adduser", async (req, res) => {
    try {
        const encpass = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: encpass,
            contact: req.body.contact
        });
        await user.save();
        res.json(user);

    }
    catch (err) {
        res.status(500).json({ message: 'Error fetching data' })
    }
});

app.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        const token = await jwt.sign({ id: user._id}, "my private key", { expiresIn: "2h" })
        res.json({ token , user })
    }
    catch (err) {
        res.json(err)
    }
})


//server port
app.listen("3001", () => {
    console.log("server is running");
})

