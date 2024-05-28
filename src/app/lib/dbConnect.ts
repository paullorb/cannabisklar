import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async (dbName = 'default'): Promise<void> => {

  if (mongoose.connection.readyState) {
    console.log('Already connected to MongoDB.')
    return
  }

  const dbURI = process.env.MONGO_URI || ""
  if (!dbURI) throw new Error("MongoDB URI is not defined in environment variables.")


  try {

    const dbOptions = { dbName }

    await mongoose.connect(dbURI, dbOptions)

  } catch (error) {

    throw error
  }
}

export default connectDB
