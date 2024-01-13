const router = require('express').Router();

router.get('/', (req, res) => {res.send(`Hello Friend, My name is Jared. Welcome to the Contacts Project home page`)});

router.use('/contacts', require('./contacts'));

module.exports = router;