const passport = require("passport");
const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const userModel = require("../models/users");

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
    },
    async function verify(username, password, cb) {
      const user = await userModel.findOne({ username });

      if (!user) {
        return cb(Error("user not found"), null);
      }

      const isMatched = bcrypt.compareSync(password, user.password);
      if (!isMatched) {
        return cb(Error("password not matched"), null);
      }

      return cb(null, user);
    },
  ),
);

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(async function (userId, done) {
  const user = await userModel.findById(userId);
  done(null, user);
});

module.exports.isAuthenticatedMW = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send("Unauthorized");
};
module.exports.passportRuote = {
  successRedirect: "/auth/ok/",
  failureRedirect: "/auth/err",
};
