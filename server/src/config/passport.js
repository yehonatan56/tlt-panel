const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const userModel = require("../models/users");
passport.use(
  new LocalStrategy(
    {
      usernameField: "name",
      passwordField: "password",
    },
    async function verify(name, password, cb) {
      const user = await userModel.findOne({ name });

      if (!user) return cb(null, false);
      await bcrypt.compare(password, user.password, (err, result) => {
        return result ? cb(null, user) : cb(null, false);
      });
    },
  ),
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
