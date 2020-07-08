const { Router } = require('express');
const router = Router();
const { localSignup } = require('../controller/signup');

router.post('/', localSignup);

module.exports = router;