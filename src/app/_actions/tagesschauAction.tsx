"use server"

import connectDB from "../lib/dbConnect";
import mongoose from 'mongoose';
import TaggesschauModel from "@/app/models/tagesschau";
import { ITagesschau } from "../interfaces/IPost";

interface GetTagesschauRes {
  data?: ITagesschau[];
  errMsg?: string;
}

export async function getTagesschau(): Promise<GetTagesschauRes> {
  try {
    await connectDB();

    const tagesschauDB = mongoose.connection.useDb('tagesschau', { useCache: true });
    const data = await tagesschauDB.model('21-05-24', TaggesschauModel.schema).find().lean();

    return { data };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error getting posts from tagesschau', message);
    return { errMsg: message };
  }
}
