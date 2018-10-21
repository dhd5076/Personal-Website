var Post = require('../models/post');

exports.post_list_get = function(req, res) {
    Post.find({}, function(err, post_list) {
        if (err) { console.log(err.message); }
        res.render('index', { title: 'Book List', posts: post_list});
    });
};

exports.post_create_get = function(req, res) {
    res.render('create_post');
};

exports.post_create_post = function(req, res) {
    var post = new Post({
        title: req.body.title,
        author: 'Dylan Dunn',
        body: req.body.body
    });
    post.save(function(err) {
        if (err) { console.log(err.message); }
    });
    res.redirect('/post/' + post._id);
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
    Post.findById(req.params.id, function(err, post) {
        res.render('post', {post_data: post});
    });
};