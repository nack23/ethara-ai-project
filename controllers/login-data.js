const User = require("../models/userSchema");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

require("dotenv").config();

let loginData = async (req, res) => {

    try {

        const { email, password } = req.body;

        /* Find User */

        const user = await User.findOne({ email });

        if (!user) {

            return res.send("User not found");
        }

        /* Compare Password */

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.send("Invalid Password");
        }

        /* Create JWT Token */

        const token = jwt.sign(

            {
                userid: user._id,
                email: user.email
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }
        );

        console.log(token);

        /* Save Cookie */

        res.cookie("token", token, {

            httpOnly: true
        });

        /* Redirect */

        res.redirect("/dashboard");

    } catch (error) {

        console.log(error.message);

        res.status(500).send("Internal Server Error");
    }
};

module.exports = loginData;