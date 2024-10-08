import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db';

// import { startCron } from './utils/node-cron';
import newsRoutes from './routes/newsRoutes';
import postRoutes from './routes/postRoutes';
import userRoutes from './routes/userRoutes';
import kuppiRoutes from './routes/kuppiRoutes';




dotenv.config();
connectDB();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// app.use('/api/users', userRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/kuppi',kuppiRoutes);

// startCron();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



