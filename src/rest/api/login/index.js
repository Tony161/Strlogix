const { Router } = require('express');

const router = new Router();

router.post('/toLogin', require('./toLogin'));
router.get(`/getLogin/:email`, require('./getLogin'));

module.exports = router;
