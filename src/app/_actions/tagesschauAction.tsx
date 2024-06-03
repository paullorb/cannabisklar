"use server"
import connectDB from "../lib/dbConnect";
import TagesschauModel from "@/app/models/tagesschau";
import { ITagesschau } from "../interfaces/IPost";

interface GetTagesschauRes {
  data?: ITagesschau[];
  errMsg?: string;
}

export async function getTagesschau(): Promise<GetTagesschauRes> {
  try {
    // Specify the database name directly here
    await connectDB('tagesschau');

    // After ensuring the connection, directly use the model that is connected to the 'tagesschau' DB
    const data = await TagesschauModel.find().lean<ITagesschau[]>();
    return { data };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error getting posts from tagesschau', message);
    return { errMsg: message };
  }
}
