const jwt = require("jsonwebtoken");

require("dotenv").config();

let auth = async (req, res, next) => {

    try {

        const token = req.cookies.token;

        if (!token) {

            return res.redirect("/login");
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        console.log(error.message);

        return res.redirect("/login");
    }
};

module.exports = auth;