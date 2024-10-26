import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Import the User model with .js extension
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router(); // Initialize the router

router.get('/jaggie',(req,res)=>{
  res.json({message:'Hello from jaggie'})
})


router.post('/register', async (req, res) => {
  console.log('Incoming registration request:', req.body);
  try {
    const { email, password, name, username } = req.body;
    
    // Use $or to check for both email and username in a single query
    const userExists = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (userExists) {
      return res.status(400).json({ message: 'User or Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, name, username });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Protected route (only accessible if authenticated)
router.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({ message: `Hello ${req.user.email}, you are authorized!` });
});

export default router;
