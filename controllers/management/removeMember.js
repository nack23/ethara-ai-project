const Project = require(
    "../../models/projectSchema"
);

let removeMember = async (req, res) => {

    try {

        const {

            projectid,

            email

        } = req.body;

        await Project.findByIdAndUpdate(

            projectid,

            {

                $pull: {

                    members: {

                        email
                    }
                }
            }
        );

        res.redirect(
            "/project-management"
        );

    } catch (error) {

        console.log(error.message);

        res.send("Remove Member Error");
    }
};

module.exports = removeMember;