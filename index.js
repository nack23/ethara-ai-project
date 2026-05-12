const express = require("express");

const path = require("path");

require("dotenv").config();

const cookieParser = require("cookie-parser");

const app = express();

/* Database */

const dbconnection = require("./database/db");

dbconnection();

/* Body Parser */

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* Cookie Parser */

app.use(cookieParser());

/* Static */
app.use(express.static(path.join(__dirname, "public")));
/* dynamic */
app.set("view engine", "ejs");
/* Routes */

const allroutes = require("./routers/allroutes");

app.use(allroutes);

/* Server */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);
});