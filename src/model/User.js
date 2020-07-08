const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;


const schema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    }
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  authorization: {
    type: Number,
    default: 0
  }
});

schema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function (hashErr, hash) {
      user.password = hash;
      next();
    });
  });
});

schema.methods.isPasswordMatches = function (passwd) {
  return new Promise((resolve, reject) => {
    const user = this;
    bcrypt.compare(passwd, user.password, function (err, isMatch) {
      if (err) {
        console.log('An error occured comparing passwords')
        return resolve(false);
      }
      resolve(isMatch);
    });
  })
  return res;
};


module.exports = model('User', schema);