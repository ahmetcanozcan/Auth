const { Strategy } = require('passport-local');
const User = require('../../model/User');

module.exports = new Strategy(
  {
    usernameField: 'username',
    passwordField: 'password',
  }, (username, password, done) => {

    User.findOne({ username: username })
      .then(user => {
        if (!user) {
          return done(true, null);
        }
        done(null, user)
      }).catch(err => {
        done(err, null)
      });

  });