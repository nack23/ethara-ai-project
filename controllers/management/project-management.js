const Project = require("../../models/projectSchema");

let project = async (req, res) => {

    try {

        /* Only My Admin Projects */
        const projects = await Project.find({
            admin: req.user.userid
        }).sort({createdAt: -1});;

        /* Render */
        res.render("projectPage", {
            projects
        });

    } catch (error) {

        console.log(error.message);

        res.send("Project Error");
    }
};

module.exports = project;