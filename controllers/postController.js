var Post = require('../models/post');

exports.post_list_get = function(req, res) {
    Post.find({}, 'title author')
    .populate('author')
    .exec(function (err, post_list) {
        if (err) { return next(err); }

        res.render('blog', { title: 'Book List', posts: post_list});
    });
};

exports.post_create_get = function(req, res) {
    res.render('create_post');
};

exports.post_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Create Post');
};

exports.post_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Delete Post');
};

exports.post_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Delete Post');
};

exports.post_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Update Post');
};

exports.post_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Update Post');
};

exports.post_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Get Post');
};