const path = require("path");

let signup = (req, res) => {

    const filePath = path.join(__dirname, "../public/signup.html");

    res.sendFile(filePath);
};

module.exports = { signup };