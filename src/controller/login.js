const passport = require('passport');
const loginService = require('../services/LoginService');


const localLogin = async (req, res) => {
  let token = false;
  try {
    token = await loginService.localLogin(req, res);
  } catch{ }
  if (!token) {
    return res.status(301).send('User not found');
  }
  res.send(token);
}


module.exports = { localLogin };