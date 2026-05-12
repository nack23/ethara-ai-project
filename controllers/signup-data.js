const User = require("../models/userSchema");

const bcrypt = require("bcryptjs");

let signupData = async (req, res) => {

    try {

        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {

            return res.send("All fields are required");
        }
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.send("Email already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            password: hashedPassword
        });

        res.redirect("/login");

    } catch (error) {

        console.log(error.message);

        res.status(500).send("Internal Server Error");
    }
};

module.exports = { signupData };