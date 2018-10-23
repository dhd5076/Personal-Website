exports.login = function(req, res) {
    if (req.session && req.session.userID) {
        return next();
    } else {
        res.send("You must be logged in");
    }
};