const router = require('express').Router();

router.get('/', (req, res) => {res.send('Hello Friend')});

router.use('/contacts', require('./contacts'));

module.exports = router;