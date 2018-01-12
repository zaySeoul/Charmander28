const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/redirect',
  }, (accessToken, refreshToken, profile, done) => {
    console.log('passport callback function fired:');
    console.log(profile);
    done(null);
  })
)



// save to database
// new User({
//     googleId: profile.id,
//     username: profile.displayName
// }).save().then((newUser) => {
//     console.log('new user created: ', newUser);
// });
