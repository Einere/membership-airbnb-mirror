const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const {db} = require('../database/index');

passport.serializeUser((user, done) => {
    console.log('serializeUser', user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log('deserializeUser', user);
    done(null, user);
});

// 로그인
passport.use(
    'facebookLogin',
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/facebook/callback",
        },
        function (accessToken, refreshToken, profile, cb) {
            // db에서 검증하는 과정이 필요하다.
            return cb(null, profile);
        }
    ),
);

module.exports = passport;