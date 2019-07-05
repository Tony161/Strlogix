const { Router } = require('express');

const router = new Router();

router.get(`/get/:email`, require('./get'));
router.put(`/update/:email`, require('./update'));

module.exports = router;
