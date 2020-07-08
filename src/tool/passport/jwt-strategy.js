const { Strategy } = require('passport-custom');
const { resolve } = require('../jwt');
const User = require('../../model/User');

module.exports = new Strategy((req, done) => {
  const token = req.header('X-Auth-Token');
  if (!token) {
    return done(null, false);
  }
  let tokenObj = resolve(token);
  User.findOne({ username: tokenObj.username })
    .then(user => {
      req.user = user;
      req.tokenObject = tokenObj;
      done(null, user);
    })
    .catch(err => done(err, false));
});