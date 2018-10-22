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
                        res.send("Passwords don't match")
                    }
                } else {
                    res.send("Username Exists");
                }
            });
        } else {
            res.send("Email Already in Use");
        }
    });
};

exports.view_user = function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('post', {post_data: post});
    });
};