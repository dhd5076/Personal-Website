var express = require('express');
var router = express.Router();
var postdata = require("../top1000.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.q) {
    var titlesToSend = [];
    postdata.forEach(function (element,index) {
      if(element[0].includes(req.query.q)) {
        element.index = index;
        titlesToSend.push(element);
      }
    });
    res.render('index', {data: titlesToSend, title: 'Search Red Pill Backup', search: req.query.q});
  } else {
    postdata.forEach(function (element, index) {
      element.index = index;
    });
    res.render('index', {data: postdata, title: 'The Red Pill Backup'});
  }
});

module.exports = router;