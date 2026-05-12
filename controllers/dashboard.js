const User = require("../models/userSchema");

let dashboard = async (req, res) => {

    try {

        /* Logged In User */
        const user = await User.findById(
            req.user.userid
        );
        res.render("dashboard", {
            user
        });

    } catch (error) {

        console.log(error.message);

        res.send("Error");
    }
};

module.exports = dashboard;