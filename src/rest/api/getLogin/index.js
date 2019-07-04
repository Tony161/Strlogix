const { Router } = require('express');

const router = new Router();

router.post('/', require('./toLogin'));
router.get(`/:email`, require('./getLogin'));

module.exports = router;
