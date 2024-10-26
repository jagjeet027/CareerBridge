import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as AppleStrategy } from 'passport-apple';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google OAuth configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: 'http://localhost:5000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle user data (save to DB or return profile)
      return done(null, profile);
    }
  )
);

// Apple OAuth configuration
passport.use(
  new AppleStrategy(
    {
      clientID: 'YOUR_APPLE_CLIENT_ID',
      teamID: 'YOUR_TEAM_ID',
      keyID: 'YOUR_KEY_ID',
      privateKeyLocation: 'path/to/AuthKey.p8', // Private key file
      callbackURL: 'http://localhost:5000/auth/apple/callback',
    },
    (accessToken, refreshToken, idToken, profile, done) => {
      // Handle user data (save to DB or return profile)
      return done(null, profile);
    }
  )
);
