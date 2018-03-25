
const router = require('express').Router();
const sayabel = require('./sayabel');

router.use('/sayabel', sayabel);

router.get('/', (req, res) => {
  res.write("This will be the homepage");
  //Will use /home
});

module.exports = router;