// lib/dbConnect.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async (dbName = 'default') => {
  const dbURI = process.env.MONGO_URI || "";
  if (!dbURI) throw new Error("MongoDB URI is not defined in environment variables.");

  // Check if we're already connected to the intended database
  if (mongoose.connection.readyState && mongoose.connection.db.databaseName === dbName) {
    console.log('Already connected to MongoDB:', dbName);
    return;
  }

  // Close existing connections before switching databases
  if (mongoose.connection.readyState) {
    await mongoose.connection.close();
  }

  try {
    await mongoose.connect(dbURI, { dbName });
    console.log(`Connected to MongoDB: ${dbName}`);
  } catch (error) {
    console.error('Connection error:', error);
    throw error;  // Rethrow to handle it outside
  }
};

export default connectDB;
