const { Router } = require('express');

const router = new Router();

router.post('/login', require('./login'));

module.exports = router;
