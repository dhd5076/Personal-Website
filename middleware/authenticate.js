exports.authopt = function(req, res, next) {
    console.log(req.ipInfo);
    if (req.session && req.session.user) {
        req.session.loggedin = true;
    } else {
        req.session.loggedin = false;
    }
    return next();
};

exports.authreq = function(req, res, next) {
    console.log(req.ipInfo);
    if (req.session && req.session.user) {
        req.session.loggedin = true;
        return next();
    } else {
        res.render('login', {errmsg: 'You Must Be Logged In', loggedin: false});
        req.session.loggedin = false;
    }
};

exports.authadminreq = function(req, res, next) {
    console.log(req.ipInfo);
    if (req.session && req.session.user && req.session.user.isAdmin) {
        req.session.loggedin = true;
        return next();
    } else {
        res.redirect('/');
        req.session.loggedin = false;
    }
};