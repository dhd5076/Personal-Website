var express = require('express');
var router = express.Router();
var postdata = require("../top1000.json");
var showdown  = require('showdown');

converter = new showdown.Converter();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  if(req.params.id < 0 || req.params.id > 995) {
    res.send("<h1>ERROR: INVALID POST ID</h1> <a href=\"http://trpbackup.com\">Back to homepage</a>");
  } else {
    res.render('post', {title: postdata[req.params.id][0], text: converter.makeHtml(postdata[req.params.id][4])});
  }
});

module.exports = router;
