const router = require('express').Router();
const works = require('./works');
const generate = require('./generate');

router.get('/', (req, res)=> {
    res.render('sayabel')
});
router.get('/works', works)
router.get('/generate/:works', generate)

module.exports = router;
