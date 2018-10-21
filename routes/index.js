var express = require('express');
var router = express.Router();

var post_controller = require('../controllers/postController.js');

router.get('/', post_controller.post_list_get);

router.get('/submit', post_controller.post_create_get);

router.post('/submit', post_controller.post_create_post);

router.get('/post/:id/delete', post_controller.post_delete_get);

router.post('/post/:id/delete', post_controller.post_delete_post);

router.get('/post/:id/update', post_controller.post_update_get);

router.post('/post/:id/update', post_controller.post_update_post);

router.get('/post/:id', post_controller.post_get);


module.exports = router;