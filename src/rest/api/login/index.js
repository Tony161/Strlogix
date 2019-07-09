const { Router } = require('express');

const router = new Router();

router.post('/addLogin', require('./addLogin'));

module.exports = router;
