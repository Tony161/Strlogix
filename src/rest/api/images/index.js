const { Router } = require('express');

const router = new Router();

router.post('/imageAdd/', require('./imageAdd'));
router.get('/imageGet/:email', require('./imageGet'));

module.exports = router;
