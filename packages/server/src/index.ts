require('dotenv').config();
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { errorHandler } from './middlewares/errorHandler';
import { connectToRedis } from './config/redis'; // Import the Redis connection function
import { connectToDatabase } from './config/database'; // Import the MongoDB connection function

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Connect to Redis
connectToRedis();

// Basic test route to ensure server is working
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Routes
// TODO: Add routes here

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
