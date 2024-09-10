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
import * as Sentry from "@sentry/node"; // Import Sentry
import { ProfilingIntegration } from "@sentry/profiling-node"; // Profiling integration

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Sentry Initialization
Sentry.init({
  dsn: process.env.SENTRY_DSN, // Sentry DSN from your .env file
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }), // Http tracing integration
    new Sentry.Integrations.Express({ app }), // Express integration
    new ProfilingIntegration(), // Profiling integration
  ],
  tracesSampleRate: 1.0, // Adjust sampling rate
  profilesSampleRate: 1.0, // Adjust profiling sample rate
});

// Sentry request handler
app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler()); // Tracing middleware

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

// Sentry error handler (must be added after all other routes and middleware)
app.use(Sentry.Handlers.errorHandler());

// Custom error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
