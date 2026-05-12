const mongoose = require("mongoose");

let projectSchema = new mongoose.Schema({

    title:String,

    description:String,

    dueDate:Date,

    priority:String,

    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    members:[

        {

            name:String,

            email:String
        }
    ]

},{
    timestamps:true
});

module.exports = mongoose.model(
    "Project",
    projectSchema
);