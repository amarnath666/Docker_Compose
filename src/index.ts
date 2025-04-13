import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

// MongoDB URI for Docker container with authentication
const mongoURI = process.env.MONGOURI || 'mongodb://localhost:27017';

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mongoose schema and model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/', async (req, res) => {
  try {
    const user = await User.create({
      username: Math.random().toString(36).substring(7),
      password: Math.random().toString(36).substring(7),
    });
    res.json({ message: 'User created successfully', user });
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});