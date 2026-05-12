const Project = require(
    "../../models/projectSchema"
);

const User = require(
    "../../models/userSchema"
);

let addMember = async (req, res) => {

    try {

        const {

            projectid,

            email

        } = req.body;

        const user = await User.findOne({

            email
        });

        if(!user){

            return res.send(
                "User Not Found"
            );
        }

        await Project.findByIdAndUpdate(

            projectid,

            {

                $addToSet: {

                    members: {

                        name:user.fullname,

                        email:user.email
                    }
                }
            }
        );

        res.redirect(
            "/project-management"
        );

    } catch (error) {

        console.log(error);

        res.send("Add Member Error");
    }
};

module.exports = addMember;