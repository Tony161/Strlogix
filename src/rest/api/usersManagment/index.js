const { Router } = require('express');

const router = new Router();

router.get(`/getAll`, require('./getAll'));
router.put(`/update/:id`, require('./update'));

module.exports = router;
