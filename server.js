import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import session from 'express-session';
import './passportConfig.js'; // Import the Passport.js configuration
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GitHubStrategy } from 'passport-github2';

const PORT=process.env.PORT || 5000

const app=express();
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/jobPortal')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware to handle sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secretcode', // Use env variable for session secret
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and use session after session middleware is set up
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5174/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      // Logic to handle user authentication
      return done(null, profile);
    }
  )
);

// GitHub OAuth strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || 'Ov23lixQuWg6mKCLWxl8',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '8ab144e8e5631566800870c1210551d6266e07d4',
      callbackURL: 'http://localhost:5174/auth/github/callback', // Ensure the callback URL matches GitHub OAuth app settings
    },
    function (accessToken, refreshToken, profile, done) {
      // Logic to handle GitHub user authentication
      // Replace this with actual user creation or retrieval logic
      return done(null, profile);
    }
  )
);

// Passport serialization and deserialization logic
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// GitHub OAuth routes
app.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/signin' }),
  (req, res) => {
    // On successful authentication, redirect to the frontend home page
    const user = req.user;
    res.redirect(`http://localhost:5174/dashboard?username=${user.displayName}`);
  }
);

// Google OAuth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/signin' }),
  (req, res) => {
    // Successful authentication, redirect to the frontend home page
    const user = req.user;
    res.redirect(`http://localhost:5174/dashboard?username=${user.displayName}`);
  }
);

// Default routes
app.get('/signin', (req, res) => {
  res.send('Sign in page');
});

app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Welcome ${req.user.displayName}`); // You can access user info from req.user
  } else {
    res.redirect('/signin');
  }
});

app.use(cors({
  origin: 'http://localhost:5174', // Your frontend's URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
}));

app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
