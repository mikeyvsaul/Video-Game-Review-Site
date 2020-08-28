const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Gamer = require('../models/gamer');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK,
},
  function(accessToken, refreshToken, profile, cb) {
    Gamer.findOne({ 'googleId': profile.id }, function(err, gamer) {
      if (err) return cb(err);
      if (gamer) {
        return cb(null, gamer);
      } else {
        let newGamer = new Gamer({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newGamer.save(function(err) {
          if (err) return cb(err);
          return cb(null, newGamer);
        });
      }
    });
  } 
));

passport.serializeUser(function(gamer, done) {
  done(null, gamer.id);
});

passport.deserializeUser(function(id, done) {
  Gamer.findById(id, function(err, gamer) {
    done(err, gamer);
  });
});