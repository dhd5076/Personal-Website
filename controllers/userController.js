var User = require('../models/user');

exports.user_create_get = function(req, res) {
    res.render('signup');
};

exports.user_create_post = function(req, res) {
    User.find({
        email: req.body.email
    }, function(err, users) {
        if(!users.length) {
            User.find({
                username: req.body.username
            }, function(err, userss) {
                if(!userss.length) {
                    if(req.body.password == req.body.password_conf) {
                        var user = new User({
                            email: req.body.email,
                            username: req.body.username,
                            password: req.body.password,
                            enabled: false
                    
                        });
                        user.save(function(err) {
                            if (err) { console.log(err.message); }
                            res.send(user);
                        });
                    } else {
                        res.render('signup', {errmsg: 'Passwords Don\'t Match'})
                    }
                } else {
                    res.render('signup', {errmsg: 'Username Already Exists'})
                }
            });
        } else {
            res.render('signup', {errmsg: 'Email Already In Use'})
        }
    });
};

exports.user_auth_get = function(req, res) {
    res.render('login')
}

exports.user_auth_post = function(req, res) {
    User.findOne({
        email: req.body.email
    }, function(err, user) {
        console.log(user)
        if(user) {
            user.checkPassword(req.body.password, function(result) {
                if (result) {
                    req.session.user = user;
                    res.redirect('/');
                } else {
                    res.render('login', {errmsg: 'Wrong Password'})
                }
            });
        } else {
            res.render('login', {errmsg: 'Incorrect Email'})
        }
    });
}

exports.user_logout_get = function(req, res) {
    if(req.session && req.session.user) {
        req.session.destroy()
    }
    res.redirect('/');
}

exports.view_user = function(req, res) {
    User.findOne({
        username: req.params.userID
    }, function(err, user) {
        if(user) {
            res.render('user', {username: user.username});
        } else {
            res.send('User Not Found');
        }
    });
};