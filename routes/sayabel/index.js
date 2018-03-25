const router = require('express').Router();
const works = require('./works');
const generate = require('./generate');

router.get('/works', works)
router.get('/generate', generate)

module.exports = router;
