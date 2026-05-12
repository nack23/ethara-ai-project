const express = require("express");

const mypath = express.Router();

const { home } = require("../controllers/home");
let {login}=require("../controllers/login")
let {signup}=require("../controllers/signup")
let {signupData}=require("../controllers/signup-data")
let loginData=require("../controllers/login-data")
let auth=require("../middleware/authMiddleware")
let dashboard=require("../controllers/dashboard")
let logout=require("../controllers/logout")

const project= require("../controllers/management/project-management");

let projectform=require("../controllers/management/projectForm")
let createProject=require("../controllers/management/createProject")
let addMember = require("../controllers/management/addMember");
let removeMember = require("../controllers/management/removeMember");

let taskManagement=require("../controllers/management/task-management")
let donetask=require("../controllers/management/doneTask")
let analyticsDashboard=require("../controllers/management/analytics-dashboard")

mypath.get("/", home);
mypath.get("/signup",signup)
mypath.get("/login",login)
mypath.post("/signup-data",signupData)
mypath.post("/login-data",loginData)
mypath.get("/dashboard",auth,dashboard)
mypath.get("/logout",logout)

mypath.get("/project-management",auth,project);

mypath.get("/create-project",projectform)
mypath.post("/create-project",auth,createProject)

mypath.post("/add-member",addMember);
mypath.post("/remove-member",removeMember);

mypath.get("/task-management",auth,taskManagement)
mypath.post("/done-task",auth,donetask)
mypath.get("/analytics-dashboard",auth,analyticsDashboard)

module.exports = mypath;