import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/db';

import { startCron } from './utils/node-cron';
import userRoutes from './routes/userRoutes';




dotenv.config();
connectDB();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
// app.use('/api/news', newsRoutes);
// app.use('/api/posts',postRoutes);

startCron();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



