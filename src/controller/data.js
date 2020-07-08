const User = require('../model/User');
const _ = require('lodash');
const { resolve } = require('../tool/jwt');

module.exports = async (req, res) => {
  const token = req.header('X-Auth-Token');
  const resolved = resolve(token);
  console.log(token, resolved);
  let user = await User.findOne({ username: resolved.username });
  if (!user) {
    return res.status(300).send('User not found');
  }
  const publicData = _.pick(user, ['firstname', 'lastname', 'email', 'username'])
  res.send(publicData);
}

