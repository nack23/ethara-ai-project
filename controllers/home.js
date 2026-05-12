const path = require("path");

let home = (req, res) => {

    const filePath = path.join(__dirname, "../public/home.html");

    res.sendFile(filePath);
};

module.exports = { home };