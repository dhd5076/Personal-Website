var Post = require('../models/post');
var showdown  = require('showdown');
var converter = new showdown.Converter();

exports.post_list_get = function(req, res) {
    Post.find({}, function(err, post_list) {
        if (err) { console.log(err.message); }
        res.render('index', { title: 'Recent Posts', posts: post_list, loggedin: req.session.loggedin});
    });
};

exports.view_user_posts = function(req, res) {
    Post.find({ author: req.params.userID}, function(err, post_list) {
        if (err) { console.log(err.message); }
        res.render('submissions', { title: 'Book List', username: req.params.userID, posts: post_list, loggedin: req.session.loggedin});
    });
};

exports.post_create_get = function(req, res) {
    res.render('submit', {loggedin: req.session.loggedin});
};

exports.post_create_post = function(req, res) {
    var post = new Post({
        title: req.body.title,
        author: req.session.user.username,
        body: converter.makeHtml(req.body.body),
        prev: req.body.body.replace(/<(?:.|\n)*?>/gm, '')
    });
    post.save(function(err) {
        if (err) { console.log(err.message); }
    });
    res.redirect('/post/' + post._id);
};

exports.post_delete_get = function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('confirmdelete', {post_data: post, loggedin: req.session.loggedin});
    });
};

exports.post_delete_post = function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        post.remove();
        res.redirect('/');
    });
};

exports.post_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Update Post');
};

exports.post_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Update Post');
};

exports.post_get = function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('post', {post_data: post, loggedin: req.session.loggedin});
    });
};