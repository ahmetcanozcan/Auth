const passport = require('passport')
const { tokenize } = require('../tool/jwt');
const _ = require('lodash');

async function localLogin(req, res) {
  let result = await new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.error('Error occured', err);
        return resolve(false);
      }
      console.log('found', user);
      let token = tokenize(_.pick(user, ['username']));
      resolve(token);
    })(req, res);
  });
  return result;
}


module.exports = { localLogin };