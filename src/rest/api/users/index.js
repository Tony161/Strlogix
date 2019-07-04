const { Router } = require('express');

const router = new Router();

router.post('/addUser', require('./addUser'));

module.exports = router;
