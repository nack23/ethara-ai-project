const Project = require("../../models/projectSchema");

let createProject = async (req, res) => {

    try {

        const {

            title,
            description,
            dueDate,
            priority

        } = req.body;
        await Project.create({

            title,
            description,
            dueDate,
            priority,
            admin: req.user.userid
        });

        /* Redirect */
        res.redirect("/project-management");

    } catch (error) {

        console.log(error.message);

        res.send("Create Project Error");
    }
};

module.exports = createProject;