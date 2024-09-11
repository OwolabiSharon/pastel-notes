import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import * as dotEnv from 'dotenv';
import cors from 'cors';

dotEnv.config();

const app = express();
const port = process.env.PORT || 3000;

// Bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());


// 404 Handler for undefined routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e: Error) => {
    console.error('MongoDB connection error b:', e.message);
  });

// Start the server
app.listen(port, () => {
  console.log(`notes application is running on port ${port}.`);
});
