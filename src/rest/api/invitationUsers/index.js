const { Router } = require('express');

const router = new Router();

router.post('/invite', require('./invite'));

module.exports = router;
