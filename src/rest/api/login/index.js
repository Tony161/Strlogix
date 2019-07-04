const { Router } = require('express');

const router = new Router();

router.post('/toLogin', require('./toLogin'));
router.get(`/:email`, require('./getLogin'));

module.exports = router;
