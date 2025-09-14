import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import connectDB from './config/db';
// import rentalRoutes from './routes/rental.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// connectDB();

// Routes
// app.use('/api/rentals', rentalRoutes);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
