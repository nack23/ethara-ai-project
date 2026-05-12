const path = require("path");

let login = (req, res) => {

    const filePath = path.join(__dirname, "../public/login.html");

    res.sendFile(filePath);
};

module.exports = { login };