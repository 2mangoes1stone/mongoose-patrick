const passport = require('passport')
// requires the model with Passport-Local Mongoose plugged in
const User = require('../models/user');

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

// Register new user
function registerMiddleware(req, res, next) {
  console.log('registerMiddleware', req.body)
  const user = new User({
    email: req.body.email
  })
  User.register(user, req.body.password, (error, user) => {
    // Error in registration
    if (error) {
      // Our middleware failed with this error
      next(error)
      return
    }
    // Add our newly created user to the req
    req.user = user
    // Our middleware succeeded with no error
    next()
  })
}

// passport.serializeUser(function(user, done) {
//   done(null, user);
// });

// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });

module.exports = {
  initialize: passport.initialize(),
  authenticateSignIn: passport.authenticate('local', { session: false }),
  register: registerMiddleware
}