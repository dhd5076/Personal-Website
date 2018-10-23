var express = require('express');
var router = express.Router();

var post_controller = require('../controllers/postController.js');
var user_controller = require('../controllers/userController.js');

router.get('/', post_controller.post_list_get);

router.get('/submit', post_controller.post_create_get);

router.post('/submit', post_controller.post_create_post);

router.get('/post/:id/delete', post_controller.post_delete_get);

router.post('/post/:id/delete', post_controller.post_delete_post);

router.get('/post/:id/update', post_controller.post_update_get);

router.post('/post/:id/update', post_controller.post_update_post);

router.get('/post/:id', post_controller.post_get);

router.get('/signup', user_controller.user_create_get);

router.post('/signup', user_controller.user_create_post);

router.get('/login', user_controller.user_auth_get);

router.post('/login', user_controller.user_auth_post);

router.get('/user/:userID', user_controller.view_user);


module.exports = router;