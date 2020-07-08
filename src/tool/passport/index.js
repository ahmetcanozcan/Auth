const passport = require('passport');
const jwtStrategy = require('./jwt-strategy');
const localStrategy = require('./local-strategy');

passport.use('local', localStrategy);

passport.use('jwt', jwtStrategy);

