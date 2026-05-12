const mongoose = require("mongoose");

let doneTaskSchema = new mongoose.Schema({

    projectid:String,

    title:String,

    description:String,

    priority:String,

    admin:String,

    completedBy:String,

    taskMessage:String

},{
    timestamps:true
});

module.exports = mongoose.model(

    "DoneTask",

    doneTaskSchema
);