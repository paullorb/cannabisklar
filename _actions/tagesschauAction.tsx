"use server"

import connectDB from "../lib/dbConnect"
import TaggesschauModel from "../models/tagesschau"
import { ITagesschau } from "../interfaces/IPost"

interface GetTagesschauRes {
  data?: ITagesschau[];
  errMsg?: string;
}

export async function getTagesschau(): Promise<GetTagesschauRes> {
  try {
    await connectDB();

    const data = await TaggesschauModel.find().lean<ITagesschau[]>()
    return { data }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error getting posts from tagesschau', message)
    return { errMsg: message}
  }
}