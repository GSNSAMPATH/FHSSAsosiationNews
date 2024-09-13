import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET in environment variables');
}

if (!process.env.MONGODB_URI) {
    throw new Error('Missing MONGODB_URI in environment variables');
}
