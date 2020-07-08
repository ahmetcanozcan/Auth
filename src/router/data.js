const { Router } = require('express');
const getData = require('../controller/data');

const router = Router();


router.get('/', getData);

module.exports = router;