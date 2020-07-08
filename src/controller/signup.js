const _ = require('lodash');
const validator = require('../tool/validator');
const User = require('../model/User');
const rabbit = require('../tool/rabbit');


const localSignup = async (req, res) => {

  const formData = _.pick(req.body,
    ['username', 'password', 'email', 'firstname', 'lastname']
  );
  if (!validator.validate(formData)) {
    return res.status(302).send('Invalid value');
  }

  try {
    rabbit.send('newUser', { username: formData.username });
    let user = new User(formData).save();
    res.send('User Created');
  } catch (err) {
    console.error('User can not be saved', err);
  }
}


module.exports = { localSignup }