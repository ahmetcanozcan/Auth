const jwt = require('jsonwebtoken');


const SECRET = process.env.JWT_SECRET_KEY || "jwtsecretkey";

function resolve(token) {
  return jwt.verify(token, SECRET);
}


function tokenize(obj) {
  return jwt.sign(
    obj,
    SECRET,
    {
    }
  )
}

module.exports = { resolve, tokenize, SECRET };