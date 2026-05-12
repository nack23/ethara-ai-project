const Project = require(
    "../../models/projectSchema"
);

const User = require(
    "../../models/userSchema"
);

let taskManagement = async (req, res) => {

    try {

        /* Login User Email */

        const userEmail = req.user.email;

        /* Find Projects */

        const projects = await Project.find({

            "members.email": userEmail

        })

        .populate("admin")

        .sort({

            createdAt:-1
        });

        /* Render */

        res.render(

            "taskPage",

            {

                projects
            }
        );

    } catch (error) {

        console.log(error.message);

        res.send(
            "Task Management Error"
        );
    }
};

module.exports = taskManagement;