const { Router } = require('express');

const router = new Router();

router.post('/imageAdd', require('./imageAdd'));

module.exports = router;
