const path = require("path");

let projectForm = (req, res) => {

    const filePath = path.join( __dirname, "../../public/projectForm.html");

    res.sendFile(filePath);
};

module.exports = projectForm;