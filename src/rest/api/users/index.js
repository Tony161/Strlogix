const { Router } = require('express');

const router = new Router();

router.post('/addUser', require('./addUser'));
router.put(`/resetPassword/:email`, require('./resetPassword'));

module.exports = router;
