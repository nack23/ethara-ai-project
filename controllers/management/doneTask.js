const DoneTask = require(
    "../../models/doneTaskSchema"
);

const User = require(
    "../../models/userSchema"
);

let doneTask = async (req, res) => {

    try {

        const {

            projectid,

            title,

            description,

            priority,

            admin,

            taskMessage

        } = req.body;

        const user = await User.findById(

            req.user.userid
        );

        /* Already Submitted */

        const alreadyDone = await DoneTask.findOne({

            projectid,

            completedBy:user.fullname
        });

        if(alreadyDone){

            return res.send(`

                <div style="

                    min-height:100vh;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background:#071b3b;
                    font-family:Poppins,sans-serif;
                    padding:20px;
                    box-sizing:border-box;
                ">

                    <div style="

                        background:white;
                        padding:30px 22px;
                        border-radius:25px;
                        text-align:center;
                        max-width:500px;
                        width:100%;
                        box-sizing:border-box;
                    ">

                        <div style="

                            width:80px;
                            height:80px;
                            background:#ef4444;
                            border-radius:50%;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            margin:auto;
                            margin-bottom:22px;
                        ">

                            <span style="

                                font-size:34px;
                                color:white;
                            ">

                                !

                            </span>

                        </div>

                        <h1 style="

                            color:#111;
                            margin-bottom:16px;
                            font-size:28px;
                            line-height:1.4;
                        ">

                            Task Already Submitted

                        </h1>

                        <p style="

                            color:#555;
                            line-height:1.8;
                            margin-bottom:28px;
                            font-size:15px;
                        ">

                            You have already completed this task.

                        </p>

                        <a
                        href="/task-management"
                        style="

                            display:inline-block;
                            width:100%;
                            padding:14px 20px;
                            background:#071b3b;
                            color:white;
                            text-decoration:none;
                            border-radius:14px;
                            font-weight:600;
                            box-sizing:border-box;
                        ">

                            Back To Task Management

                        </a>

                    </div>

                </div>
            `);
        }

        /* Save Task */

        await DoneTask.create({

            projectid,

            title,

            description,

            priority,

            admin,

            taskMessage,

            completedBy:user.fullname
        });

        /* Success Message */

        res.send(`

            <div style="

                min-height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                background:#071b3b;
                font-family:Poppins,sans-serif;
                padding:20px;
                box-sizing:border-box;
            ">

                <div style="

                    background:white;
                    padding:30px 22px;
                    border-radius:25px;
                    text-align:center;
                    max-width:500px;
                    width:100%;
                    box-sizing:border-box;
                ">

                    <div style="

                        width:80px;
                        height:80px;
                        background:#22c55e;
                        border-radius:50%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        margin:auto;
                        margin-bottom:22px;
                    ">

                        <span style="

                            font-size:36px;
                            color:white;
                        ">

                            ✓

                        </span>

                    </div>

                    <h1 style="

                        color:#111;
                        margin-bottom:16px;
                        font-size:28px;
                        line-height:1.4;
                    ">

                        Task Submitted Successfully

                    </h1>

                    <p style="

                        color:#555;
                        line-height:1.8;
                        margin-bottom:28px;
                        font-size:15px;
                    ">

                        Your task has been submitted successfully and saved in the database.

                    </p>

                    <a
                    href="/task-management"
                    style="

                        display:inline-block;
                        width:100%;
                        padding:14px 20px;
                        background:#071b3b;
                        color:white;
                        text-decoration:none;
                        border-radius:14px;
                        font-weight:600;
                        box-sizing:border-box;
                    ">

                        Back To Task Management

                    </a>

                </div>

            </div>
        `);

    } catch (error) {

        console.log(error.message);

        res.send(
            "Done Task Error"
        );
    }
};

module.exports = doneTask;