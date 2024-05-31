const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/auth-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User schema
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Register route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Compare passwords
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate token
  const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

  res.status(200).json({ token });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

