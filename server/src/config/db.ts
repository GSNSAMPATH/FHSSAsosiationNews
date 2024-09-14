import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {

    const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://ar102389:oAlMmyROl5BunmgF@fhssasosiation.bbwlv.mongodb.net/?retryWrites=true&w=majority&appName=FHSSAsosiation"
    // 'mongodb://localhost:27017/pitaya';

    try {

        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error: any) {

        console.error(`Error: ${error.message}`);
        process.exit(1); 
    }
};

export default connectDB;
