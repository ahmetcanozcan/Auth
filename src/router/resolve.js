const { Router } = require('express');
const router = Router();

const passport = require('passport');


router.post('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    res.send(req.tokenObject);
  });


module.exports = router;
