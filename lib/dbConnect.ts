import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async (): Promise<boolean> => {
  // Check if we're already connected
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to MongoDB.');
    return true;
  }

  try {
    // Connect to the MongoDB URI from environment variables
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log('MongoDB connected');
    return true;
  } catch (error) {
    // Log and handle the error
    console.error('MongoDB connection error:', error);
    return false;
  }
}

export default connectDB;
