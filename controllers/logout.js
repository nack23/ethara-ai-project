let logout = (req, res) => {

    try {
        res.clearCookie("token");

        res.redirect("/");

    } catch (error) {

        console.log(error.message);

        res.send("Logout Error");
    }
};

module.exports = logout;