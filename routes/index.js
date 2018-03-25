
const router = require('express').Router();
const sayabel = require('./sayabel');

router.use('/sayabel', sayabel);

router.get('/', (req, res) => {
  res.render('index')
});

module.exports = router;