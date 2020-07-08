const { Router } = require('express');
const { localLogin } = require('../controller/login');


const router = Router();


router.post('/', localLogin);

module.exports = router;