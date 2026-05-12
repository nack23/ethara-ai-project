const Project = require(
    "../../models/projectSchema"
);

const DoneTask = require(
    "../../models/doneTaskSchema"
);

const User = require(
    "../../models/userSchema"
);

let analyticsDashboard = async (req, res) => {

    try {

        /* =========================
           LOGIN USER
        ========================== */

        const loginUser = await User.findById(

            req.user.userid
        );

        const userEmail = loginUser.email;

        const userName = loginUser.fullname;

        /* =========================
           PERSONAL ANALYTICS
        ========================== */

        /* Total Assigned Tasks */

        const totalTasks = await Project.countDocuments({

            "members.email": userEmail
        });

        /* Completed Tasks (Unique Project Count) */

        const completedProjects = await DoneTask.distinct(

            "projectid",

            {

                completedBy:userName
            }
        );

        const completedTasks = completedProjects.length;

        /* Pending Tasks */

        const pendingTasks = totalTasks - completedTasks;

        /* Overdue Tasks */

        const currentDate = new Date();

        const overdueTasks = await Project.countDocuments({

            "members.email": userEmail,

            dueDate: {

                $lt: currentDate
            }
        });

        /* =========================
           TASKS PER USER
        ========================== */

        /* Total Assigned */

        const allUsers = await Project.aggregate([

            {

                $unwind:"$members"
            },

            {

                $group: {

                    _id:"$members.email",

                    totalAssigned: {

                        $sum:1
                    }
                }
            }
        ]);

        /* Total Completed */

        const completedData = await DoneTask.aggregate([

            {

                $group: {

                    _id:"$completedBy",

                    totalCompleted: {

                        $addToSet:"$projectid"
                    }
                }
            }
        ]);

        /* Merge Both Data */

        const users = await Promise.all(

            allUsers.map(async (user) => {

                /* Find User */

                const dbUser = await User.findOne({

                    email:user._id
                });

                const fullName = dbUser

                    ? dbUser.fullname

                    : user._id;

                /* Match Completed */

                const completedUser = completedData.find(

                    item => item._id === fullName
                );

                return {

                    email:user._id,

                    fullname:fullName,

                    totalAssigned:user.totalAssigned,

                    totalCompleted: completedUser

                        ? completedUser.totalCompleted.length

                        : 0
                };
            })
        );

        /* =========================
           RECENT TASKS
        ========================== */

        const recentTasks = await DoneTask.find()

        .sort({

            createdAt:-1
        })

        .limit(10);

        /* =========================
           RENDER
        ========================== */

        res.render(

            "analyticsPage",

            {

                totalTasks,

                completedTasks,

                pendingTasks,

                overdueTasks,

                users,

                recentTasks
            }
        );

    } catch (error) {

        console.log(error.message);

        res.send(
            "Analytics Dashboard Error"
        );
    }
};

module.exports = analyticsDashboard;